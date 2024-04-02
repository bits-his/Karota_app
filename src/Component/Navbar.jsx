import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import kekeLogo from "../assets/keke_napep.png";
import { GiArchiveRegister } from "react-icons/gi";
import { GrLogout } from "react-icons/gr";
import { logout } from "../redux/actions/auth";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { FaUser, FaMagento } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { toParagraph } from "../Utils/Helper";
import "./Navbar.css";
import { GoReport } from "react-icons/go";

export default function Navbar() {
  const goto = useNavigate();
  const location = useLocation();
  const [vendorDropdown, setVendorDropdown] = useState(false);
  const [superAgentDropdown, setSuperAgentDropdown] = useState(false);
  const [agentDropdown, setAgentDropdown] = useState(false);
  const { user } = useSelector((p) => p.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [vehicleDropdown, setVehicleDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout(navigate));
  };

  const toggleVendorDropdown = () => {
    setVendorDropdown(!vendorDropdown);
  };

  const toggleSuperAgentDropdown = () => {
    setSuperAgentDropdown(!superAgentDropdown);
  };

  const toggleAgentDropdown = () => {
    setAgentDropdown(!agentDropdown);
  };

  const toggleVehicleDropdown = () => {
    setVehicleDropdown(!vehicleDropdown);
  };

  const closeDropdown = () => {};

  return (
    <div className="navbar-container">
      <div className="navbar-logo-container">
        <img src={kekeLogo} alt="Keke logo" className="navbar-keke-logo" />
      </div>
      <h4
        className="navbar-app-title"
        style={{
          fontSize: "26px",
          marginTop: 20,
          textAlign: "center",
          color: "black",
        }}
      >
        Keke App
      </h4>
      <div className="navbar-menu-container">
        <section className="navbar-link-container">
          <div
            onClick={() => goto("/")}
            className={`navbar-link-item ${
              location.pathname === "/" && "navbar-active-side-menu"
            }`}
          >
            <MdDashboard className="icon shadow" />
            Dashboard
          </div>
          {true && (
            <>
              <div
                onClick={() => {
                  goto("/vendorReg");
                  toggleVendorDropdown();
                }}
                className={`navbar-link-item ${
                  location.pathname === "/vendor" && "navbar-active-side-menu"
                }`}
              >
                <div className="flex-link">
                  <div>
                    <LiaLayerGroupSolid className="icon shadow" />
                    Vendors
                  </div>
                  <div className="opwo">
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                </div>
              </div>
              {vendorDropdown && (
                <div
                  onClick={() => goto("/vendortopup")}
                  className={`navbar-link-item-sub ${
                    location.pathname === "/vendortopup" &&
                    "navbar-active-side-menu"
                  }`}
                >
                  {/* <LiaLayerGroupSolid className="icon shadow" /> */}
                  Vendors Top Up
                </div>
              )}
            </>
          )}
          {/* Super Agents */}
          {true && (
            <>
              <div
                onClick={() => {
                  goto("/superagenttable");
                  toggleSuperAgentDropdown();
                }}
                className={`navbar-link-item ${
                  location.pathname === "/superagenttable" &&
                  "navbar-active-side-menu"
                }`}
              >
                <div className="flex-link">
                  <div>
                    <FaUser className="icon shadow" />
                    Super Agents
                  </div>
                  <div className="opwo">
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                </div>
              </div>
              {superAgentDropdown && (
                <div
                  onClick={() => goto("/superagenttopup")}
                  className={`navbar-link-item-sub ${
                    location.pathname === "/superagenttopup" &&
                    "navbar-active-side-menu"
                  }`}
                >
                  {/* <FaUser className="icon shadow" /> */}
                  Super Agents Top Up
                </div>
              )}
            </>
          )}
          {/* Agents */}
          {true && (
            <>
              <div
                onClick={() => {
                  goto("/agenttable");
                  toggleAgentDropdown();
                }}
                className={`navbar-link-item ${
                  location.pathname === "/agenttable" &&
                  "navbar-active-side-menu"
                }`}
              >
                <div className="flex-link">
                  <div>
                    <MdOutlineSupportAgent className="icon shadow" />
                    Agents
                  </div>
                  <div className="opwo">
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                </div>
              </div>
              {agentDropdown && (
                <div
                  onClick={() => goto("/agenttopup")}
                  className={`navbar-link-item-sub ${
                    location.pathname === "/agenttopup" &&
                    "navbar-active-side-menu"
                  }`}
                >
                  {/* <MdOutlineSupportAgent className="icon shadow" /> */}
                  Agents Top Up
                </div>
              )}
            </>
          )}
          {/* Vehicles */}
          {true && (
            <>
              <div
                onClick={() => {
                  goto("/vehicleownertable");
                  toggleVehicleDropdown();
                }}
                className={`navbar-link-item ${
                  location.pathname === "/vehicleownertable" &&
                  "navbar-active-side-menu"
                }`}
              >
                <div className="flex-link">
                  <div>
                    <FaTruckFast className="icon shadow" />
                    Vehicles
                  </div>
                  <div className="opwo">
                    <span>
                      <IoMdArrowDropdown />
                    </span>
                  </div>
                </div>
              </div>
              {vehicleDropdown && (
                <div
                  onClick={() => goto("/vehicletopup")}
                  className={`navbar-link-item-sub ${
                    location.pathname === "/vehicletopup" &&
                    "navbar-active-side-menu"
                  }`}
                >
                  {/* <FaTruckFast className="icon shadow" /> */}
                  Vehicles Top Up
                </div>
              )}
            </>
          )}
          {/* Collection Point */}
          {true && (
            <div
              onClick={() => goto("/vehicles")}
              className={`navbar-link-item ${location.pathname.includes("vehicles")
                ? "navbar-active-side-menu"
                : ""
                }`}
            >
              <FaMagento
                className="icon
          shadow"
              />
              Collection Point
            </div>
          )}
          <div
            onClick={() => goto("/report_stolen")}
            className={`navbar-link-item ${
              location.pathname === "/report_stolen" && "navbar-active-side-menu"
            }`}
          >
            {/* <GrLogout className="icon shadow" /> */}
            <GoReport />
            Report Stolen
          </div>
          <div
            onClick={logOut}
            className={`navbar-link-item ${
              location.pathname.includes("top-up") && "navbar-active-side-menu"
            }`}
          >
            <GrLogout className="icon shadow" />
            Log out
          </div>
        </section>
      </div>
    </div>
  );
}
