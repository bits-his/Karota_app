import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'

export default function RegistrationTable() {
    const navigate = useNavigate()

    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <Row>
                <Col md={12}>
                    <div 
                        style={{ 
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h4 className="app_title">Vendor Registeration</h4>
                        <button 
                            className="app_button"
                            style={{ 
                                width: 150 ,
                                padding: 10,
                                marginLeft: 15,
                                color: '#000',
                                borderRadius: 10,
                            }}
                            onClick={() => navigate ("/superagent")}
                        >
                            Super agent
                        </button>
                    </div>
                    
                    <hr />
                </Col>
                <Col md={12}>
                    <Form>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="vendorName">
                                    Vendor's name
                                    </Label>
                                    <Input
                                    id="vendorName"
                                    name="vendorName"
                                    placeholder="Vendor's name"
                                    type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="orgPhone">
                                    Organization's phone
                                    </Label>
                                    <Input
                                    id="orgPhone"
                                    name="orgPhone"
                                    placeholder="+234-8100000000"
                                    type="tel"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row  className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="officeAddress">
                                    Office Address
                                    </Label>
                                    <Input
                                    id="officeAddress"
                                    name="officeAddress"
                                    type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="orgEmail">
                                    Organization's email
                                    </Label>
                                    <Input
                                    id="orgEmailexample"
                                    name="orgEmail"
                                    placeholder="organization@fake.com"
                                    type="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="state">
                                    State
                                    </Label>
                                    <Input
                                    id="state"
                                    name="state"
                                    type="select"
                                    >
                                        <option>
                                            --select state--
                                        </option>
                                        <option>
                                            State and capital
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="tin">
                                    Tin
                                    </Label>
                                    <Input
                                    id="tin"
                                    name="tin"
                                    type="number"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="lga">
                                    LGA
                                    </Label>
                                    <Input
                                    id="lga"
                                    name="lga"
                                    type="select"
                                    >
                                        <option>
                                            --select LGA--
                                        </option>
                                        <option>
                                            osapolo
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="bn/rc">
                                    BN/RC
                                    </Label>
                                    <Input
                                    id="bn/rc"
                                    name="bn/rc"
                                    type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                    Password
                                    </Label>
                                    <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Card>
    )
}