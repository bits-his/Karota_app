// import React, { useCallback, useEffect, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { Card, Col, Input, Label, Table } from 'reactstrap'
// import useQuery, { _get } from '../../Utils/Helper'

// function VendorDetail() {
//   const [vendorDetail, setVendorDetail] = useState([])
//   const navigate = useNavigate();
//   const location = useLocation()
//   const query = useQuery()
//   const vendor = location.state
//  console.log(vendor)

//  const getReg = useCallback(() => {
//   _get(`fetch/trans_history/?query_type=vendor&vendor_id=${vendor.id}`, (res) => {
//     setVendorDetail(res.data[0])
//   })
//  }, [vendor.id])

//  useEffect(() => {
//   getReg();
//  }, [getReg])

//  console.log(vendorDetail)
//   return (
//     <div>
//       <Col md={12}>
//         <Card className='container shadow app_card mt-5'
//           style={{ marginTop: '20px',paddingTop:'20px' }}>
//             <button
//             className="app_button"
//             style={{
//               // float: 'right',
//               width: 150,
//               padding: 10,
//               margin: 15,
//               color: "#000",
//               borderRadius: 7,
//             }}
//             onClick={() => navigate('/vendorReg')}
//           >
//             Back
//           </button>
//             <button
//             className="app_button"
//             style={{
//               float: 'right',
//               width: 180,
//               padding: 10,
//               margin: 15,
//               color: "#000",
//               borderRadius: 7,
//             }}
//             onClick={() => navigate(`/vendorReg/view/${vendor.id}`)}
//           >
//             View Vendor Detail
//           </button>
//           <Table
//             striped
//           >
//             <tbody>
//               <tr>
//                 <th width="20%">Date</th>
//                 <th width="20%">Description</th>
//                 <th width="20%">Dr</th>
//                 <th width="20%">Cr</th>
//               </tr>
//               <tr>
//                 <td>{vendorDetail.t_date}</td>
//                 <td>{vendorDetail.description}</td>
//                 <td>{vendorDetail.debit}</td>
//                 <td>{vendorDetail.credit}</td>
//               </tr>
//             </tbody>
//           </Table>
//         </Card>
//       </Col>
//     </div>
//   )
// }

import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Card, Row, Col, Button } from "reactstrap";
// import keke from "../../../assets/keke_napep.png";
import { _get, _post } from "../../Utils/Helper";

export default function VendorDetail() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _post(
      `top-up/create`,
      {
        destination_id: owner_id,
        type_of_top_up: "vendor_top_up",
        query_type: "select_destination",
      },
      (resp) => {
        if (resp.success && resp.results) {
          setData(resp.results);
        }
      }
    );
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  const handleBackToTable = () => {
    navigate("/vendorReg");
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
                  <td>{data[0].t_date}</td>
                  <td>{data[0].type_of_top_up}</td>
                  <td>{data[0].description}</td>
                  <td>{data[0].credit}</td>
                  <td>{data[0].balance}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
