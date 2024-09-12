import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import kekeLogo from "../assets/keke_napep.png";
import { useSelector } from "react-redux";
import "./Navbar.css";
import DropdownLink from "./DropdownLink";
import { sidebarModules } from "./use-admin/Module";
import { logout } from "../redux/actions/auth";
import { GrLogout } from "react-icons/gr";

export default function Navbar() {
  const goto = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const logOut = () => {
    dispatch(logout(goto));
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  // Check if the user object is loaded
  if (!user) {
    return null; // or a loading indicator
  }

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
          {sidebarModules.map((module, index) => {
            // Check if the user has access to the module
            if (user.accessTo && user.accessTo.includes(module.title)) {
              // If the module has a submenu
              if (module.subMenu) {
                return (
                  <DropdownLink
                    key={index}
                    mainPath={module.route}
                    mainLabel={module.title}
                    icon={module.icon}
                    subPaths={
                      // Filter the submenu to only include items the user has access to
                      module.subMenu.filter((subItem) =>
                        user.functionalities && user.functionalities.includes(subItem.label)
                      )
                    }
                    isOpen={activeDropdown === module.title}
                  />
                );
              } else {
                return (
                  <div
                    key={index}
                    onClick={() => goto(module.route)}
                    className={`navbar-link-item ${location.pathname === module.route && "navbar-active-side-menu"}`}
                  >
                    <module.icon className="icon shadow" />
                    {module.title}
                  </div>
                );
              }
            }
            return null; // Return null if the user doesn't have access
          })}
          <div
            onClick={logOut}
            className={`navbar-logout ${location.pathname.includes("top-up") && "navbar-active-side-menu"
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