import React, { useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper';
import { useNavigate } from 'react-router-dom';

export default function VarifyPaymentWithID() {
    const navigate =useNavigate()
    const [form, setForm] = useState({
        enter_receipt_Id: ''
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
                    <h4 className="app_title" style={{fontFamily: 'monospace', fontWeight: 'bold'}}>Varify Payment With ID </h4>
                </center>
            </Col>
            <Row className='p-0 m-0'>
                <Col md={12}>
                    <Col md={6}>
                        <InputForm 
                            id="exampleSelect"
                            label="Enter Receipt Id"
                            className="app_input"
                            value={form.enter_receipt_Id}
                            name="enter_receipt_Id"
                            onChange={handleChange}
                        />
                    </Col>
                </Col>    
            </Row>
            <Col md={12}>
                <Col md={6}>
                    <center>
                        <button
                            className="app_button p-4"
                            style={{ 
                                width: 150 ,
                                marginTop: 20,
                                padding: 10,
                                color: '',
                                cursor: 'pointer'
                            }}  
                        >
                            Check
                        </button>
                    </center>
                </Col>
            </Col>
        </Card>
    </div>
  )
}