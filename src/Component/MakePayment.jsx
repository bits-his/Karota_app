import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import useQuery, { _post } from '../Utils/Helper'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function MakePayment() {
  const query = useQuery();
  const vehicle_id = query.get('vehicle_id')
  const [form, setForm] = useState({
    vehicle_id: vehicle_id,
    amount: '2000',
    card_number: '',
    cvv: '',
    expiry_date: '',
  })
  const agent_name = query.get("agent_name");

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }
  const navigate = useNavigate()


  const handleSubmit = () => {
    _post(
      `api/payments?query_type=create`,
      form,
      (res) => {
        alert('sucessful')
        console.log(form)
        // setForm({
        //     vehicle_id: '',
        //     amount: '',
        //     card_number: '',
        //     cvv: '',
        //     expiry_date: ''
        // })
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
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
            <h5 className="m-0">Make Payment</h5>
          </Col>
        </Row>
        <Row className="p-0 mt-3">
          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="Unique Number"
              className="app_input"
              value={form.vehicle_id}
              name="vehicle_id"
              onChange={handleChange}
              disabled
            />
          </Col>
          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="Amount"
              className="app_input"
              value={form.amount}
              name="amount"
              onChange={handleChange}
              disabled
            />
          </Col>

          <Col md={6}>
            <InputForm
              className="app_input"
              id="exampleSelect"
              label="Card Number"
              value={form.card_number}
              name="card_number"
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="CVV Number"
              className="app_input"
              value={form.cvv}
              name="cvv"
              onChange={handleChange}
            />
          </Col>

          <Col md={6}>
            <InputForm
              id="exampleSelect"
              label="Card Expiring Date"
              className="app_input"
              value={form.expiry_date}
              name="expiry_date"
              onChange={handleChange}
              type='date'
            />
          </Col>
        </Row>
        <div className="mt-3">
          <button 
            className="app_button"
            onClick={() => {
              handleSubmit();
              navigate('/payment')
            }}
        >Pay</button>
        </div>
      </Card>
    </div>
  )
}
