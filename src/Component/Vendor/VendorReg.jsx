import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Table } from 'reactstrap'

function VendorReg() {
    const navigate = useNavigate()


  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
          <Col md={12}>
            <h4 className="app_title"> Registered Vendors </h4>
            <hr />
        </Col>
        <button 
            className="app_button"
            style={{ 
                width: 150 ,
                padding: 10,
                marginLeft: 15,
                color: '#000'
            }}
            onClick={() => navigate ("/vendor")}
        >
            Register New +
        </button>
      </Row>
        <hr style={{position: 'relative', width: '97.3%', top: "25px"}}/>
        <Table style={{width: '97.3%'}}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Vendor Name</th>
                    <th>Phone Number</th>
                    <th>Vendor email</th>
                    <th>Office Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Auwal Sani</td>
                    <td>08012345678</td>
                    <td>Auwaul@mail.com</td>
                    <td>No 3 Zungeru Rd</td>
                </tr>
            </tbody>
        </Table>
    </Card>
  )
}

export default VendorReg
