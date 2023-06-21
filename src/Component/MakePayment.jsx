import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper';

export default function MakePayment() {
    const [form, setForm] = useState({
        unique_number: '',
        Amount: '',
        card_number: '',
        CVV_number: '',
        expiring_date: ''
    })
    
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        console.log(form)
    };

  return (
    <div>
        <Card className="app_card dashboard_card m-0 p-0">
            <Col md={12}>
                <center>
                    <h4 className="app_title" style={{fontFamily: 'monospace', fontWeight: 'bold'}}>MAKE PAYMENT </h4>
                </center>
            </Col>
            <Row className='p-0 m-0'>
                <Col md={12}>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Unique Number"
                            className="app_input"
                            value={form.unique_number}
                            name="unique_number"
                            onChange={handleChange}
                        />
                    </Col>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Amount"
                            className="app_input"
                            value={form.Amount}
                            name="Amount"
                            onChange={handleChange}
                        />
                    </Col>
                </Col>    
            </Row>
            <Row>
                <Col md={12}>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Card Number"
                            className="app_input"
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
                            value={form.CVV_number}
                            name="CVV_number"
                            onChange={handleChange}
                        />
                    </Col>
                </Col>
                <Col md= {12}>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Card Expiring Date"
                            className="app_input"
                            value={form.expiring_date}
                            name="expiring_date"
                            onChange={handleChange}
                        />
                    </Col>
                </Col>
            </Row>
            <Row className="mt-3">
                <button
                    className="app_button p-4"
                    style={{ 
                        width: 150 ,
                        marginLeft: 30,
                        marginTop: 20,
                        padding: 10,
                        color: '',
                        cursor: 'pointer'
                    }}
                >
                    Pay
                </button>
            </Row>
        </Card>
    </div>
  )
}