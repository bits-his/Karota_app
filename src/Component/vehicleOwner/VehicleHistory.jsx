// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
// import { _get } from '../../Utils/Helper'

// export default function VehicleHistory() {
//     const vehicle_id = useParams()
//     const [transactions, setTransactions] = useState([])
//     useEffect(()=> {
//         _get(`trans_history?query_type=vehicles&vehicle_id${vehicle_id}`,
//         res => {
//           console.log(res.data)
//         },[])
//     })
//   return (
//     <div>VehicleHistory
//       {transactions}
//     </div>
//   )
// }
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Card, Row, Col, Button } from "reactstrap";
import keke from "../../assets/keke_napep.png";
import { _get, _post } from "../../Utils/Helper";

export default function VehicleHistory() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const params = useParams();
  const owner_id = params.id;
  console.log(owner_id)

  const getReg = useCallback(() => {
    console.log("na nme")
    _post(
      `top-up/create`,
      {
        source_id: owner_id,
<<<<<<< HEAD
        type_of_top_up: "vehicle_top_up",
=======
>>>>>>> 600f11c50e2d57ac8a538dda7de01425e3677d13
        query_type: "select_vehicle",
      },
      (resp) => {
        if (resp.success && resp.results) {
<<<<<<< HEAD
          //console.log(resp)
          setData(resp.results);
=======
          const dataDetail = resp.results.find((item) => item.source_id == owner_id)
          console.log(dataDetail, "see me")
          setData(dataDetail);
>>>>>>> 600f11c50e2d57ac8a538dda7de01425e3677d13
        }
      }
    );
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  const handleBackToTable = () => {
    navigate("/vehicles");
  };
  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              className="app_button"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
                borderRadius: 10,
              }}
              onClick={handleBackToTable}
            >
              Back
            </Button>

            <h4 className="app_title">Account History</h4>

            <img
              src={keke}
              alt="User DP"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
          </div>
          <hr />
        </Col>
        <Col md={12}>
          <Col md={12}>
            <Table striped bordered>
              {/* {JSON.stringify(data)} */}
              <thead>
                <tr className="table-dark">
                  <th scope="row">Date</th>
                  <th scope="row">Type</th>
                  <th scope="row">Description</th>
                  <th scope="row">Amount</th>
                  <th scope="row">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                      {data.t_date}
                    </td>
                    <td>
                      {data.type_of_top_up}
                    </td>
                    <td>
                      {data.description}
                    </td>
                    <td className="text-center">
                      {data.credit}
                    </td>
                    <td className="text-center">
                      {data.balance}
                    </td>
                  </tr>
              </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
