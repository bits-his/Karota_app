
import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row, Table,Spinner } from "reactstrap";
import { _get } from "../../Utils/Helper";

export default function VehicleOwnerTable() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const getReg = useCallback(() => {
    _get(`vehicles?query_type=select-all&plate_no=${filter}`,
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
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={9}>
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

        <Col>
        
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
                    Car Name
                  </th>
                  <th>
                    Engine. No.
                  </th>
                  <th>
                    Plate No
                  </th>
                  <th>
                    Reg. Date
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
                {data.map((item, idx) => <tr>
                  <th>
                    {idx + 1}
                  </th>
                  <td>
                    {item.vehicle_id}
                  </td>
                  <th>
                    Owner
                  </th>
                  <th>
                    Napep
                  </th>
                  <td>
                    {item.engine_no}

                  </td>
                  <td>
                    {item.plate_no}
                  </td>
                  <td>
                    NGN 0.00
                  </td>
                  <td className="text-center">
                    <Button color="info">View</Button>
                    <button 
                    className="btn btn-primary"
                    onClick={() => navigate('/VehicleOwner')}
                    > Add</button>
                  </td>
                </tr>)}
              </tbody>
            </Table>)}
          </div>
        </Row>
      </Row>
    </Card>
  );
}
