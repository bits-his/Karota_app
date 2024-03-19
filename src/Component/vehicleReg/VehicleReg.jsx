import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { stateLga } from "../../assets/state_and_lgas";
import { _post } from "../../Utils/Helper";
import toast from "react-hot-toast";

export default function RegistrationTable() {
	const {owner_id} = useParams()
  const _form = {
    owner_id: owner_id || 1,
    lg_reg_no: "",
    pin: "",
    engine_no: "",
    plate_no: "",
    color:"",
    vehicle_make: "",
    vehicle_model: "",
    engine_capacity:"",
	chasis_no: "",
    date_issued: "",
    purchased_date: "",
    state_registered: "",
    registered_lg: "",
    expiry_date:"",
        password: "",
  };

  const [form, setForm] = useState(_form);
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    _post(
      "vehicles/registration",
      form,
      (res) => {
        setLoading(false);
        if (res.success) {
          toast.success("Vehicle added sucessfully");
		  navigate('/vehicleownertable')
          //console.log(form);
          setForm(_form);
        }
      },
      (err) => {
        setLoading(false);
        console.log(err);
      }
    );
  };

  const handleCopyOwner = () => {};

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
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
           
            <button
              className="app_button"
              style={{
                width: 150,
                padding: 10,
                color: "#000",
                borderRadius: 10,
              }}
              onClick={() => navigate("/Vehicleownertable")}
            >
              Back
            </button>
             <h4 className="app_title">Vehicle Registeration </h4>
          </div>

          <hr />
        </Col>
        <Col md={12}>
          <Form onSubmit={handleSubmit} className="mx-auto">
            <>
              <Row className="margin-bottom-input">
                <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="plate_no">Plate No</Label>
                    <Input
                      onChange={handleChange}
                      id="plate_no"
                      name="plate_no"
                      value={form.plate_no}
                      placeholder="Vehicle's Plate No"
                      type="numbert"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
                <Col md={4} className="">
                  <FormGroup>
                    <Label for="pin">PIN</Label>
                    <Input
                      onChange={handleChange}
                      id="pin"
                      name="pin"
                      value={form.pin}
                      placeholder="PINXXXXXXXXXX28"
                      type="numbert"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="engine_no">Engine No.</Label>
                    <Input
                      onChange={handleChange}
                      id="engine_no"
                      name="engine_no"
                      value={form.engine_no}
                      placeholder="Engine No."
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="margin-bottom-input">
                <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="vehicle_make">Vehicle make</Label>
                    <Input
                      onChange={handleChange}
                      id="vehicle_make"
                      name="vehicle_make"
                      value={form.vehicle_make}
                      placeholder="Toyota"
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
                <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="vehicle_model">Vehicle model</Label>
                    <Input
                      onChange={handleChange}
                      id="vehicle_model"
                      name="vehicle_model"
                      value={form.vehicle_model}
                      placeholder="Sienna"
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
                <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="date_issued">Date issued</Label>
                    <Input
                      onChange={handleChange}
                      id="date_issued"
                      name="date_issued"
                      value={form.date_issued}
                      type="date"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row className="margin-bottom-input">
                <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="state_registered">State Registred</Label>
                    <Input
                      onChange={handleChange}
                      id="state_registered"
                      name="state_registered"
                      type="select"
                      className="app_input"
                      required
                    >
                      <option value={""}>Select State</option>
                      {stateLga.map((item, idx) => (
                        <option key={idx}>{item.state}</option>
                      ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="registered_lg">L.G.A. Registred</Label>
                    <Input
                      onChange={handleChange}
                      id="registered_lg"
                      name="registered_lg"
                      type="select"
                      className="app_input"
                    >
                      <option value={""}>--Select LGA--</option>
                      {stateLga
                        .filter(
                          (item) => item.state === form.state_registered
                        )[0]
                        ?.lgas?.map((lga, idx) => (
                          <option key={idx}>{lga}</option>
                        ))}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="lg_reg_no">L.G.A. Reg. No.</Label>
                    <Input
                      onChange={handleChange}
                      id="lg_reg_no"
                      name="lg_reg_no"
                      type="text"
                      required
                      value={form.lg_reg_no}
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="chasis_no">Chasis No</Label>
                    <Input
                      onChange={handleChange}
                      id="chasis_no"
                      name="chasis_no"
                      value={form.chasis_no}
                      placeholder="Vehicle's chasis No"
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="purchased_date">Color</Label>
                    <Input
                      onChange={handleChange}
                      name="color"
                      id="color"
                      value={form.color}
                      placeholder="Color"
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
				<Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="chasis_no">Engine Capacity</Label>
                    <Input
                      onChange={handleChange}
                      id="engine_capacity"
                      name="engine_capacity"
                      value={form.engine_capacity}
                      placeholder="engine_capacity"
                      type="text"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <FormGroup>
                    <Label for="purchased_date">Transaction Date</Label>
                    <Input
                      onChange={handleChange}
                      name="purchased_date"
                      id="purchased_date"
                      value={form.purchased_date}
                      placeholder="purchased_date"
                      type="date"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
				<Col md={4} className="first-col">
                  <FormGroup>
                    <Label for="chasis_no">Expiry Date</Label>
                    <Input
                      onChange={handleChange}
                      id="expiry_date"
                      name="expiry_date"
                      value={form.expiry_date}
                      placeholder="expiry_date"
                      type="date"
                      className="app_input"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </>
            <Row
              className="mt-3"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                marginTop: 30,
              }}
            >
             
                <Col className="text-right">
                  <button
                    className="app_button"
                    style={{
                      width: 150,
                      marginLeft: 30,
                      padding: 10,
                      color: "",
                      cursor: "pointer",
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
  );
}
