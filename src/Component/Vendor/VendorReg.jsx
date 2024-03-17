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
} from "reactstrap";
import { _get, formatNumber } from "../../Utils/Helper";
import PaymentButton from "../../PayWithInterswitch";
import moment from "moment";

function VendorReg() {
  const _form = {
    date_from: "",
    date_to: "",
    amount: 0,
  };
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentVendor, setCurrentVendor] = useState(_form);
  const [loading, setLoading] = useState(false); // Add loading state
  const [modal, setModal] = useState(false);
  const [vendor, setVendor] = useState({});
  const [form, setForm] = useState({});
  const reference_no = moment().format("YYYYMMDDhhmmssSSS");
  const onHandleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const toggle = (data) => {
    console.log(data);
    setVendor(data);
    setModal(!modal);
  };
  const getReg = useCallback(() => {
    setLoading(true); // Set loading to true before API call
    _get(`vendors?query_type=select-all`, (resp) => {
      setLoading(false); // Set loading to false after receiving response
      if (resp.success && resp.results) {
        setData(resp.results);
      }
    });
  }, [filter]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col
          md={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
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
        </Col>
      </Row>
      <hr style={{ width: "100%" }} />
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Col md={12}>
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
            </Col>
            <Label
              onClick={getReg}
              className="label_title1"
              style={{ color: "#000", cursor: "pointer" }}
            >
              Search
            </Label>
          </div>
        </Col>
      </Row>

      {data.length === 0 ? (
        <Spinner
          color="warning"
          className="spinner"
          type="grow"
          style={{ margin: "20px auto" }}
        >
          ""
        </Spinner>
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
              <th>#</th>
              <th>Vendor Name</th>
              <th>Phone Number</th>
              <th>Vendor email</th>
              <th>Office Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vendor, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{vendor.vendor_name}</td>
                <td>{vendor.vendor_org_phone}</td>
                <td>{vendor.vendor_org_email}</td>
                <td>{vendor.vendor_ofiice_address}</td>
                <td className="text-center">
                  <Button color="info" className="marginResponsive">
                    View
                  </Button>
                  <Button color="success" onClick={toggle}
                  // {() => {setCurrentVendor(vendor);}}
                  >
                    Top up
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center modal-head-vendor-topup">Vendor top up</ModalHeader>
        <ModalBody>
          <div className="modal-row-details">
            <div className="modal-row-content small-margin-right">
              <span>Name:</span>
              <div>{vendor?.vendor_name}</div>
            </div>
            <div className="modal-row-content">
              <span>Vendor no.:</span>
              <div>{vendor?.id}</div>
            </div>
          </div>
          <div className="modal-row-details">
            <div className="modal-row-content small-margin-right">
              <span>E-mail:</span>
              <div>{vendor?.vendor_org_email}</div>
            </div>
            <div className="modal-row-content">
              <span>Balance:</span>
              <div>{formatNumber(vendor?.balance)}</div>
            </div>
          </div>
          <div>
            <div className="period-bigger">period</div>
            <div className="modal-row-details">
              <div className="modal-row-content small-margin-right">
                <div>From</div>
                <Input
                  type="date"
                  className="text-center"
                  value={form.date_from}
                  name="date_from"
                  onChange={onHandleChange}
                />
              </div>
              <div className="modal-row-content">
                <div>To</div>
                <Input
                  type="date"
                  className="text-center"
                  value={form.date_to}
                  name="date_to"
                  onChange={onHandleChange}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div>
              <Label>Amount({formatNumber(form.amount)})</Label>
              <Input
                type="number"
                // style={{ width: "50%" }}
                className="text-center"
                value={form.amount}
                name="amount"
                onChange={onHandleChange}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Row className="text-center">
            <Col md={8}>
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </Col>
            <Col md={2}>
              <PaymentButton
                color="success"
                amount={form.amount}
                label="Pay"
                email={vendor?.vendor_org_email}
                user_id={vendor?.id}
                name={vendor?.vendor_name}
                reference_no={reference_no}
              />
            </Col>
          </Row>
        </ModalFooter>
      </Modal> */}
    </Card>
  );
}

export default VendorReg;
