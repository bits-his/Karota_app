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
                        <h4 className="app_title">{form.step < 1 ? 'Vehicle Registeration' : form.step === 1 ? "Vehicle Owner Form" : "Vehicle Driver Form"}</h4>
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
                        {form.step < 1 ?
                            <>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="plate_no">
                                                Plate No
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="plate_no"
                                                name="plate_no"
                                                value={form.plate_no}
                                                placeholder="Vehicle's Plate No"
                                                type="numbert"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="engine_no">
                                                Engine No
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="engine_no"
                                                name="engine_no"
                                                value={form.engine_no}
                                                placeholder="Engine No."
                                                type="number"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="manufacturing_date">
                                                Manufacturing Date
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="manufacturing_date"
                                                name="manufacturing_date"
                                                value={form.manufacturing_date}
                                                type="date"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="purchase_date">
                                                Purchase Date
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                name="purchase_date"
                                                value={form.purchase_date}
                                                placeholder='Purchase Date'
                                                type="date"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="state_registered">
                                                State Registred
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="state_registered"
                                                name="state_registered"
                                                value={form.state_registered}
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
                                            <Label for="lga_registered">
                                                L.G.A. Registred
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="lga_registered"
                                                name="lga_registered"
                                                type="select"
                                                className="app_input"
                                            >
                                                <option value={''}>
                                                    --Select LGA--
                                                </option>
                                                {stateLga.filter(
                                                    (item) => item.state === form.state_registered
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
                                            <Label for="lga_reg_no">
                                                L.G.A. Reg. No.
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="lga_reg_no"
                                                name="lga_reg_no"
                                                type="text"
                                                required
                                                value={form.lga_reg_no}
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>

                            </> : form.step === 1 ?
                                <>


                                    <Row className='margin-bottom-input'>

                                        <Col md={6} className='first-col'>

                                            <FormGroup>

                                                <Label for="driver_name">
                                                    Name
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="Name"
                                                    name="owner_name"
                                                    value={form.owner_name}
                                                    placeholder="Name of Vehicle owner"
                                                    type="text"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="owner_phone">
                                                    Phone
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="owner_phone"
                                                    name="owner_phone"
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
                                                <Label for="owner_address">
                                                    Residential Address
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="owner_address"
                                                    name="owner_address"
                                                    type="text"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="owner_email">
                                                    email
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="owner_emailexample"
                                                    name="owner_email"
                                                    value={form.owner_email}
                                                    placeholder="owneranization@fake.com"
                                                    type="email"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className='margin-bottom-input'>
                                        <Col md={6} className='first-col'>
                                            <FormGroup>
                                                <Label for="owner_state">
                                                    State  of residence
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="owner_state"
                                                    name="owner_state"
                                                    value={form.owner_state}
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
                                                <Label for="owner_lga">
                                                    LGA of residence
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="owner_lga"
                                                    name="owner_lga"
                                                    value={form.owner_lga}
                                                    type="select"
                                                    className="app_input"
                                                >
                                                    <option value={''}>
                                                        --Select LGA--
                                                    </option>
                                                    {stateLga.filter(
                                                        (item) => item.state === form.owner_state
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
                                </>
                                : <>
                                    <Row className='margin-bottom-input'>
                                        <Col md={6} className='first-col'>
                                            <FormGroup>
                                                <Label for="driver_name">
                                                    Driver Name
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="Name"
                                                    name="driver_name"
                                                    value={form.driver_name}
                                                    placeholder="Name of Vehicle driver"
                                                    type="text"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="driver_phone">
                                                    Phone
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_phone"
                                                    name="driver_phone"
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
                                                <Label for="driver_address">
                                                    Residential Address
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_address"
                                                    name="driver_address"
                                                    type="text"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="driver_email">
                                                    email
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_emailexample"
                                                    name="driver_email"
                                                    value={form.driver_email}
                                                    placeholder="driveranization@fake.com"
                                                    type="email"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row className='margin-bottom-input'>
                                        <Col md={6} className='first-col'>
                                            <FormGroup>
                                                <Label for="driver_state">
                                                    State  of residence
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_state"
                                                    name="driver_state"
                                                    value={form.driver_state}
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
                                                <Label for="driver_lga">
                                                    LGA of residence
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_lga"
                                                    name="driver_lga"
                                                    value={form.driver_lga}
                                                    type="select"
                                                    className="app_input"
                                                >
                                                    <option value={''}>
                                                        --Select LGA--
                                                    </option>
                                                    {stateLga.filter(
                                                        (item) => item.state === form.driver_state
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
                                                <Label for="driver_nin">
                                                    NIN
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_nin"
                                                    name="driver_nin"
                                                    value={form.driver_nin}
                                                    type="number"
                                                    className="app_input"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="driver_dob">
                                                    D.O.B
                                                </Label>
                                                <Input
                                                    onChange={handleChange}
                                                    id="driver_dob"
                                                    name="driver_dob"
                                                    value={form.driver_dob}
                                                    type="date"
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
            </Row>

        </Card>
    )
}