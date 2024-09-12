import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Row,
  Table,
  Label,
  Input,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { _get, _post, formatNumber, separator } from "../../Utils/Helper";
import PaymentButton from "../../PayWithInterswitch";
import moment from "moment";
import { PDFDownloadLink } from "@react-pdf/renderer";
import VendorInvoice from "../pdf/VendorInvoice";

function VendorReg() {
  const _form = {
    date_from: "",
    date_to: "",
    amount: "",
  };

  const navigate = useNavigate();
  const [transId, setTransId] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentVendor, setCurrentVendor] = useState(_form);
  const [loading, setLoading] = useState(false);
  const [payLoading, setPayLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalInner, setModalInner] = useState(false);
  const [vendor, setVendor] = useState({});
  const [form, setForm] = useState(_form);
  const [query, setQuery] = useState("select-all");
  const [selectedItem, setSelectedItem] = useState({});
  const [amountValid, setAmountValid] = useState(false);
  const [error, setError] = useState(""); // Added error state
  const reference_no = moment().format("YYYYMMDDhhmmssSSS");

  // Form field change handler
  const onHandleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle vendor top-up modal
  const toggle = (data) => {
    setVendor(data);
    setModal(!modal);
  };

  // Handle closing the modal
  const toggle1 = () => {
    setModal(false);
    setTimeout(() => {
      setForm(_form);
    }, 1000);
  };

  // Handle inner modal for payment
  const toggleInner = () => {
    if (amountValid) {
      setModal(false);
      const obj = {
        query_type: "vendor_top_up",
        source_id: vendor.vendor_id,
        type_of_top_up: "vendor_top_up",
        destination_id: vendor.vendor_id,
        amount: form.amount,
      };

      _post(`top-up/create`, obj, (resp) => {
        if (resp.success) {
          setTransId(resp.result[0].transaction_id);
          setSelectedItem({
            ...form,
            ...data[0],
            transaction_id: resp.result[0].transaction_id,
          });
          setModalInner(true);
        }
      });
    }
  };

  // Handle closing the inner modal
  const handleCloseModal = () => {
    setModalInner(false);
  };

  // Search vendors
  const search = () => {
    setQuery("search");
    getReg();
  };

  // Fetch vendor data
  const getReg = useCallback(async () => {
    setLoading(true);
    setError(""); // Clear previous error state before making a new request

    try {
      const resp = await _get(`vendors?query_type=${query}&vendor_name=${filter}`);
      
      if (resp.success && resp.results) {
        setData(resp.results);
      } else {
        setError('No data found');
      }
    } catch (err) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, [query, filter]);

  // Reset query to 'select-all' when the filter is empty
  useEffect(() => {
    if (!filter) {
      setQuery("select-all");
      getReg();
    }
  }, [filter, getReg]);

  // Validate amount input
  useEffect(() => {
    setAmountValid(Number(form.amount) > 0 && !isNaN(form.amount)); // Enhanced validation
  }, [form.amount]);

  return (
    <>
    
      <Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="super_header"
        >
          <h4 className="app_title"> Registered Vendors </h4>
          <button
            className="app_button"
            style={{
              width: 150,
              padding: 10,
              marginLeft: 15,
              color: "#000",
              borderRadius: 7,
            }}
            onClick={() => navigate("/vendor")}
          >
            Add vendor +
          </button>
        </div>

        <hr style={{ width: "100%" }} />
        <Row>
          <Col
            md={12}
            style={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <div className="search1">
              <CiSearch
                style={{
                  fontSize: 30,
                  width: 25,
                  marginTop: 3,
                  color: "#000",
                }}
              />
              <Input
                style={{
                  position: "relative",
                  width: "100%",
                  fontSize: 20,
                  top: -5,
                }}
                name="filter"
                value={filter}
                type="text"
                className="app_input2"
                onChange={({ target: { value } }) => setFilter(value)}
                placeholder="Search: eg. Vendor Name | Vendor ID"
              />
            </div>
            <Button
              onClick={search}
              className="label_title1"
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              Search
            </Button>
          </Col>
        </Row>

        {loading ? ( // Display spinner if loading is true
          <Spinner
            color="warning"
            className="spinner"
            type="grow"
            style={{ margin: "20px auto" }}
          >
            ""
          </Spinner>
        ) : data.length === 0 ? ( // Display empty table if data is empty
          <Table
            bordered
            responsive
            style={{
              position: "relative",
              top: "20px",
              width: "100%",
              marginTop: "4px",
            }}
          >
            <thead>
              <tr>
                <th>#</th>
                <th>Vendor Name</th>
                <th>Phone Number</th>
                <th>Vendor email</th>
                <th>Balance</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="6" className="text-center">
                  No vendors {filter} found
                </td>
              </tr>
            </tbody>
          </Table>
        ) : (
          <Table
            bordered
            responsive
            style={{
              position: "relative",
              top: "20px",
              width: "100%",
              marginTop: "4px",
            }}
          >
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>#</th>
                <th style={{ textAlign: "center" }}>Vendor Name</th>
                <th style={{ textAlign: "center" }}>Phone Number</th>
                <th style={{ textAlign: "center" }}>Vendor email</th>
                <th style={{ textAlign: "center" }}>Balance</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((vendor, idx) => (
                <tr key={idx}>
                  <th scope="row">{idx + 1}</th>
                  <td>{vendor.vendor_name}</td>
                  <td>{vendor.vendor_org_phone}</td>
                  <td>{vendor.vendor_org_email}</td>
                  <td style={{ textAlign: "right" }}>
                    {separator(vendor.balance)}
                  </td>
                  <td className="text-center">
                    <Button
                      color="info"
                      className="marginResponsive"
                      onClick={() =>
                        navigate(`/vendorReg/detail/${vendor.vendor_id}`)
                      }
                    >
                      View
                    </Button>
                    <Button
                      color="success"
                      onClick={() => {
                        toggle(vendor);
                      }}
                      // onClick={() => navigate("/vendortopup")}
                    >
                      Top up
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Card>
      <Modal isOpen={modal} style={{ top: "10%" }} centered>
        <ModalHeader className="text-center modal-head-vendor-topup">
          Vendor top up
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12}>
              <Label for="amount">Amount</Label>
              <Input
                name="amount"
                value={form.amount}
                onChange={onHandleChange}
                type="number"
                className="app_input2"
                placeholder="Enter top-up amount"
              />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Row className="text-center">
            <Col md={8}>
              <Button color="danger" onClick={toggle1}>
                Cancel
              </Button>
            </Col>
            <Col md={2}>
              <Button
                color="primary"
                onClick={toggleInner}
                disabled={!amountValid}
              >
                Confirm
              </Button>
            </Col>
          </Row>
        </ModalFooter>
        <ModalFooter>
          <Button color="info" onClick={toggleInner} disabled={!amountValid}>
            Proceed
          </Button>
          <Button color="danger" onClick={toggle1}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>

      {/* Payment modal */}
      <Modal isOpen={modalInner} toggle={handleCloseModal} backdrop="static">
        <ModalHeader toggle={handleCloseModal}>Top-up Payment</ModalHeader>
        <ModalBody>
          <PaymentButton
            amount={form.amount}
            vendor_name={vendor.vendor_name}
            transaction_id={transId}
            item={selectedItem}
            closeModal={handleCloseModal}
            payLoading={payLoading}
            setPayLoading={setPayLoading}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleCloseModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default VendorReg;
