import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { stateLga } from "../../assets/state_and_lgas";

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
              <h4 className="app_title">Super Agent Registeration</h4>
              <button
                className="app_button"
                style={{
                  width: 150,
                  padding: 10,
                  marginLeft: 15,
                  color: "#000",
                  borderRadius: 10,
                }}
                onClick={() => navigate("/agent")}
              >
                Create Agent
              </button>
            </div>

                    <hr />
                </Col>
                <Col md={12}>
                    <Form className='mx-auto'>
                            <>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="superName">
                                                Name
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superName"
                                                name="superName"
                                                placeholder="John Doe"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="superVendor">
                                                Vendor
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superVendor"
                                                name="superVendor"
                                                placeholder="Select vendor"
                                                type="select"
                                                className="app_input"
                                            >
                                            <option value={''}>
                                                Select vendor
                                            </option>
                                            {stateLga.map((item) => <option>
                                                {item.state}
                                            </option>)}
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6} className='first-col'>
                                        <FormGroup>
                                            <Label for="superPhone">
                                                Phone
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superPhone"
                                                name="superPhone"
                                                type="tel"
                                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                                placeholder='081XXXXXXXX'
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="superEmail">
                                                Email
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superEmail"
                                                name="superEmail"
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
                                            <Label for="superState">
                                                State
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superState"
                                                name="superState"
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
                                </Row>
                                <Row className='margin-bottom-input'>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="superAddress">
                                                Contact address
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superAddress"
                                                name="superAddress"
                                                type="text"
                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="superDOB">
                                                Date of birth (D.O.B)
                                            </Label>
                                            <Input
                                                onChange={handleChange}
                                                id="superDOB"
                                                name="superDOB"
                                                type="date"

                                                className="app_input"
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </>
                        <Row>
                            <Col md={12}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
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
                                onClick={handleSubmit}
                            >
                                Submit
                            </button></Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
      </Card>
    </div>
  );
}
