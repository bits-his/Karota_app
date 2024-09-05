import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const DropdownLink = ({ mainPath, mainLabel, subPaths = [], icon: Icon }) => {
  const history = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const goto = (path) => {
    history(path);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <>
      <div
        onClick={() => {
          goto(mainPath);
          toggleDropdown();
        }}
        className={`navbar-link-item ${
          location.pathname === mainPath && "navbar-active-side-menu"
        }`}
      >
        <div className="flex-link">
          <div>
            {Icon && <Icon className="icon shadow" />} {/* Render the icon */}
            {mainLabel}
          </div>
          {subPaths.length > 0 && (
            <div className="opwo">
              <span>
                <IoMdArrowDropdown />
              </span>
            </div>
          )}
        </div>
      </div>
      {dropdownOpen &&
        subPaths.map((subPath) => (
          <div
            key={subPath.path}
            onClick={() => goto(subPath.path)}
            className={`navbar-link-item-sub ${
              location.pathname === subPath.path &&
              "navbar-active-side-menu"
            }`}
          >
            {subPath.label}
          </div>
        ))}
    </>
  );
};

export default DropdownLink;
