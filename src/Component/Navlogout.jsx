import React, { useState, useEffect, useRef, } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navlogout.css";
import { NavLink } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { logout } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
=======
import { Logout } from "@mui/icons-material";
import { logout } from "../redux/actions/auth";
import { useNavigate } from "react-router-dom";
import { toParagraph } from "../Utils/Helper";
>>>>>>> 1a54274c77c0fd7766bd4bfd8908f7f7d981ec24

const Navlogout = () => {
  const [openmenu, setOpenmenu] = useState(false);
  const dropdownRef = useRef(null);
  const { user } = useSelector(s => s.auth)
  const dispatch = useDispatch()

<<<<<<< HEAD
  //  const dispatch = useDispatch()
   const navigate = useNavigate()
   const logOut = () =>{
=======
  const navigate = useNavigate()

  const logOut = () => {
>>>>>>> 1a54274c77c0fd7766bd4bfd8908f7f7d981ec24
    dispatch(
      logout(navigate)
    )
  }
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
                      <h4 className="nav-h4">{user.name || 'User'}</h4>
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
                    My {toParagraph(user.role || 'User')} Profile
                  </a>
<<<<<<< HEAD
                  <a className="dropdown-item" href="#" onClick={logOut}>
                    Log out
=======

                  <a onClick={logOut} className="dropdown-item" href="#">
                    <p> <Logout />  Log out</p>
>>>>>>> 1a54274c77c0fd7766bd4bfd8908f7f7d981ec24
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
