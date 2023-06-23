import React from "react";
import { CiSearch } from "react-icons/ci";
import { Col, Row } from "reactstrap";

export default function Table1() {
  return (
    <div>
      <Col md={12} style={{marginTop: 20}}>
        <center>
            <h4 className="app_title"> Total No. of Register Vehicle </h4>
        </center>
            <hr style={{border: "1px solid #198a3c"}}/>
        </Col>
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
         
            <input
                className="app_input2 mt-3"
                placeholder="Search Ride"
                style={{width: '100%'}}
            />
          </div>
        </Col>
        {/* </Row> */}
        <Row>
          <Col md={12}>
            <div className="table_overflow">
              <table
                style={{
                  border: "1px solid #ccc",
                  padding: 0,
                  marginTop: 40,
                  width: "100%",
                }}
                className="mt-5"
              >
                <thead>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                  <th
                    style={{
                      padding: "5px 10px",
                      border: "1px solid #198a3c",
                    }}
                  >
                    Table 1
                  </th>
                </thead>
              </table>
            </div>
          </Col>
        </Row>
    </div>
  );
}