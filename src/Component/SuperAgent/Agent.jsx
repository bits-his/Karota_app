import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { stateLga } from "../../assets/state_and_lgas";
import toast from 'react-hot-toast';

export default function Agent() {
  const _form = {
    query_type: 'create',

  };

  const [form, setForm] = useState(_form);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = () => {
    setLoading(true);
    _post(
      "agents/create",
      form,
      (res) => {
        setLoading(false);
        toast.success("Successful");
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
              <h4 className="app_title">Agent Registeration</h4>
            </div>
            <hr />
          </Col>
          <Col md={12}>
            <Form className="mx-auto">
              <>
                <Row className="margin-bottom-input">
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        type="text"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="super_agent">Super Agent</Label>
                      <Input
                        onChange={handleChange}
                        id="super_agent"
                        name="super_agent"
                        placeholder="Select vendor"
                        type="select"
                        className="app_input"
                      >
                        <option value={""}>Select Super Agent</option>
                        {stateLga.map((item) => (
                          <option>{item.state}</option>
                        ))}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="margin-bottom-input">
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        type="tel"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        onChange={handleChange}
                        id="email"
                        name="email"
                        placeholder="organization@fake.com"
                        type="email"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="margin-bottom-input">
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="state">State</Label>
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
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="lga">LGA</Label>
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
                </Row>
                <Row className="margin-bottom-input">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="address">Contact address</Label>
                      <Input
                        onChange={handleChange}
                        id="address"
                        name="address"
                        type="textarea"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="dob">Date of birth (D.O.B)</Label>
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
                <Row className="margin-bottom-input">
                  <Col md={12}>
                    <FormGroup>
                      <Label for="service_location">
                        Service Location
                      </Label>
                      <Input
                        onChange={handleChange}
                        id="service_location"
                        name="service_location"
                        placeholder="Bata"
                        type="text"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </>
              <Row>
                <Col
                  md={12}
                  style={{
                    display: "flex",
                    justifyContent: "right",
                  }}
                >
                  {" "}
                  <button
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
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
