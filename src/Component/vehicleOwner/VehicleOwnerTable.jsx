import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table, Spinner } from "reactstrap";
import { _get } from "../../Utils/Helper";

export default function VehicleOwnerTable() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading,setLoading] = useState(false);

  const [query, setQuery] = useState('select-all')

  const search = () => {
    setQuery('search')

  }


  const getReg = useCallback(() => {
    _get(`vehicle-owners?query_type=${query}&name=${filter}`,
      (resp) => {
        if (resp.success && resp.data) {
          setData(resp.data);
          setLoading(false)
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

  return (
    <>
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 className="app_title"> Vehicle Owners</h4>
            <button
              className="app_button text-right"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
                textAlign: "center",
              }}
              onClick={() => navigate("/VehicleOwner")}
            >
              Add New Owner+
            </button>
          </div>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", flexDirection: "row", marginTop: 30, marginBottom: 10 }}>
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
                  style={{
                    width: "100%",
                    fontSize: 20,
                  }}
                  placeholder="Search Vehicle Owner"
                />
              </div>
            <label
              onClick={search}
              className="label_title" style={{ color: "#000" }}>
              Search
            </label>
          </div>
        </Col>

        <Col>
          {loading ? (
              <Spinner color="warning" className="spinner" type="grow" style={{ margin: "20px auto" }}>
                ""
                ""
              </Spinner>
            ) : 
            data.length === 0 ?( // Display empty table if data is empty
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
                  <th>S/N</th>
                  <th>Owners Name</th>
                    <th>Email</th>
                    <th>phone Num</th>
                    <th>Balance</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="text-center">
                    Record For {filter} not found
                  </td>
                </tr>
              </tbody>
            </Table>
          ): 
          <div className="table_overflow">  
              <Table
                bordered
                responsive
                style={{
                  position: "relative",
                  top: "10px",
                  width: "100%",
              
                  marginTop: "4px",
                }}
              >
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>Owners Name</th>
                    <th>Email</th>
                    <th>phone Num</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, idx) => <tr key={idx}>
                    <td>
                      {idx + 1}
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.email}
                    </td>
                    <td>
                      {item.phone}

                    </td>
                  

                   
                    <td className="text-center btn-table">
                      <Button color="info"
                        className=""
                        onClick={() => navigate(`/vehicleownertable/view/${item.id}`)}
                      >View</Button>
                      <Button
                        className="btn btn-primary"
                        onClick={() => navigate(`/vehicleregistration/${item.id}`)}
                      > vehicle +</Button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>
          </div>}
        </Col>
      </Row>
    </>
  );
}
