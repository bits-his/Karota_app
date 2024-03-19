import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import kekeLogo from "../assets/keke_napep.png";
import { GiArchiveRegister } from "react-icons/gi";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { FaUser, FaMagento } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { toParagraph } from "../Utils/Helper";
import "./Navbar.css";

export default function Navbar() {
  const goto = useNavigate();
  const location = useLocation();
  const { user } = useSelector((p) => p.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src={kekeLogo} alt="Keke logo" className="keke-logo" />
        <h4
          className="navbar-app-title"
          style={{
            fontSize: "26px",
            textAlign: "center",
            color: "black",
            marginTop: 200,
          }}
        >
          Keke App
        </h4>
      </div>
      <div
        className={`navbar-menu-container ${isMobileMenuOpen ? "open" : ""}`}
      >
        <div className="navbar-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <section className="navbar-link-container">
          <div
            onClick={() => goto("/")}
            className={`navbar-link-item ${location.pathname === "/" && "navbar-active-side-menu"
              }`}
          >
            <MdDashboard className="icon shadow" />
            {/* {toParagraph(user.role)}  */}
            Dashboard
          </div>
          {true ? (
            <div
              onClick={() => goto("/vendorReg")}
              className={`navbar-link-item ${location.pathname === "/vendor" && "navbar-active-side-menu"
                }`}
            >
              <LiaLayerGroupSolid className="icon shadow" />
              Vendors
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/vendortopup")}
              className={`navbar-link-item ${location.pathname === "/vendortopup" &&
                "navbar-active-side-menu"
                }`}
            >
              {/* <GiArchiveRegister className="icon shadow" /> */}
              <LiaLayerGroupSolid className="icon shadow" />
              Vendors Top Up
            </div>
          ) : (
            ""
          )}
          {/* <div
          onClick={() => goto("/")}
          className={`navbar-link-item ${location.pathname === "/" && "navbar-active-side-menu"
            }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> 
          Regitration
        </div> */}
          {true ? (
            <div
              onClick={() => goto("/superagenttable")}
              className={`navbar-link-item ${
                location.pathname === "/superagenttable" &&
                "navbar-active-side-menu"
                }`}
            >
              {/* <GiArchiveRegister className="icon shadow" /> */}
              <FaUser className="icon shadow" />
              Super Agents
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/superagenttopup")}
              className={`navbar-link-item ${location.pathname === "/superagenttopup" &&
                "navbar-active-side-menu"
                }`}
            >
              <FaUser className="icon shadow" />
              Super Agents Top Up
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/agenttable")}
              className={`navbar-link-item ${location.pathname === "/agenttable" && "navbar-active-side-menu"
                }`}
            >
              <MdOutlineSupportAgent className="icon shadow" />
              Agents
            </div>
          ) : (
            ""
          )}
          {/* {true ? (
          <div
            onClick={() => goto("/agintopup")}
            className={`navbar-link-item ${
              location.pathname === "/agintopup" && "navbar-active-side-menu"
            }`}
          >
            Agents Top Up
          </div>
        ) : (
          ""
        )} */}
          {true ? (
            <div
              onClick={() => goto("/agenttopup")}
              className={`navbar-link-item ${location.pathname === "/agenttopup" && "navbar-active-side-menu"
                }`}
            >
              {/* <GiArchiveRegister className="icon shadow" /> */}
              <MdOutlineSupportAgent className="icon shadow" />
              Agents Top Up
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/vehicleownertable")}
              className={`navbar-link-item ${location.pathname === "/vehicleownertable" &&
                "navbar-active-side-menu"
                }`}
            >
              <FaTruckFast className="icon shadow" />
              Vehicles
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/vehicletopup")}
              className={`navbar-link-item ${location.pathname === "/vehicletopup" &&
                "navbar-active-side-menu"
                }`}
            >
              {/* <GiArchiveRegister className="icon shadow" /> */}
              <FaTruckFast className="icon shadow" />
              Vehicles Top Up
            </div>
          ) : (
            ""
          )}
          {true ? (
            <div
              onClick={() => goto("/top-up")}
              className={`navbar-link-item ${location.pathname.includes("top-up")
                ? "navbar-active-side-menu"
                : ""
                }`}
            >
              <FaMagento className="icon shadow" />
              Collection Point
            </div>
          ) : (
            ""
          )}
        </section>
      </div>
    </div>
  );
}
