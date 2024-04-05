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

function VendorReg() {
  const _form = {
    date_from: "",
    date_to: "",
    amount: 0,
  };
  
  const navigate = useNavigate();
  const [transId, setTransId] = useState('')
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const [currentVendor, setCurrentVendor] = useState(_form);
  const [loading, setLoading] = useState(false); // Add loading state
  const [payLoading ,setPayLoading] = useState(false)
  const [modal, setModal] = useState(false);
  const [modalInner, setModalInner] = useState(false);
  const [vendor, setVendor] = useState({});
  const [form, setForm] = useState({});
  const [query, setQuery] = useState('select-all')
  const reference_no = moment().format("YYYYMMDDhhmmssSSS");
  const onHandleChange = ({ target: { name, value } }) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const toggle = (data) => {
    //console.log(data);
    setVendor(data);
    setModal(!modal);
  };

  const toggleInner = () => {
    // console.log(data);
     setPayLoading(true);
    const obj = {
      query_type : 'vendor_top_up',
      source_id: vendor.vendor_id,
      type_of_top_up: 'vendor_top_up',
      destination_id: vendor.vendor_id,
      amount:form.amount,
    }
    _post(`top-up/create`, obj, resp => {
      setPayLoading(true)
      if (resp.success){
        console.log(resp.result[0].transaction_id)
        setTransId(resp.result[0].transaction_id);
        setPayLoading(false) 
       setModalInner(!modalInner);
      }
      //console.log(resp)} )
     
   
  })};

  const search = () => {
    setQuery('search')

  }

  const getReg = useCallback(() => {
    setLoading(true); // Set loading to true before API call
    _get(`vendors?query_type=${query}&vendor_name=${filter}`, (resp) => {
     setLoading(false); // Set loading to false after receiving response
    // console.log(resp)
      if (resp.success && resp.results) {
        setData(resp.results);
      }
    });
  }, [query]);
  useEffect(() => {
    if (!filter) {
      setQuery('select-all')
    }
  })
  useEffect(() => {
    getReg();
  }, [getReg]);


  // const pay = () {
  //   _post(
  //     "top_up_history/create",
  //     form,
  //     (res) => {
  //       if (res.success) {
  //         setLoading(false);
  //         toast.success("Top up sucessful");
  //         navigate("/vendorReg");
  //       }
  //     }
  //   );
  // }
  //console.log(vendor)
  return (
    <>
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
        <Col md={12} style={{ display: "flex", flexDirection: "row", width: "100%" }}>
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
              <th style={{textAlign: "center"}}>#</th>
              <th style={{textAlign: "center"}}>Vendor Name</th>
              <th style={{textAlign: "center"}}>Phone Number</th>
              <th style={{textAlign: "center"}}>Vendor email</th>
              <th style={{textAlign: "center"}}>Balance</th>
              <th style={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((vendor, idx) => (
              <tr key={idx}>
                <th scope="row">{idx + 1}</th>
                <td>{vendor.vendor_name}</td>
                <td>{vendor.vendor_org_phone}</td>
                <td>{vendor.vendor_org_email}</td>
                <td style={{textAlign: "right"}}>{separator(vendor.balance)}</td>
                <td className="text-center">
                  <Button color="info" className="marginResponsive"
                    onClick={() => navigate(`/vendorReg/detail/${vendor.vendor_id}`)}
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
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader className="text-center modal-head-vendor-topup">
          Vendor top up
        </ModalHeader>
        <ModalBody>
          <div className="modal-row-details">
            <div className="modal-row-content small-margin-right">
              <span>Name:</span>
              <div>{vendor?.vendor_name}</div>
            </div>
            <div className="modal-row-content">
              <span>Vendor no.:</span>
              <div>{vendor?.vendor_id}</div>
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
              <Button color="primary" onClick={toggleInner}
              >
                Pay
              </Button>
            </Col>
          </Row>
        </ModalFooter>
      </Modal>

      {/* Nested modal for payment confirmation */}
      <Modal isOpen={modalInner} toggle={toggleInner} className="innerModal">
        <ModalHeader className="text-center modal-head-vendor-topup">
          Payment confirmation
        </ModalHeader>
        <ModalBody>
          <div className="modal-row-details">
            <div className="modal-row-content small-margin-right">
              <span>Name: </span>
              <div>{vendor?.vendor_name}</div>
            </div>
            <div className="modal-row-content">
              <span>Amount: </span>
              <div>{form.amount? (separator(form.amount)):(0)}</div>
            </div>
          </div>
          <div className="modal-row-details">
            <div className="modal-row-content small-margin-right">
              <span>Transaction ID:</span>
              <div>{vendor?.vendor_id}</div>
            </div>
            <div className="modal-row-content">
              <span>Refence no: </span>
              <div>{transId}</div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
         
          <Col md={4}>
            <Button color="primary" onClick={()=>setModalInner(!modalInner)}>
              Invoice
            </Button>
          </Col>
          <Col md={6}>
            <Button color="success" onClick={toggleInner}>
              Pay with bank
            </Button>
          </Col>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default VendorReg;
