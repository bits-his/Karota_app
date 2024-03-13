
import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Table } from "reactstrap";

export default function VehicleOwnerTable() {
  const navigate = useNavigate();

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={9}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 className="app_title"> Vehicle Owner </h4>
          </div>
        </Col>

        <Col>
          <button
            className="app_button text-right"
            style={{
              width: 150,
              padding: 10,
              marginLeft: 15,
              color: "#000",
            }}
            onClick={() => navigate("/VehicleReg")}
          >
            Register New +
          </button>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
           
            <Col md={12}>
              <div className="search">
                <CiSearch
                  style={{
                    fontSize: 30,
                    width: 25,
                    marginTop: 3,
                    color: "#000",
                  }}
                />
                <input
                  style={{
                    width: "100%",
                    fontSize: 20,
                  }}
                  className="app_input2"
                  placeholder="Search Individual"
                />
              </div>
            </Col> 
             <label className="label_title" style={{ color: "#000" }}>
              Search
            </label>
          </div>
        </Col>

        <Row>
          <div className="table_overflow">
            <Table
              bordered
              responsive
              className="mt-5"
              style={{
                border: "1px solid #ccc",
                padding: 0,
                marginTop: 40,
                marginLeft: 30,
                maxWidth: 800,
                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    S/N
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Name
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Phone
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Contact Address
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    1
                  </th>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Mark
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    990022
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    @mdo
                  </td>
                  <td
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #f5c005",
                      width: "25%",
                    }}
                  >
                    Kano
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Row>
      </Row>
    </Card>
  );
}
