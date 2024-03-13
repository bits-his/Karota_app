import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { stateLga } from '../../assets/state_and_lgas'

export default function RegistrationTable() {
    const _form = {
    }
    
    const [form, setForm] = useState(_form)
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const navigate = useNavigate()
    const handleSubmit = () => {
        setLoading(true);
        let obj = { ...form, qrcode: qrCodeGenerator };
        _post(
            "api/create_users",
            obj,
            (res) => {
                setLoading(false);
                alert("sucessful");
                console.log(form);
                setForm(_form);
            },
            (err) => {
                setLoading(false);
                console.log(err);
            }
        );
        
    };
    


    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            {JSON.stringify({ form })}
            <Row>
                <Col md={12}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h4 className="app_title">Vehicle Registeration</h4>
                        <button
                            className="app_button"
                            style={{
                                width: 150,
                                padding: 10,
                                marginLeft: 15,
                                color: '#000',
                                borderRadius: 10,
                            }}
                            onClick={() => navigate("/")}
                        >
                           Back
                        </button>
                    </div>

                    <hr />
                </Col>
                <Col md={12}>
                   
                    <Form className='mx-auto'>
                        {form.step > 0 ?
                            <>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="contact_name">
                                                Plate No
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="Plate No"
                                                name="Plate No"
                                                placeholder=""
                                                type="numbert"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="contact_phone">
                                               Engine No
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="Engine no"
                                                name="Engine no"
                                                placeholder=""
                                                type="number"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="contact_address">
                                               manufacturing Date
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_address"
                                                name="contact_address"
                                                type="date"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="contact_email">
                                               purchase date
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                               
                                                type="date"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="residential_state">
                                                Registerd LGA 
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="residential_state"
                                                name="residential_state"
                                                type="select"
                                                value={form.residential_state}
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    Select State
                                                </option>
                                                <option>
                                                    
                                                </option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="residential_state">
                                                L.G.A. REG NO
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="residential_lga"
                                                name="residential_lga"
                                                type="number"
                                                required
                                                value={form.residential_lga}
                                                className="app_input"
                                            >
                                               
                                                
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </> :
                            <>

                            
                                <Row className='margin-bottom-input'>
                                    
                                    <Col md={6} className='first-col'>
                                    
                                        <FormGroup>
                                            
                                            <Label for="vendorName">
                                                Name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="Name"
                                                name="Name"
                                                placeholder=" name"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="orgPhone">
                                                 phone
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="orgPhone"
                                                name="orgPhone"
                                                placeholder="+234-8100000000"
                                                type="tel"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="office_address">
                                                Address
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="office_address"
                                                name="office_address"
                                                type="text"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="org_email">
                                                 email
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="org_emailexample"
                                                name="org_email"
                                                placeholder="organization@fake.com"
                                                type="email"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="state">
                                                State  of residence
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="state"
                                                name="state"
                                                value={form.state}
                                                type="select"
                                                className="app_input"
                                                required
                                            >
                                                <option value={''}>
                                                    Select State
                                                </option>
                                                {stateLga.map((item) => <option>
                                                    {item.state}
                                                </option>)}

                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="tin">
                                                NIN
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="NIN"
                                                name="NIN"
                                                type="number"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="tin">
                                                D.O.B
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="dob"
                                                name="dob"
                                                type="date"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="lga">
                                                LGA of residence
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="lga"
                                                name="lga"
                                                type="select"
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    --Select LGA--
                                                </option>
                                                {stateLga.filter(
                                                    (item) => item.state === form.state
                                                )[0]?.lgas?.map((lga, idx) => <option key={idx}>
                                                    {lga}
                                                </option>)
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                   
                                </Row>
                                
                            
                            </>}
                        <Row className="mt-3" style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignContent: 'center',
                                        marginTop: 30,
                                    }}
                                    >
                            {form.step > 0 ? <Row>
                                <Col md={6} className='text-left'> <button
                                    className="app_button"
                                    style={{
                                        width: 150,
                                        marginLeft: 30,
                                        padding: 10,
                                        color: "",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setForm((p) => ({ ...p, step: 0 }))}
                                >
                                    Prev
                                </button></Col>
                                <Col md={6} className='text-right'> <button
                                    className="app_button"
                                    style={{
                                        width: 150,
                                        marginLeft: 30,
                                        padding: 10,
                                        color: "",
                                        cursor: "pointer",
                                    }}
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button></Col>
                            </Row> :
                                <button
                                    className="app_button p-4"
                                    style={{
                                        width: 150,
                                        marginLeft: 30,
                                        padding: 10,
                                        color: "",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setForm((p) => ({ ...p, step: 1 }))}
                                >
                                    Next
                                </button>}
                        </Row>
                    </Form>
                </Col>
            </Row>

        </Card>
    )
}