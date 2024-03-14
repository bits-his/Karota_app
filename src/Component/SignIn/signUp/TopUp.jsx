import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
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
} from "reactstrap";
import { _get } from "../../../Utils/Helper";

export default function TopUp() {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  const handlePay = () => {
    // Implement payment logic here
    // For now, just close the modal
    toggleModal();
  };

  const getReg = useCallback(() => {
    _get(`vehicles?plate_no=${filter}`, (resp) => {
      setData(resp.data);
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
              style={{ position: 'relative', top: '10px',  width: '97.5%',left: '17px', marginTop: '4px' }}>
                <thead>
                  <tr>
                    <th>Reg. No.</th>
                    <th>Plate No.</th>
                    <th>Balance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((vehicle, idx) => (
                    <tr key={idx}>
                      <td>{vehicle.vehicle_id}</td>
                      <td>{vehicle.plate_no}</td>
                      <td>N{vehicle.balance}</td>
                      <td className="text-center p-2">
                        <ButtonGroup>
                          <Button onClick={() => {
                            setCurrentItem(vehicle);
                            toggleModal();
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

          <Modal isOpen={modal} toggle={toggleModal}>
            <ModalHeader toggle={toggleModal}>
              Registration {currentItem.vehicle_id} / Balance: {currentItem.balance}
            </ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label htmlFor="amount">Amount</Label>
                  <Input type="number" name="amount" id="amount" />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleModal}>
                Cancel
              </Button>{" "}
              <Button variant="danger" onClick={handlePay}>
                Pay
              </Button>
            </ModalFooter>
          </Modal>
        </Row>
      </Card>
    </div>
  );
}
