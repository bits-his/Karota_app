import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
// import Modal from "react-modal";
import QRCode from "react-qr-code";
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
  Spinner,
  NavLink,
} from "reactstrap";
import { _get } from "../../../Utils/Helper";
import { useNavigate } from "react-router-dom";

export default function TopUp() {
  // const navigate = useNavigate()
  const [modal, setModal] = useState(false);
  const [fund, setFund] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [userDetail, setUserDetail] = useState({
    Reg_no: "",
    Plate_no: "",
  });
  const [data, setData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [filter, setFilter] = useState("");
  const goto = useNavigate();

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  };

  const handlePay = (id) => {
    // Implement payment logic here
    // For now, just close the modal
    toggleModal();
    console.log(id);
  };

  const fund_us = () => {
    setFund(true);
    toggleModal();
  };
  const agentDetails = {
    name: "Ahmad Ibrahim",
    id: 123,
    bal: 2000,
  };
  const getReg = useCallback(() => {
    _get(`vehicles?query_type=select-all=${filter}`, (resp) => {
      if (resp.success) {
        setData(resp.data);
        console.log(resp.data);
      }
    });
    _get(`vendors?query_type=select-all&plate_no=${filter}`, (resp) => {
      setLoading(false); // Set loading to false after receiving response
      if (resp.success && resp.results) {
        setVendorData(resp.results);
      }
    });
  }, [filter]);

  useEffect(() => {
    getReg();
  }, [getReg]);

  console.log(vendorData);
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 className="app_title">Top Up</h4>
            </div>
            {/* {vendorData.map(item, id) => ( 
            <div
            key={id}
            style={{
              position: 'absolute',
              left: '90rem',
              top: '-25px',
              fontSize: '20px',
              // display: 'flex',
              float: 'right'
            }}>
              {/* <div>Name: {agentDetails.name}</div>
              <div>ID: {agentDetails.id}</div>
              <div>Bal: {agentDetails.bal}</div> */}
            {/* <div>Name: {item.name}</div>
              <div>ID: {item.id}</div>
              <div>Bal: {item.bal}</div>
            </div>
             )}   */}
            <hr />
          </Col>

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
                    placeholder="Search: Reg. No | Vehicle No. | Phone No"
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

          <Card className="mt-5 shadow">
            <div className="table_overflow1">
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
                    top: "10px",
                    width: "97.5%",
                    left: "17px",
                    marginTop: "4px",
                  }}
                >
                  <thead>
                    <tr>
                      <th>Reg. No.</th>
                      <th>Plate No.</th>
                      <th>Chasis No.</th>
                      <th>Balance (₦)</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((vehicle, idx) => (
                      <tr key={idx}>
                        <td>00{vehicle.vehicle_id}</td>
                        <td>{vehicle.plate_no}</td>
                        <td>{vehicle.chasis_no}</td>
                        <td className="text-right">
                          {parseFloat(vehicle.balance).toFixed(2)}
                        </td>
                        <td className="text-center p-2">
                          <ButtonGroup>
                            <Button
                              onClick={(id) => {
                                setCurrentItem(vehicle);
                                handlePay(id);
                              }}
                              color="success"
                            >
                              Pay
                            </Button>
                            <Button
                              color="info"
                              onClick={() => goto("/licens-pdf")}
                            >
                              View Licens
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </div>
          </Card>

          <Modal
            isOpen={modal}
            toggle={toggleModal}
            style={{
              content: {
                position: "relative",
                top: "50%",
                transform: "translateY(-50%)",
              },
            }}
          >
            <ModalHeader
              toggle={toggleModal}
              style={{ paddingTop: "6rem" }}
              centered
            >
              <div style={{ float: "right" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                  onClick={() => toggleModal()}
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </div>
            </ModalHeader>
            <ModalBody>
              <div style={{ textAlign: "center" }}>
                <QRCode
                  size={256}
                  style={{
                    height: "auto",
                    maxWidth: "20%",
                    width: "20%",
                  }}
                  value={userDetail.Reg_no}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "20px" }}>
                <h3>Reg No: 00{currentItem.vehicle_id}</h3>
                <h3>Plate No: {currentItem.plate_no}</h3>
                <h3>Balance: ₦{parseFloat(currentItem.balance).toFixed(2)}</h3>
              </div>
              <Form>
                <FormGroup>
                  <Label for="topUpAmount">Top-up</Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                  />
                </FormGroup>
                <div className="text-center">
                  <Button
                    color="warning"
                    block
                    style={{ marginTop: "10px", marginBottom: "10px" }}
                    onClick={fund_us}
                  >
                    pay
                  </Button>
                </div>
              </Form>
            </ModalBody>
          </Modal>
          {fund ? (
            <div>
              <Form
                style={{
                  position: "relative",
                  top: "-40rem",
                  left: "25rem",
                  backgroundColor: "white",
                  borderRadius: " 5px",
                  height: "55rem",
                  width: "50%",
                  border: "1px solid black",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    left: "40%",
                    top: "15px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Top Up
                </div>
                <hr
                  style={{ width: "95%", position: "relative", left: "12px" }}
                />
                <FormGroup>
                  <div
                    for="topUpAmount"
                    style={{
                      position: "relative",
                      top: "25px",
                      left: "20px",
                      fontWeight: "600",
                      marginBottom: "15px",
                    }}
                  >
                    Balance: 20000
                  </div>
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Enter Amount:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Plate No:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Class No:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Last Pay Date:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Payment From:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                  <Label
                    for="topUpAmount"
                    style={{ position: "relative", top: "25px", left: "20px" }}
                  >
                    Payment To:
                  </Label>
                  <Input
                    type="text"
                    name="topUpAmount"
                    id="topUpAmount"
                    placeholder="Enter amount here"
                    style={{
                      position: "relative",
                      width: "70%",
                      left: "26%",
                    }}
                  />
                </FormGroup>
                <div className="text-center">
                  <Button
                    color="warning"
                    block
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      width: "30%",
                    }}
                    onClick={fund_us}
                  >
                    pay
                  </Button>
                </div>
              </Form>
            </div>
          ) : (
            <></>
          )}
        </Row>
      </Card>
    </div>
  );
}
