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
import { _get } from "../../Utils/Helper";

function VendorReg() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const [loading, setLoading] = useState(false); // Add loading state

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const getReg = useCallback(() => {
    setLoading(true); // Set loading to true before API call
    _get(`vendors?query_type=select-all&plate_no=${filter}`, (resp) => {
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
                  <Button color="success" onClick={toggle}>
                    Top up
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader>Vendor top up</ModalHeader>
        <ModalBody>
          <div>
            <div className="modal-row-details">
              <div>
                <span>Name:</span>
                <div></div>
              </div>
              <div>
                <span>Plate no.:</span>
                <div></div>
              </div>
            </div>
            <div className="modal-row-details">
              <div>
                <span>E-mail:</span>
                <div></div>
              </div>
              <div>
                <span>Balance:</span>
                <div></div>
              </div>
            </div>
            <div className="modal-row-details">
              <div>
                period
                <div>From</div>
                <Input type="date" />
              </div>
              <div>
                <div>To</div>
                <Input type="date" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Pay
          </Button>
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  );
}

export default VendorReg;
