import React from "react";
import { CiSearch } from "react-icons/ci";
import { Button, Card, Col, Row, Table } from "reactstrap";

export default function TopUp() {
  return (
    <div>
      <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4 className="app_title"> Top Up </h4>

              {/* <button
                className="app_button"
                style={{
                  width: 150,
                  padding: 10,
                  marginLeft: 15,
                  color: "#000",
                }}
                onClick={() => navigate("/agent")}
              >
                Register New +
              </button> */}
            </div>
            <hr />
          </Col>

          <Col md={12}>
            <div
              style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
            >
              <label className="label_title" style={{ color: "#000" }}>
                Search
              </label>
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
                    placeholder="Search Top Up"
                  />
                </div>
              </Col>
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
                      I/D
                    </th>
                    <th
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #f5c005",
                        width: "25%",
                      }}
                    >
                      Registration No
                    </th>
                    <th
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #f5c005",
                        width: "25%",
                      }}
                    >
                      Lata No
                    </th>
                    <th
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #f5c005",
                        width: "25%",
                      }}
                    >
                      Action
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
                      Otto
                    </td>
                    <td
                      style={{
                        padding: "5px 10px",
                        border: "1px solid #f5c005",
                        width: "25%",
                      }}
                    >
                      <Row>
                        <Col md={6}>
                          <Button>Pay</Button>
                        </Col>
                        <Col md={6}>
                          <Button>View</Button>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Row>
        </Row>
      </Card>
    </div>
  );
}
