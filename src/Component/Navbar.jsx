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
import { FaUser, FaMagento, FaTimes, FaBars } from "react-icons/fa";
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOut = () => {
    dispatch(logout(navigate));
  };

  const toggleVendorDropdown = () => {
    closeDropdown();
    setVendorDropdown(!vendorDropdown);
  };

  const toggleSuperAgentDropdown = () => {
    closeDropdown();
    setSuperAgentDropdown(!superAgentDropdown);
  };

  const toggleAgentDropdown = () => {
    closeDropdown();
    setAgentDropdown(!agentDropdown);
  };

  const toggleVehicleDropdown = () => {
    closeDropdown();
    setVehicleDropdown(!vehicleDropdown);
  };

  const closeDropdown = () => {
    // Count how many dropdowns are open
    let openDropdownCount = 0;
    if (vendorDropdown) openDropdownCount++;
    if (superAgentDropdown) openDropdownCount++;
    if (agentDropdown) openDropdownCount++;
    if (vehicleDropdown) openDropdownCount++;

    // If more than two dropdowns are open, close all dropdowns
    if ((openDropdownCount) => 2 || openDropdownCount) {
      setVendorDropdown(false);
      setSuperAgentDropdown(false);
      setAgentDropdown(false);
      setVehicleDropdown(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="sidebar-toggler" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`sidebar ${isSidebarOpen ? "show" : ""}`}>
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
              onClick={() => {
                goto("/");
                toggleSidebar();
              }}
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
                    toggleSidebar();
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
                    onClick={() => {
                      goto("/vendortopup");
                      toggleSidebar();
                    }}
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
                    toggleSidebar();
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
                    onClick={() => {
                      goto("/superagenttopup");
                      toggleSidebar();
                    }}
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
                    toggleSidebar();
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
                    onClick={() => {
                      goto("/agenttopup");
                      toggleSidebar();
                    }}
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
                    toggleSidebar();
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
                    onClick={() => {
                      goto("/vehicletopup");
                      toggleSidebar();
                    }}
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
                onClick={() => {
                  goto("/vehicles");
                  toggleSidebar();
                }}
                className={`navbar-link-item ${
                  location.pathname.includes("vehicles")
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
              onClick={() => {
                goto("/report_stolen");
                toggleSidebar();
              }}
              className={`navbar-link-item ${
                location.pathname === "/report_stolen" &&
                "navbar-active-side-menu"
              }`}
            >
              {/* <GrLogout className="icon shadow" /> */}
              <GoReport
                className="icon
          shadow"
              />
              Report Stolen
            </div>
            <div
              onClick={logOut}
              className={`navbar-logout ${
                location.pathname.includes("top-up") &&
                "navbar-active-side-menu"
              }`}
            >
              <GrLogout className="icon shadow" />
              Log out
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
