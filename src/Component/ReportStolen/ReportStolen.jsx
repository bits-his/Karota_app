import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Form, FormGroup, Label, Input, Spinner } from "reactstrap";
import { stateLga } from "../../assets/state_and_lgas";
import { _post } from "../../Utils/Helper";
import keke from "../../assets/keke_napep.png";
import toast from "react-hot-toast";
import InputField from "./InputField";

export default function RegistrationTable() {
  const _form = {
    query_type: "insert",
    vendor_name: "",
  };


  const [submittedData, setSubmittedData] = useState([]);
  const [form, setForm] = useState(_form);
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.contact_name || !form.contact_address || !form.contact_state || !form.contact_lga || !form.contact_phone || !form.contact_email) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    _post(
      "vendors/create",
      form,
      (res) => {
        if (res.success) {
          setLoading(false);
          toast.success("Vendor created successfully");
          setSubmittedData([...submittedData, res]);
          navigate("/vendorReg");
        }
      },
      () => {
        setLoading(false);
        toast.error("An error occurred while creating Vendor");
      }
    );
  };

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
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
              onClick={() => navigate("/")}
            >
              Back
            </button>
            <h4 className="app_title vendor_title">
              Report stolen Vehicle
            </h4>
            <img
              src={keke}
              alt="Keke logo"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
          </div>
          <hr />
        </Col>

        <Col md={12}>
          <Form className="mx-auto">
              <>
                <Row className="margin-bottom-input">
                    <InputField id="rname" label="Owners name" name="Reporters_name" type="text" required="true" handleChange={handleChange} place="John Doe" />
                    <InputField id="phone" label="Phone No." name="Reporters_phone_no" type="number" required="true" handleChange={handleChange} place="080XXXXXXXXX" />
                </Row>
                <Row className="margin-bottom-input">
                    <InputField id="engine_no" label="Engine No." name="engine_no" type="number" required="true" handleChange={handleChange} place="" />
                    <InputField id="chasis_no" label="Chasis No." name="chasis_no" type="number" required="true" handleChange={handleChange} place="" />
                </Row>
                <Row className="margin-bottom-input">
                    <InputField id="model" label="Vehicle Model" name="vehicle_model" type="text" required="true" handleChange={handleChange} place="TVS" />
                    <InputField id="color" label="Vehicle color" name="vehicle_color" type="text" required="true" handleChange={handleChange} place="yellow" />
                </Row>
                <Row className="margin-bottom-input">
                    <InputField id="capacity" label="Engine Capacity" name="capacity" type="text" required="true" handleChange={handleChange} place="200hp" />
                    <InputField id="others" label="Other details" name="others" type="textarea" required="false" handleChange={handleChange} place="" />
                </Row>
              </>
            <Row
              className="mt-3"
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: 30,
              }}
            >
                <button
                    className="app_button"
                    style={{
                    width: 150,
                    marginLeft: 0,
                    padding: 10,
                    color: "",
                    cursor: "pointer",
                    }}
                    disabled={loading}
                    onClick={handleSubmit}
                >
                    {loading ? (<Spinner color="primary"></Spinner>) : ("Submit")}
                </button>
            </Row>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}