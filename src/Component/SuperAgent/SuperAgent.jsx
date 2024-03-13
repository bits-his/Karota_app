import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { stateLga } from '../../assets/state_and_lgas'

export default function SuperAgent() {
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
        <div>
            {/* <button className="app_button" onClick={() => navigate("/agent")}>
        Create agent
      </button> */}
            <Card className="app_card dashboard_card m-0 p-0">
                {/* {JSON.stringify({ form })} */}
                <Row>
                    <Col md={12}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            Agent
                        </div>
                    </Col>

                    <hr />
                </Row>
                <Col md={12}>
                    <Form className='mx-auto'>
                        {form.step > 0 ?
                            <>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="contact_name">
                                                Contact Name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_name"
                                                name="contact_name"
                                                placeholder="Vendor's name"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="contact_phone">
                                                Contact Phone
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_phone"
                                                name="contact_phone"
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
                                            <Label for="contact_address">
                                                Contact Address
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_address"
                                                name="contact_address"
                                                type="text"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="contact_email">
                                                Contact E-mail
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_emailexample"
                                                name="contact_email"
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
                                            <Label for="residential_state">
                                                State of Residence
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
                                                {stateLga.map((item) => <option>
                                                    {item.state}
                                                </option>)}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="residential_state">
                                                L.G.A. of Residence
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="residential_lga"
                                                name="residential_lga"
                                                type="select"
                                                required
                                                value={form.residential_lga}
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    --Select LGA--
                                                </option>
                                                {stateLga.filter(
                                                    (item) => item.state === form.residential_state
                                                )[0]?.lgas?.map((lga, idx) => <option key={idx}>
                                                    {lga.name}
                                                </option>)
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="examplePassword">
                                                Password
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="examplePassword"
                                                name="password"
                                                placeholder="password placeholder"
                                                type="password"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </> :
                            <>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="vendorName">
                                                Vendor's name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendorName"
                                                name="vendorName"
                                                placeholder="Vendor's name"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="orgPhone">
                                                Organization's phone
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
                                                Office Address
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
                                                Organization's email
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
                                                State
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
                                                Tin
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="tin"
                                                name="tin"
                                                type="number"
                                                className="app_input"
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
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="bn_rc">
                                                BN/RC
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="bn_rc"
                                                name="bn_rc"
                                                type="text"

                                                className="app_input"
                                            />
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
            </Card>
        </div >
    );
}
