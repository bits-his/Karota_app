import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import "./style.css";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";
import SignIn from "./SignIn/signUp/SignIn";
import SignUp from "./SignIn/signUp/Login";

export default function Register() {
  const handleClickSignUp = () => {
    container.classList.add("right-panel-active");
  };

  const handleClickSignIn = () => {
    container.classList.remove("right-panel-active");
  };

  return (
    <div>
      <Row>
        <Card>
          <CardBody>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <Col>nddnwj</Col>
              </Col>
              <Col md={4}></Col>
            </Row>
          </CardBody>
        </Card>
      </Row>
    </div>
  );
}
