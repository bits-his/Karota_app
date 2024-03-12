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

  const handleAdd = () => {
    setForm(form)
    console.log(form)
  }
  return (
    <div style={{ marginTop: 80 }}>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <CardBody  style={{border: "1px solid black", borderRadius: "15px", padding: "65px"}}>
          <Card>
            <Col pt={4} pb={3} px={3}>
              <Col component="form" role="form">
                <Col mb={12}>
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
                <Col mb={12}>
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

                <Col mt={4} mb={1}>
                  <Button
                    style={{ marginTop: 15 }}
                    variant="gradient"
                    color="info"
                    fullWidth
                    onClick={handleAdd}
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
