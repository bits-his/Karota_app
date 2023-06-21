import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const navigate =useNavigate()
    const [form, setForm] = useState({
        unique_number: ''
    })
    
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        console.log(form)
    };;

  return (
    <div>
        <Card className="app_card dashboard_card m-0 p-0">
            <Col md={12}>
                <center>
                    <h4 className="app_title" style={{fontFamily: 'monospace', fontWeight: 'bold'}}>INCIDENT </h4>
                </center>
            </Col>
            <Row className='p-0 m-0'>
                <Col md={12}>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Name"
                            className="app_input"
                            value={form.unique_number}
                            name="unique_number"
                            onChange={handleChange}
                        />
                    </Col>
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
                        GO
                    </button>
                </Col>    
            </Row>
            <Col md={6}>
                <center>
                    <h4 className="app_title" style={{fontFamily: 'monospace', fontWeight: 'bold'}}>USER DETAILS </h4>
                </center>
            </Col>
            <Col md={12}>
                <Col md={6}>
                    <center>
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
                            onClick={() => navigate('/make-payment')}
                        >
                            Make Payment
                        </button>
                    </center>
                </Col>
            </Col>
        </Card>
    </div>
  )
}