import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
} from "reactstrap";
import VendorDropdown from "./VendorDropdown";
import { stateLga } from "../../assets/state_and_lgas";
import { _post } from "../../Utils/Helper";
import toast from "react-hot-toast";

export default function SuperAgent() {
  // const user = "nazif";
  const _form = {
    query_type: "insert",
    // vendor_name: { user },
    name: "",
    phone: "",
    nin: "",
    state: "",
    lga: "",
    address: "",
    vendor: 1,
  };

  const [form, setForm] = useState(_form);
  const [submittedData, setSubmittedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    _post(
      "superagent/create",
      form,
      (res) => {
        setLoading(true);
        toast.success("super agent created successfully");
        setSubmittedData([...submittedData, res]);
        navigate("/supergentable");
      },
      () => {
        setLoading(false);
        toast.error("An error occurred while creating super agent");
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
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px",
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
                onClick={() => navigate("/supergentable")}
              >
                Back
              </button>
              <h4 className="app_title">
                Super Agent Registeration{form.step}
              </h4>
            </div>

            <hr />
          </Col>
          <Col md={12}>
            <Form className="mx-auto">
              <>
                <Row className="margin-bottom-input">
                  <Col md={6} className="first-col">
                    <FormGroup>
                      <Label for="vendor">Vendor</Label>
                      <VendorDropdown
                        handleChange={handleChange}
                        selectedVendorValue={form.vendor}
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
                        value={form.name}
                        placeholder="John Doe"
                        type="text"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <Row className="margin-bottom-input">
                  <Col md={6}>
                    <FormGroup>
                      <Label for="phone">Phone</Label>
                      <Input
                        onChange={handleChange}
                        id="phone"
                        name="phone"
                        value={form.phone}
                        type="tel"
                        pattern="[0-9]{11}"
                        placeholder="081XXXXXXXX"
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
                        value={form.email}
                        placeholder="organization@fake.com"
                        type="email"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row className="margin-bottom-input">
                  <Col md={12} className="first-col">
                    <FormGroup>
                      <Label for="address">Contact address</Label>
                      <Input
                        onChange={handleChange}
                        id="address"
                        name="address"
                        vlaue={form.address}
                        type="text"
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
                      <Label for="nin">NIN</Label>
                      <Input
                        onChange={handleChange}
                        id="nin"
                        name="nin"
                        value={form.nin}
                        placeholder="NIN"
                        type="text"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col>
                  {/* <Col md={6}>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        onChange={handleChange}
                        id="Password"
                        name="password"
                        value={form.password}
                        placeholder="Select Password"
                        type="password"
                        className="app_input"
                      />
                    </FormGroup>
                  </Col> */}
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
