
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table, Spinner } from "reactstrap";
import { _get } from "../../Utils/Helper";

export default function VehicleOwnerTable() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const getReg = useCallback(() => {
    _get(`vehicle-owners?query_type=select-all`,
      (resp) => {
        if (resp.success && resp.data) {
          setData(resp.data);
        }
      });
  }, [filter]);

  useEffect(() => {
    getReg();
  }, [getReg]);

  return (
    <>
      <Row>
        <Col md={12}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 className="app_title"> Vehicle Owner </h4>
            <button
              className="app_button text-right"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
                textAlign: "center"
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
            {data.length === 0 ? (
              <Spinner color="warning" className="spinner" type="grow" style={{ margin: "20px auto" }}>
                ""
              </Spinner>

            ) : (
              <Table
                bordered
                responsive
                style={{ position: 'relative', top: '10px', width: '95.5%', left: '30px', marginTop: '4px' }}>
                <thead>
                  <tr>
                    <th>
                      S/N
                    </th>
                    <th>
                      Owners Name
                    </th>
                    <th>
                      Email
                    </th>
                    <th>
                      phone Num
                    </th>
                    <th>
                      Plate No
                    </th>

                    <th>
                      Balance
                    </th>
                    <th>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, idx) => <tr key={idx}>
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
                    <td>
                      {item.phone}
                    </td>

                    <td>
                      NGN 0.00
                    </td>
                    <td className="text-center">
                      <Button color="info"
                        onClick={() => navigate(`/vehicleownertable/${item.id}`)}
                      >View</Button>
                      <Button
                        className="btn btn-primary"
                        onClick={() => navigate(`/vehicleregistration/${item.id}`)}
                      > Add vehicle</Button>
                    </td>
                  </tr>)}
                </tbody>
              </Table>)}
          </div>
        </Row>
      </Row>
    </>
  );
}
