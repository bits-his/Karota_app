import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Form, FormGroup, Label, Input, Button, Table } from 'reactstrap';

export default function OwnerReg() {
    const navigate = useNavigate();
    const [showForm, setShowForm] = useState(false);
    const nigeriaStates = [
        "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
        "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", "Jigawa",
        "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
        "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
    ];
    const kanoLGAs = [
        "Ajingi", "Albasu", "Bagwai", "Bebeji", "Bichi", "Bunkure", "Dala", "Dambatta", "Dawakin Kudu",
        "Dawakin Tofa", "Doguwa", "Fagge", "Gabasawa", "Garko", "Garun Malam", "Gaya", "Gezawa", "Gwale",
        "Gwarzo", "Kabo", "Kano Municipal", "Karaye", "Kibiya", "Kiru", "Kumbotso", "Kunchi", "Kura",
        "Madobi", "Makoda", "Minjibir", "Nasarawa", "Rano", "Rimin Gado", "Rogo", "Shanono", "Sumaila",
        "Takai", "Tarauni", "Tofa", "Tsanyawa", "Tudun Wada", "Ungogo", "Warawa", "Wudil"
    ];

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
                        <h4 className="app_title">Vehicle Owner Registration</h4>
                        {!showForm ? (
                            <Button
                                className="app_button"
                                style={{ width: 150, padding: 10, marginLeft: 15, color: '#000', borderRadius: 10 }}
                                onClick={handleShowForm}
                            >
                                Add vehicle owner
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
                                        <Input id="state" name="state" type="select">
                                            <option value="">-- Select State --</option>
                                            {nigeriaStates.map((state) => (
                                                <option key={state} value={state}>{state}</option>
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
                                        <Input id="lga" name="lga" type="select">
                                            <option value="">-- Select LGA --</option>
                                            {kanoLGAs.map((lga) => (
                                                <option key={lga} value={lga}>{lga}</option>
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
                                    justifyContent: 'space-between',
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
                                onClick={() => navigate ("/")}
                            >
                                Submit
                            </button>
                            <button
                                className="app_button"
                                style={{
                                    width: 150,
                                    padding: 10,
                                    color: "",
                                    cursor: "pointer",
                                    borderRadius: 7,
                                }}
                                onClick={() => navigate ("/VehicleReg")}
                            >
                                prev
                            </button>
                           
                             </Col>
                        </Row>
                        </Form>
                
                </Col>
            </Row>
        </Card>
    );
}
