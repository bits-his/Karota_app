import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table } from "reactstrap";
import { _get } from "../../Utils/Helper";
import { useLocation } from "react-router-dom";

export default function SuperAgentTable() {
  const navigate = useNavigate();
  const location = useLocation();
const formData = location.state && location.state.formData;
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");
  const getReg = useCallback(() => {
    _get(`superagent?query_type=select-all`, (resp) => {
      if (resp.success && resp.results) {
        setData(resp.results);
      }
    });
  }, [filter]);

  useEffect(() => {
    if (formData) {
    }
  }, [formData]);
  
  useEffect(() => {
    getReg();
  }, [getReg]);
  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "88%",
        }}
      >
        <h4 className="app_title"> Super Agents </h4>

        <button
          className="app_button text-right rounded"
          style={{
            position: "relative",
            left: 138,
            width: 150,
            padding: 10,
            marginLeft: 15,
            color: "#000",
          }}
          onClick={() => navigate("/superagent")}
        >
          Add SuperAgent
        </button>
      </div>

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
              style={{
                position: "relative",
                top: "10px",
                width: "95.3%",
                left: "32px",
                marginTop: "4px",
              }}
            >
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Contact Address</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((agent, idx) => (
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td>{agent.name}</td>
                    <td>{agent.phone}</td>
                    <td>{agent.email}</td>
                    <td>{agent.address}</td>
                    <td className="text-center">
                      <Button color="info">View</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Row>
      </Row>
    </Card>
  );
}
