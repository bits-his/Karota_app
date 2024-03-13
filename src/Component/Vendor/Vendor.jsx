import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { stateLga } from '../../assets/state_and_lgas'
import { _post } from '../../Utils/Helper'

export default function RegistrationTable() {
    const _form = {
        query_type: "insert",
        vendor_name: "",
        vendor_ofiice_address: "",
        vendor_state: "",
        vendor_lga: "",
        vendor_phone: "",
        vendor_email: "",
        vendor_tin: "",
        vendor_profile: "",
        vendor_bn_rc: "",
        contact_name: '',
        contact_address: '',
        contact_dob: '',
        contact_state: '',
        contact_password: '',
        contact_phone: '',
        contact_email: '',
        contact_lga: '',
    }

    const [form, setForm] = useState(_form)
    const [loading, setLoading] = useState(false)
    const handleChange = ({ target: { name, value } }) => {
        setForm((p) => ({ ...p, [name]: value }))
    }
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        _post(
            "api/vendors/create",
            form,
            (res) => {
                if (res.success) {
                    setLoading(false);
                    alert("sucessful");
                    console.log(form);
                    setForm(_form);
                }
            },
            (err) => {
                setLoading(false);
                console.log(err);
            }
        );
    };


    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
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
                        <h4 className="app_title">{form.step > 0 ? "Vendor contact person" : "Vendor Registeration"}</h4>
                        {/* <button
                            className="app_button"
                            style={{
                                width: 150,
                                padding: 10,
                                marginLeft: 15,
                                color: '#000',
                                borderRadius: 10,
                            }}
                            onClick={() => navigate("/superagent")}
                        >
                            Super agent
                        </button> */}
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
                                                Contact Name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_name"
                                                name="contact_name"
                                                value={form.contact_name}
                                                placeholder="Vendor's contact name"
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
                                                value={form.contact_phone}
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
                                                value={form.contact_address}
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
                                                value={form.contact_email}
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
                                            <Label for="contact_state">
                                                State of Residence
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_state"
                                                name="contact_state"
                                                type="select"
                                                value={form.contact_state}
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
                                            <Label for="contact_lga">
                                                L.G.A. of Residence
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="contact_lga"
                                                name="contact_lga"
                                                type="select"
                                                required
                                                value={form.contact_lga}
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    --Select LGA--
                                                </option>
                                                {stateLga.filter(
                                                    (item) => item.state === form.contact_state
                                                )[0]?.lgas?.map((lga, idx) => <option key={idx}>
                                                    {lga}
                                                </option>)
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleDOB">
                                                Date of Birth
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="exampleDOB"
                                                name="contact_dob"
                                                value={form.contact_dob}
                                                placeholder="Date of birth"
                                                type="date"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col><Col md={6}>
                                        <FormGroup>
                                            <Label for="exampleDOB">
                                                Password
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="examplePassword"
                                                name="contact_password"
                                                value={form.contact_password}
                                                placeholder="Enter Password"
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
                                            <Label for="vendor_name">
                                                Vendor's name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_name"
                                                name="vendor_name"
                                                placeholder="Vendor name"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="vendor_phone">
                                                Organization's phone
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_phone"
                                                name="vendor_phone"
                                                value={form.vendor_phone}
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
                                            <Label for="vendor_ofiice_address">
                                                Office Address
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_ofiice_address"
                                                name="vendor_ofiice_address"
                                                value={form.vendor_ofiice_address}
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="vendor_email">
                                                Organization's email
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_emailexample"
                                                name="vendor_email"
                                                value={form.vendor_email}
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
                                            <Label for="vendor_state">
                                                State
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_state"
                                                name="vendor_state"
                                                value={form.vendor_state}
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
                                                TIN
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_tin"
                                                name="vendor_tin"
                                                value={form.vendor_tin}
                                                type="number"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="vendor_lga">
                                                LGA
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_lga"
                                                name="vendor_lga"
                                                value={form.vendor_lga}
                                                type="select"
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    --Select LGA--
                                                </option>
                                                {stateLga.filter(
                                                    (item) => item.state === form.vendor_state
                                                )[0]?.lgas?.map((lga, idx) => <option key={idx}>
                                                    {lga}
                                                </option>)
                                                }
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="vendor_bn_rc">
                                                BN/RC
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="vendor_bn_rc"
                                                name="vendor_bn_rc"
                                                value={form.vendor_bn_rc}
                                                type="text"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={12}>
                                        <FormGroup>
                                            <Label for="companyProfile">
                                                Company's Profile
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="companyProfile"
                                                name="companyProfile"
                                                type="file"
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
                                    disabled={loading}
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