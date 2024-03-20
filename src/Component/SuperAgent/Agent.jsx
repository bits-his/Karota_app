import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Form, FormGroup, Label, Input } from "reactstrap";
import { stateLga } from "../../assets/state_and_lgas";
import toast from "react-hot-toast";
import { _post } from "../../Utils/Helper";
import { useSelector } from "react-redux";
import SuperAgentDropdown from "./SuperAgentDropdown";

export default function Agent() {
  const { user } = useSelector((p) => p.auth);
  const _form = {
    query_type: "create",
    // super_agent: user.id,
  };
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(_form);


  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  // console.log(form)
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   _post(
  //     "agents/create",
  //     form,
  //     (res) => {
  //       if (res.success) {
  //         setLoading(true);
  //         toast.success("Agent created successfully");
  //         navigate("/agenttable");
  //       }
  //     },
  //     () => {
  //       setLoading(false);
  //       toast.error("An error occurred while creating Agent");
  //     }
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    _post(
      "agents/create",
      form,
      (res) => {
        setLoading(false); // Set loading to false when submission is successful
        toast.success("Agent created successfully");
        // setSubmittedData([...submittedData, res]);
        navigate("/agenttable");
      },
      (err) => {
        console.log(err);
        toast.error("An error occurred while creating Agent");
        setLoading(false); 
      }
    );
  };

  return (
    <div>
      <Card className="app_card dashboard_card m-0 p-0">
        
        <Row>
          <Col md={12}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <button
                className="app_button"
                style={{
                  width: "10rem",
                  padding: 10,
                  color: "#000",
                  borderRadius: 10,
                }}
                onClick={() => navigate("/agenttable")}
              >
                Back
              </button>
              <h4 className="app_title vendor_title">Agent Registration</h4>
            </div>
            <hr />
          </Col>
          <Col md={12}>
            <Form className="mx-auto">
              <>
                <Row className="margin-bottom-input">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="super_agent">Super Agent</Label>

                      <SuperAgentDropdown
                        handleChange={handleChange}
                        selectedVendorValue={form.super_id}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="name">Name</Label>
                      <Input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        // value={tform.name}
                        placeholder="John Doe"
                        type="text"
                        className="app_input"
                      />
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
                        // value={tform.phone}
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
                        // value={tform.email}
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
                        // value={tform.state}
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
                        // value={tform.lga}
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
                        // value={tform.contactAddress}
                        type="textarea"
                        className="app_input"
                        rows="1.5"
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="service_location">Service Location</Label>
                      <Input
                        onChange={handleChange}
                        id="service_location"
                        name="service_location"
                        // value={tform.service_location}
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
                    justifyContent: "center",
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
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
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
