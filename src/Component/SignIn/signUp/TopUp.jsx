import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Modal from "react-modal";
import QRCode from "react-qr-code"
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  // Modal,
  // ModalBody,
  // ModalFooter,
  // ModalHeader,
  Row,
  Table,
} from "reactstrap";
import { _get } from "../../../Utils/Helper";



export default function TopUp() {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [userDetail, setUserDetail] = useState({
    Reg_no: "",
    Plate_no: ""
  })
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal)
  };

  const handlePay = (id) => {
    // Implement payment logic here
    // For now, just close the modal
    toggleModal();
    console.log(id)
  };

  const getReg = useCallback(() => {
    _get(`vehicles?query_type=select-all=${filter}`, (resp) => {
      if (resp.success) {
        setData(resp.data);
        console.log(resp.data)
      }
    });
  }, [filter]);

  useEffect(() => {
    getReg();
  }, [getReg]);

  return (
    <div>
      <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 className="app_title">Top Up</h4>
            </div>
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
                      position: 'relative',
                      width: "100%",
                      fontSize: 20,
                      top: -5
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
              <Table
                bordered
                responsive
                style={{ position: 'relative', top: '10px', width: '97.5%', left: '17px', marginTop: '4px' }}>
                <thead>
                  <tr>
                    <th>Reg. No.</th>
                    <th>Plate No.</th>
                    <th>Balance (₦)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((vehicle, idx) => (
                    <tr key={idx}>
                      <td>00{vehicle.vehicle_id}</td>
                      <td>{vehicle.plate_no}</td>
                      <td className="text-right">{parseFloat(vehicle.balance).toFixed(2)}</td>
                      <td className="text-center p-2">
                        <ButtonGroup>
                          <Button onClick={(id) => {
                            setCurrentItem(vehicle);
                            handlePay(id);
                          }} color="success">
                            Pay
                          </Button>
                          <Button color="info">View</Button>
                        </ButtonGroup>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>

          <Modal isOpen={modal}
            style={{
              overlay: {
                width: '100%',
                // left: '20rem'
              },
              content: {
                position: 'relative',
                top: '15rem',
                width: '60%',
                left: '40rem',
                height: '60vh'
              }
            }}
          >
            <div
              style={{
                position: "relative",
                float: "right",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
                onClick={() => toggleModal()}>
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </div>
            <QRCode
              size={256}
              style={{
                position: 'relative',
                height: "auto",
                maxWidth: "20%",
                width: "20%",
                left: '80%',
                top: '5%'
              }}
              value={userDetail.Reg_no}
              viewBox={`0 0 256 256`}
            />
            <div
              style={{
                position: 'absolute',
                top: '10px'
              }}
            >
              <h3>Reg No: 00{currentItem.vehicle_id}</h3>
              <h3>Plate No: {currentItem.plate_no}</h3>
              <h3>Balance: ₦{parseFloat(currentItem.balance).toFixed(2)}</h3>
            </div>
            <Form
              style={{
                position: "absolute",
                top: "20rem",
                left: "10rem",
                width: '60%',
                // backgroundColor: "red"
              }}
            >
              <label
                style={{ width: '20%', fontSize: '150%' }}>Top-up</label>
              <input
                style={{
                  width: '80%',
                  height: "40px",
                  borderRadius: "5px",
                  border: "1px  solid ",
                  paddingLeft: '8px'
                }}
                placeholder="Enter amount here"
              />
              <Button
                style={{
                  position: "relative",
                  display: 'flex',
                  // alignContent: 'center',
                  justifyContent: 'center',
                  left: "50%",
                  top: '20px',
                  width: "25%",
                  backgroundColor: "#f5c005"
                }}>Submit</Button>
            </Form>
          </Modal>

        </Row>
      </Card>
    </div>
  );
}
