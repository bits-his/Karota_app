import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper'
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'

export default function VarifyPaymentWithID() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    enter_receipt_Id: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

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
          <label>Receipt ID</label>
          <div className="d-flex align-items-center" style={{ width: '100%' }}>
            <input
              id="exampleSelect"
              className="app_input"
              value={form.enter_receipt_Id}
              name="enter_receipt_Id"
              onChange={handleChange}
              style={{ width: '100%', marginRight: 10 }}
            />
            <button className="app_button">Check</button>
          </div>
        </div>
      </Card>
    </div>
  )
}
