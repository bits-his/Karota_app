import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'reactstrap'

export default function SuperAgentTable() {
    const navigate = useNavigate()

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
          <Col md={12}>
            <h4 className="app_title"> Registered List </h4>
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
            onClick={() => navigate ("/superagent")}
        >
            Register New +
        </button>
       
      </Row>
    </Card>
  )
}

