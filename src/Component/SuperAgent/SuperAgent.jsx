import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Form } from "react-bootstrap";
import CustomInput from "../Component/CustomInput";

export default function SuperAgent() {
  const users = [
    {
      id: 1,
      name: "John",
    },
  ];
  const [form, setForm] = useState({
    vendor: users[0].id,
  });
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
      const response = await fetch("https://nga-states-lga.onrender.com/fetch");
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
  const navigate = useNavigate();
  return (
    <div>
      {/* <button className="app_button" onClick={() => navigate("/agent")}>
        Create agent
      </button> */}
      <Card className="app_card dashboard_card m-0 p-0">
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 className="app_title">Super Agent</h4>
            <button
              className="app_button"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
                borderRadius: 10,
              }}
              onClick={() => navigate("/superagent")}
            >
              Create Agent
            </button>
          </div>
          <hr />
          <div className="bg-white shadow border border-2 border-primary rounded-5 p-4 p-lg-5">
            <Form className="mt-1">
              <Col md={6}>
                <CustomInput
                  label="Bank Name"
                  onChange={handleChange}
                  type="text"
                  required={true}
                  name="contact_name"
                  value={form.contact_name}
                />
              </Col>
              <Col md={6}>
                <CustomInput
                  label="Contact Phone Number"
                  onChange={handleChange}
                  type="text"
                  required={true}
                  name="contact_phone"
                  value={form.contact_phone}
                />
              </Col>
              <Col md={6}>
                <CustomInput
                  label="Contact Email"
                  onChange={handleChange}
                  type="text"
                  // required={true}
                  name="contact_email"
                  value={form.contact_email}
                />
              </Col>
              <Col md={6}>
                <CustomInput
                  label="Office address / state"
                  type="textarea"
                  // required={true}
                  name="office_address"
                  value={form.office_address}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6}>
                <CustomInput
                  label="State of residence"
                  type="select"
                  name="state"
                  required={true}
                  // options={stateLga.map((item) => item.state)}
                  value={form.state}
                  onChange={handleChange}
                />
              </Col>{" "}
              <Col md={6}>
                <CustomInput
                  label="L.G.A"
                  type="text"
                  name="lga"
                  // required={true}
                  // options={
                  //   stateLga.filter(
                  //     (item) => item.state === form.state
                  //   )[0].lgas
                  // }
                  value={form.lga}
                  onChange={handleChange}
                />
              </Col>
              <Col md={6} className="mb-1">
                <CustomInput
                  label="Ward"
                  type="text"
                  name="ward"
                  value={form.ward}
                  onChange={handleChange}
                />
              </Col>
              
            </Form>
          </div>
        </Row>
      </Card>
    </div>
  );
}
