import React from "react";
import { Col, Row } from "reactstrap";
import { FaApple } from "react-icons/fa";
import { BsGooglePlay } from "react-icons/bs";

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
        <Col md={12}>
          <Col md={5}>
            <div

            >
              <div>
                <p className="logo_name">IslahPay</p>
                <p className="logo_para">The best halal way to halal wealth</p>
              </div>
              <div
                style={{
                  width: "90%",
                  alignContent: "center",
                  textAlign: "center",
                }}
              >
                <button className="start_btn"> Get Started </button>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div className="icon_btn_div">
                  <BsGooglePlay className="icon_" />
                  <div>
                    <p className="icon_btn1"> Download on </p>
                    <p className="icon_btn"> Google Play </p>
                  </div>
                </div>
                <div className="icon_btn_div">
                  <FaApple className="icon_" />
                  <div>
                    <p className="icon_btn1"> Download on </p>
                    <p className="icon_btn"> App Store </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div
              className="container"
              id="container"
              style={{
                marginTop: 150,
              }}
            >
              <div className="form-container sign-up-containe">
                {/* <form action="#" className="Signup_form">
                  <SignUp />
                </form> */}
              </div>
              <div className="form-containe sign-in-containe">
                <Row>
                  <Col md={12}>
                    <h2 className="second_header">Welcome To IslahPay!</h2>
                    <p className="sign_in_para">Let get Started........</p>
                  </Col>
                </Row>
                <form action="#" className="SignIn_form">
                  {/* <SignIn /> */}
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div
                    className="overlay-panel overlay-left"
                    style={{ gap: 50 }}
                  >
                    <div>
                      <h1>Welcome Back!</h1>
                      <p style={{ fontFamily: "monospace" }}>
                        To keep connected with us please login with your
                        personal info
                      </p>
                    </div>
                    <button
                      className="ghost"
                      id="signIn"
                      style={{ color: "#fff" }}
                      onClick={handleClickSignIn}
                    >
                      Sign In
                    </button>
                  </div>
                  <div
                    className="overlay-panel overlay-right"
                    style={{ gap: 100 }}
                  >
                    <div style={{ gap: 50 }}>
                      <h1 style={{ fontFamily: "monospace", marginBottom: 40 }}>
                        Hello Friend!
                      </h1>
                      <p style={{ fontFamily: "monospace" }}>
                        Open an account from your phone with your BVN number, no
                        paperwork required.
                      </p>
                    </div>
                    <button
                      className="ghost"
                      id="signUp"
                      style={{ color: "#fff" }}
                      onClick={handleClickSignUp}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
