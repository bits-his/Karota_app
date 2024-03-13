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
        <Table>
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
                    <th>1</th>
                    <th>Auwal Sani</th>
                    <th>08012345678</th>
                    <th>Auwaul@mail.com</th>
                    <th>No 3 Zungeru Rd</th>
                </tr>
            </tbody>
        </Table>
    </Card>
  )
}

export default VendorReg
