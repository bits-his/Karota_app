import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
import { stateLga } from '../../assets/state_and_lgas'

export default function RegistrationTable() {
    const _form = {
        step: 0,
        name: "",
        middle_name: "",
        surname: "",
        gender: "",
        status: "",
        nationality: "",
        state_of_origin: "",
        lg: "",
        date_of_birth: "",
        place_of_birth: "",
        phone_no: "",
        blood_group: "",
        genotype: "",
        address: "",
        NIN_number: "",
        next_of_king: "",
        next_of_king_address: "",
        phone_no2: "",
        plate_number: "",
        classes_number: "",
        side_number: "",
        phone_no3: "",
        name_of_company: "",
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
                        <h4 className="app_title">Vendor Registeration</h4>
                        <button
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
                        </button>
                    </div>

                    <hr />
                </Col>
                <Form>
                    {form.step > 0 ?
                        <>
                            <Row className="p-4">
                                <Col md={6}>
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
                            <Row className="p-4">
                                <Col md={6}>
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
                            <Row className="p-4">
                                <Col md={6}>
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
                            <Row className="p-4">
                                <Col md={6}>
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
                            <Row className="p-4">
                                <Col md={6}>
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
                            <Row className="p-4">
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="state">
                                            State
                                        </Label>
                                        <Input
                                            onChange={handleChange}
                                            id="state"
                                            name="state"
                                            type="select"
                                            className="app_input"
                                            required
                                            value={form.state}
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
                            <Row className="p-4">
                                <Col md={6}>
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
                    <Row className="mt-3 ">
                        {form.step > 0 ? <Row>
                            <Col className='text-left'> <button
                                className="app_button"
                                style={{
                                    width: 150,
                                    marginLeft: 30,
                                    marginTop: 20,
                                    padding: 10,
                                    color: "",
                                    cursor: "pointer",
                                }}
                                onClick={() => setForm((p) => ({ ...p, step: 0 }))}
                            >
                                Prev
                            </button></Col>
                            <Col className='text-right'> <button
                                className="app_button"
                                style={{
                                    width: 150,
                                    marginLeft: 30,
                                    marginTop: 20,
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
                                    marginTop: 20,
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
            </Row>
        </Card>
    )
}