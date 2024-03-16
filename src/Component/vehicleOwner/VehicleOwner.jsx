import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';
import { stateLga } from '../../assets/state_and_lgas';
import { useSelector } from 'react-redux';

export default function OwnerReg() {
    const navigate = useNavigate();
    const { user } = useSelector(s => s.auth)
    const [showForm, setShowForm] = useState(false);
    const _form = {
        query_type: "create",
        agent_id: user.id
    };
    const [form, setForm] = useState(_form);

    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }));
    };

    const handleShowForm = () => {
        setShowForm(true);
    };
    const handleBackToTable = () => {
        navigate('/Vehicleownertable')
    };
    const handleSubmit = (e) => {

        e.preventDefault();
        console.log('Form submitted');

    };

    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <Row>
                <Col md={12}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h4 className="app_title">Vehicle Owner Registration</h4>
                        {!showForm ? (
                            <Button
                                className="app_button"
                                style={{ width: 150, padding: 10, marginLeft: 15, color: '#000', borderRadius: 10 }}
                                onClick={handleBackToTable}
                            >
                                Back
                            </Button>
                        ) : (
                            <Button
                                className="app_button"
                                style={{ width: 150, padding: 10, marginLeft: 15, color: '#000', borderRadius: 10 }}
                                onClick={handleBackToTable}
                            >
                                Back
                            </Button>
                        )}
                    </div>
                    <hr />
                </Col>
                <Col md={12}>
                    <Form onSubmit={handleSubmit}>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="OwnerName">Owner's name</Label>
                                    <Input id="OwnerName" name="OwnerName" placeholder="Owner's name" type="text" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="orgPhone">Phone</Label>
                                    <Input id="Phone" name="Phone" placeholder="+234-8100000000" type="tel" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="officeAddress">Address</Label>
                                    <Input id="Address" name="Address" type="text" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="orgEmail">Owner's email</Label>
                                    <Input id="Emailexample" name="Email" placeholder="owner@fake.com" type="email" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="state">State of residence</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="state"
                                        name="state"
                                        value={form.state}
                                        type="select"
                                        className="app_input"
                                        required
                                    >
                                        <option value={""}>Select State</option>
                                        {stateLga.map((item) => (
                                            <option>{item.state}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="NIN">NIN</Label>
                                    <Input id="NIN" name="NIN" type="number" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6} className='first-col'>
                                <FormGroup>
                                    <Label for="lga">Local Government Area</Label>
                                    <Input
                                        onChange={handleChange}
                                        id="lga"
                                        name="lga"
                                        type="select"
                                        className="app_input"
                                    >
                                        <option value={""}>--Select LGA--</option>
                                        {stateLga
                                            .filter((item) => item.state === form.state)[0]
                                            ?.lgas?.map((lga, idx) => (
                                                <option key={idx}>{lga}</option>
                                            ))}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="d.o.b">D.o.B</Label>
                                    <Input id="d.o.b" name="d.o.b" type="date" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row className='margin-bottom-input'>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input id="examplePassword" name="password" placeholder="password" type="password" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    marginTop: 30,

                                }}
                            > <button
                                className="app_button"
                                style={{
                                    width: 150,
                                    padding: 10,
                                    color: "",
                                    cursor: "pointer",
                                    borderRadius: 7,
                                }}
                                onClick={() => navigate("/ehicleownertable")}
                            >
                                    Submit
                                </button>
                                {/* <button
                                    className="app_button"
                                    style={{
                                        width: 150,
                                        padding: 10,
                                        color: "",
                                        cursor: "pointer",
                                        borderRadius: 7,
                                    }}
                                    onClick={() => navigate("/VehicleReg")}
                                >
                                    prev
                                </button> */}

                            </Col>
                        </Row>
                    </Form>

                </Col>
            </Row>
        </Card>
    );
}
