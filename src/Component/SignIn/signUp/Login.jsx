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
  return (
    <div style={{ marginTop: 80 }}>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card>
            <Col pt={4} pb={3} px={3}>
              <Col component="form" role="form">
                <Col mb={11}>
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
                    // onClick={handleAdd}
                  >
                    sign In
                  </Button>
                </Col>
              </Col>
            </Col>
          </Card>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
