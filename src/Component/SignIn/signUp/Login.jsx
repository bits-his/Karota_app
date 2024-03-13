import React, { useState } from "react";
import { Button, Card, CardBody, Col, Input, Label, Row } from "reactstrap";

export default function Login() {
  const [form, setForm] = useState({
    full_name: "",
    phone_no: "",
    email_address: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
    console.log(form);
  };
  const handleSubmit = () => {

  }
  return (
    <div style={{ marginTop: 80 }}>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <CardBody style={{ border: "1px solid #f5c005", borderRadius: "20px", padding: "50px", paddingTop: '20px' }}>
            <Card>
              <Col>
                <center>
                  <div className="user_image"></div>
                </center>
                <h3 className="text-center">Login</h3>
                <Col component="form" role="form">
                  <Col mb={12} className="mt-4">
                    <Label>Email</Label>
                    <Input
                      type="email"
                      label="Email"
                      variant="standard"
                      fullWidth
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col mb={12} className="mt-4">
                    <Label>Password</Label>
                    <Input
                      type="password"
                      label="Password"
                      variant="standard"
                      fullWidth
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                    />
                  </Col>
                  <Row>
                    <Col md={12} className='d-flex flex-row'>
                      <label style={{ fontWeight: 'lighter' }}>
                        <input
                          type='checkbox'
                          style={{ marginRight: 0 }}
                        />
                        Remember Me
                      </label>
                    </Col>
                  </Row>
                  <Col mt={4} mb={1}>
                    <Button
                      variant="gradient"
                      className="app_button"
                      style={{
                        marginTop: 25,
                        width: '100%',
                        padding: 10,
                        color: "",
                        cursor: "pointer",
                      }}
                      onClick={handleSubmit}
                      fullWidth
                    // onClick={handleAdd}
                    >
                      sign In
                    </Button>
                  </Col>
                </Col>
              </Col>
            </Card>
          </CardBody>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
