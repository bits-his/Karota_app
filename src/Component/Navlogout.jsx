import React, { useState, useEffect, useRef } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navlogout.css";
import { NavLink } from "reactstrap";

const Navlogout = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="nav-container" style={{ height: 50, backgroundColor: "#f5c005" }}>
      <div className="nav-content">
        <div className="row-flex">
          <div></div> 
          <div className="row-flex2">
            <div className="dropdown" ref={dropdownRef}>
              <button type="button" className="dropdown-btn" onClick={() => setOpenmenu(!openmenu)}>
                <div className="user-flex">
                  <div className="op">
                    <FaRegCircleUser className="m-20" />
                  </div>
                  <div className="ol">
                    <div>
                      <h4 className="nav-h4">User</h4>
                    </div>
                    <div className="opw">
                      <span><IoMdArrowDropdown /></span>
                    </div>
                  </div>
                </div>
              </button>
              {openmenu && (
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Log out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navlogout;
