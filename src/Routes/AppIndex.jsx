import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { GrLogout } from "react-icons/gr";
// import SideBar from '../Component/SideBar'
import Navbar from "../Component/Navbar";
import Navlogout from "../Component/Navlogout";
import {logout} from '../redux/actions/auth'
import { useDispatch } from "react-redux";

export default function AppIndex() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout(navigate));
  };
  return (
    <div>
      <Row
        className="m-0 p-0"
        style={{ padding: 0, margin: 0, display: "flex", flexDirection: "row" }}
      >
        <Col md={2} sm={0} className="m-0 sidebar">
          {/* <SideBar /> */}
          <Navbar />
          <div
         onClick={logOut}
        className={`navbar-logout ${
          location.pathname.includes("top-up") && "navbar-active-side-menu"
        }`}
      >
        <GrLogout className="icon shadow" />
        Log out
      </div>
        </Col>
        <Col md={10} sm={12}>
          <div
            className="p-0 m-0"
            style={{ marginRight: "auto", width: "100%" }}
          >
            <div>
                {/* <Navlogout /> */}
                </div>
            <Outlet />
          </div>
        </Col>
      </Row>
    </div>
  );
}
