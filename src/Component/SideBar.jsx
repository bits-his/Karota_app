import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiArchiveRegister } from "react-icons/gi";

export default function SideBar() {
  const goto = useNavigate()
  return (
    <>
      <div>
        <center>
          <div className="user_image"></div>
        </center>
        <h4 className="mt-4 app_title" style={{ fontSize: "26px", textAlign: 'center', color: 'black', marginBottom: 40,}}>
            Keke App
        </h4>  
      </div>
      <div className="link" activeclassName="active">
        <li
          onClick={() => goto("/")}
          className={`link_item ${
            location.pathname === "/" && "active_side_menu"
          }`}
        >
          <GiArchiveRegister className="icon shadow" />
          Regitration
        </li>
        <li
          onClick={() => goto("/superagent")}
          className={`link_item ${
            location.pathname === "/superagent" && "active_side_menu"
          }`}
        >
          <GiArchiveRegister className="icon shadow" />
          Super Agent
        </li>
        <li
          onClick={() => goto("/vendor")}
          className={`link_item ${
            location.pathname === "/vendor" && "active_side_menu"
          }`}
        >
          <GiArchiveRegister className="icon shadow" />
          Vendor Reg.
        </li>
      </div>
    </>
  );
}
