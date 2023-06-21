import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper'

export default function Incident() {
  const [form, setForm] = useState({
    user_name: '',
    type: '',
    description: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

  const handleSubmit = () => {
    _post(
      'api/create_incident',
      form,
      (res) => {
        // setLoading(false);
        setForm({
          user_name: '',
          type: '',
          description: '',
        })
        alert('SuccessFul')
        console.log(res)
      },
      (err) => {
        // setLoading(false);
        console.log(err)
      },
    )
  }

  return (
    <div>
      <Card className="app_card dashboard_card m-0 p-0">
        <Col md={12}>
          <center>
            <h4 className="app_title">INCIDENT </h4>
          </center>
        </Col>
        <Row className="p-0 m-0">
          <Col md={12}>
            <Col md={6}>
              <InputForm
                id="exampleSelect"
                label="Name"
                className="app_input"
                value={form.user_name}
                name="user_name"
                onChange={handleChange}
              />
            </Col>
            <Col md={6}>
              <label className="Label mt-2">Type</label>
              <select
                id="exampleSelect"
                className="app_input"
                value={form.type}
                name="type"
                onChange={handleChange}
              >
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Col md={6}>
              <InputForm
                id="exampleSelect"
                label="Description"
                className="app_input"
                value={form.description}
                name="description"
                onChange={handleChange}
              />
            </Col>
          </Col>
        </Row>
        <Row className="mt-3">
          <button
            className="app_button p-4"
           
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Row>
      </Card>
    </div>
  )
}
