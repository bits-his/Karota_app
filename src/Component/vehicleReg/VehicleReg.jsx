import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';

export default function OwnerReg() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);

    const handleShowForm = () => {
        setShowForm(true);
    };
    const handleBackToTable = () => {
        setShowForm(false);
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
                        <h4 className="app_title">Vehicle Registration</h4>
                        {!showForm ? (
                            <Button
                                className="app_button"
                                style={{ width: 150, padding: 10, marginLeft: 15, color: '#000', borderRadius: 10 }}
                                onClick={handleShowForm}
                            >
                                Add Vehicle
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
                    {showForm ? (
                        <Form>
                            <Row className='margin-bottom-input'>
                                <Col md={6} className='first-col'>
                                    <FormGroup>
                                        <Label for="plateNo">Plate Number</Label>
                                        <Input id="plateNo" name="plateNo" placeholder="Plate Number" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="phone">Phone Number</Label>
                                        <Input id="phone" name="phone" placeholder="+234-8100000000" type="tel" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='margin-bottom-input'>
                                <Col md={6} className='first-col'>
                                    <FormGroup>
                                        <Label for="address">Address</Label>
                                        <Input id="address" name="address" placeholder="Address" type="text" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="email">Owner's Email</Label>
                                        <Input id="email" name="email" placeholder="owner@example.com" type="email" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='margin-bottom-input'>
                                <Col md={6} className='first-col'>
                                    <FormGroup>
                                        <Label for="state">State</Label>
                                        <Input id="state" name="state" type="select">
                                            <option>--Select State--</option>
                                            <option>Lagos</option>
                                            <option>Abuja</option>
                                            <option>Kano</option>
                                            {/* Add more states as needed */}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="nin">NIN (National Identification Number)</Label>
                                        <Input id="nin" name="nin" type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='margin-bottom-input'>
                                <Col md={6} className='first-col'>
                                    <FormGroup>
                                        <Label for="lga">Local Government Area (LGA)</Label>
                                        <Input id="lga" name="lga" type="select">
                                            <option>--Select LGA--</option>
                                            <option>Osapolo</option>
                                            <option>Ikeja</option>
                                            <option>Kurmi</option>
                                            {/* Add more LGAs as needed */}
                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="engineNo">Engine Number</Label>
                                        <Input id="engineNo" name="engineNo" type="text" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='margin-bottom-input'>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="manufacturingDate">Manufacturing Date</Label>
                                        <Input id="manufacturingDate" name="manufacturingDate" type="date" />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="purchaseDate">Purchase Date</Label>
                                        <Input id="purchaseDate" name="purchaseDate" type="date" />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row className='margin-bottom-input'>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input id="password" name="password" placeholder="Password" type="password" />
                                    </FormGroup>
                                </Col>
                                
                            </Row>
                            <Button type="submit"  onClick={() => navigate ("/")}   className="app_button" color="Warning">Submit</Button>{' '}
                            
                        </Form>
                    ) : (
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>Plate Number</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Owner's Email</th>
                                    <th>State</th>
                                    <th>NIN</th>
                                    <th>LGA</th>
                                    <th>Engine Number</th>
                                    <th>Manufacturing Date</th>
                                    <th>Purchase Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Plate Number Data</td>
                                    <td>Phone Number Data</td>
                                    <td>Address Data</td>
                                    <td>Email Data</td>
                                    <td>State Data</td>
                                    <td>NIN Data</td>
                                    <td>LGA Data</td>
                                    <td>Engine Number Data</td>
                                    <td>Manufacturing Date Data</td>
                                    <td>Purchase Date Data</td>
                                </tr>
                                {/* Add more table rows as needed */}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </Card>
    );
}
