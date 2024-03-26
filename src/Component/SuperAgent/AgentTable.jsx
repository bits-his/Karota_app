import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table, Spinner,ListGroupItem } from "reactstrap";
import { _get } from "../../Utils/Helper";

export default function AgentTable() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  const [query, setQuery] = useState("select-all");
 const [loading,setLoading] = useState(false);
  const search = () => {
    setQuery("search");
  };
  const getReg = useCallback(() => {
    setLoading(true); 
    _get(`agents?query_type=${query}&name=${filter}`, (resp) => {
      if (resp.success && resp.results) {
        setData(resp.results);
        setLoading(false);
      
      }
    }, ()=>{
      setLoading(false);
    });
  }, [query]);

  useEffect(() => {
    if (!filter) {
      setQuery("select-all");
    }
  });
  useEffect(() => {
    getReg();
  }, [getReg]);

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 className="app_title"> Registered Agents </h4>

            <button
              className="app_button"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
              }}
              onClick={() => navigate("/agent")}
            >
              New Agent +
            </button>
          </div>
          <hr />
        </Col>

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
                  name="filter"
                  value={filter}
                  type="text"
                  className="app_input2"
                  onChange={({ target: { value } }) => setFilter(value)}
                  placeholder="Search Individual"
                />
                
              </div>
            </Col>
            <label
              onClick={search}
              className="label_title"
              style={{ color: "#000" }}
            >
              Search
            </label>
          </div>
        </Col>

        <Row>
          <div className="table_overflow">
          
            {loading? (
              <Spinner
                color="warning"
                className="spinner"
                type="grow"
                style={{ margin: "20px auto" }}
              />
               
            ) : (
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
                  {data?.map((agent, idx) => (
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <td>{agent.name}</td>
                      <td>{agent.phone_no}</td>
                      <td>{agent.email}</td>
                      <td>{agent.address}</td>
                      <td className="text-center">
                        <Button
                        style={{margin:"5px"}}
                          color="info"
                          onClick={() =>
                            navigate(`/agenttable/view/${agent.id}`)
                            
                          }
                        >
                          View
                        </Button>
                        <Button
                          color="success"
                          onClick={() =>
                            navigate(`/agenthistory/history/${agent.id}`)
                          }
                        >
                          View history
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Row>
      </Row>
    </Card>
  );
}
