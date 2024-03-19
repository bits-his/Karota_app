import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import keke from "../../../assets/keke_napep.png";
import { useDispatch } from "react-redux";
import { login } from "../../../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { toParagraph } from "../../../Utils/Helper";

export default function Login() {
  const [form, setForm] = useState({
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }));
    console.log(form);
  };

  const handleSubmit = () => {
    setLoading(true);
    setForm(form);
    console.log(form);
    dispatch(
      login(
        { username: form.email, password: form.password, history: navigate },
        (res) => {
          setLoading(false);

          navigate("/");
        },
        (err) => {
          setLoading(false);
          setError(err);
        }
      )
    );
  };
  return (
    <div
      className="login"
      style={{
        marginTop: 130,
        // backgroundColor: "#f5c005",
      }}
    >
      <Row>
        <div
          style={{
            position: "absolute",
            left: "63.4rem",
            borderRadius: "50%",
            top: "1px",
            height: "10rem",
            width: "10rem",
            background: "#fff",
          }}
        >
          <img
            src={keke}
            alt="kek Image"
            style={{ position: "absolute", left: "6px", width: "15rem" }}
          />
        </div>
        <Col md={4}></Col>
        <Col md={4}>
          <CardBody
            style={{
              border: "1px solid black",
              borderRadius: "15px",
              padding: "90px",
              background: "#f5c005",
            }}
          >
            <Card>
              <Col>
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
                    <Label style={{}}>Password</Label>
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
                  {/* {JSON.stringify(error)} */}
                  <p className="mt-3 text-danger text-center">
                    {" "}
                    <b>{toParagraph(Object.keys(error)[0])}</b>{" "}
                    <i>{Object.values(error)[0]}</i>
                  </p>
                  <Col mt={12} className=" mt-3 text-center" mb={1}>
                    <Button
                      // style={{ position: 'relative', marginTop: 15, background: '#fff', color: '#000', fontWeight: '700', left: '100px', border: '1px solid black' }}
                      variant="gradient"
                      color="light"
                      fullWidth
                      onClick={handleSubmit}
                    >
                      {loading && <Spinner size={10} />} sign In
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
