import React, { useState } from "react";
import { Card, Row, Col, Form } from "react-bootstrap";

export default function SuperAgent() {
  const [form, setForm] = useState({});
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
    console.log(form);
  };
  useEffect(() => {
    fetchStates();
    fetchLgas();
  }, []);
   const fetchStates = async () => {
     try {
       const response = await fetch(
         "https://nga-states-lga.onrender.com/fetch"
       );
       const data = await response.json();
       setStates(data);
     } catch (error) {
       console.error("Error fetching states:", error);
     }
  };
  const fetchLgas = async (selectedState) => {
    try {
      const response = await fetch(
        `https://nga-states-lga.onrender.com/?state=${selectedState}`
      );
      const data = await response.json();
      setLgas(data);
    } catch (error) {
      console.error("Error fetching LGAs:", error);
    }
  };
  return (
    <div>
      <button className="app_button" onClick={() => navigate("/agent")}>
        Create agent
      </button>
      <Card className="app_card dashboard_card m-0 p-0">
        <Row>
          <Col md={6}>
            <CustomInput
              label="Name"
              onChange={handleChange}
              type="text"
              required={true}
              name="super_name"
              value={form.super_name}
            />
          </Col>
          <Col md={6}>
            <CustomInput
              label="Vendor"
              onChange={handleChange}
              type="text"
              required={true}
              name="vendor"
              value={form.vendor}
            />
          </Col>
          <Col md={6}>
            <CustomInput
              label="Phone"
              onChange={handleChange}
              type="tel"
              required={true}
              name="super_phone"
              value={form.super_phone}
            />
          </Col>
          <Col md={6} className="mb-1">
            <Form.Group controlId="stateSelect">
              <Form.Label>State</Form.Label>
              <Form.Select
                name="state"
                value={form.state}
                onChange={handleChange}
                isValid={stateValid}
                isInvalid={!stateValid}
              >
                <option value="">Select state...</option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select a state.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <CustomInput
              label="Email"
              onChange={handleChange}
              type="email"
              name="super_email"
              value={form.super_email}
            />
          </Col>
          <Col md={6}>
            <CustomInput
              label="Contact address"
              onChange={handleChange}
              type="tel"
              name="super_address"
              value={form.super_address}
            />
          </Col>
          <Col md={6} className="mb-1">
            <Form.Group controlId="lgaSelect">
              <Form.Label>L.G.A</Form.Label>
              <Form.Select
                name="lga"
                value={form.lga}
                onChange={handleChange}
                isValid={lgaValid}
                isInvalid={!lgaValid}
              >
                <option value="">Select LGA...</option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Please select an LGA.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
