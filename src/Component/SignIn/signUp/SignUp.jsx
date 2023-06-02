import React, { useState } from 'react'
import { Col, Row } from 'reactstrap'
import InputForm from '../../Component/InputForm';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import SendCode from './SendCode';

export default function SignUp() {
    const [form, setForm] = useState({
        full_name: '',
        phone_no: '',
        email_address: '',
        password: ''
    })
    const [display, setDisplay] = useState(false)
    const [step, setStep] = useState(1)

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
        console.log(form)
    };

    const increaseAStep = (e) => {
        setStep(step+1)
    }

     const decreaseAStep = () => {
        setStep(step-1)
    }
  return (
    <div style={{marginTop: 80}}>
        <Row>
            <Col md={12}>
                <p className='sign_in_para'> Create Account</p>
            </Col>
        </Row>
       {step === 1 ?  <Row>
            <Col md={12}>
                <InputForm 
                    label= 'Full Name:'
                    placeholder= 'Enter Your Full Name'
                    Value= {form.full_name}
                    name= 'full_name'
                    onChange={handleChange}
                />
            </Col>
            <Col md={12}>
                <InputForm 
                    label= 'Phone Number:'
                    placeholder= 'Phone No.'
                    type= 'number'
                    Value= {form.phone_no}
                    name = 'phone_no'
                    onChange={handleChange}
                />
            </Col>
            <Col md={12}>
                <InputForm 
                    label= 'Email Address:'
                    type= 'email'
                    Value= {form.email_address}
                    name = 'email_address'
                    onChange={handleChange}
                />
            </Col>
            <Col md={12}>
                <InputForm 
                    label= 'Password'
                    placeholder= 'password'
                    type={display ? 'text' : 'password'}
                    Value= {form.password}
                    name = 'password'
                    onChange={handleChange}
                />
                <div className='dispaly_icon'>
                    {
                        display? <AiOutlineEye onClick={() => setDisplay(!display)}/> : <AiOutlineEyeInvisible onClick={() => setDisplay(!display)}/>
                    }
                </div>
            </Col>
            <Col md={12}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div className='underLine'></div>
                    <div className='underLine'></div>
                    <div className='underLine'></div>
                    <div className='underLine'></div>
                </div>
            </Col>
            <Col md={12}>
                <ul>
                    <li className='list_item'> At least 12 character </li>
                    <li className='list_item'> 1 Uppercase letter </li>
                    <li className='list_item'> 1 Numeric character</li>
                    <li className='list_item'> 1 Special character </li>
                </ul>
            </Col>
        </Row> : <SendCode />}
            <div className='d-flex'>

                <button className={`signin_ghost1 ${step === 1 ? "_ghost" : "___ghost"}`} onClick={increaseAStep}> Continue </button>  
            </div>
    </div>
  )
}