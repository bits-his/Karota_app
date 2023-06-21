import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper'
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export default function VerifyPaymentWithQR() {
  const navigate = useNavigate()

  return (
    <div>
      <Card className="app_card shadow dashboard_card m-0 p-3 mt-2">
        <Row>
          <Col md={12} className="d-flex align-items-center">
            <MdOutlineArrowBackIos
              className="back_icon"
              onClick={() => navigate(-1)}
              size="2.5rem"
              style={{ marginRight: 15 }}
            />
            <h5 className="m-0">Verify Payment</h5>
          </Col>
        </Row>
        <div className="p-0 m-0 mt-3">
          <button className="app_button">Scan Receipt QR Code</button>
        </div>
      </Card>
    </div>
  )
}
