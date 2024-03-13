import React from "react";
import { useNavigate } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";

export default function SideBar() {
  const goto = useNavigate();
  return (
    <>
      <div>
        <center>
          <div className="user_image"></div>
        </center>
        <h4
          className="mt-4 app_title"
          style={{
            fontSize: "26px",
            textAlign: "center",
            color: "black",
            marginBottom: 40,
          }}
        >
          Keke App
        </h4>
      </div>
      <section className="link" activeclassName="active">
        <div
          onClick={() => goto("/vendorReg")}
          className={`link_item ${
            location.pathname.includes("vendor") && "active_side_menu"
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Vendors
        </div>
        {/* <div
          onClick={() => goto("/")}
          className={`link_item ${location.pathname === "/" && "active_side_menu"
            }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> 
          Regitration
        </div> */}
        <div
          onClick={() => goto("/superagentable")}
          className={`link_item ${
            location.pathname.includes("super") && "active_side_menu"
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Super Agents
        </div>
        <div
          onClick={() => goto("/agentable")}
          className={`link_item ${
            location.pathname === "/agentable" && "active_side_menu"
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Agents
        </div>

        <div
          onClick={() => goto("/Vehicleownertabel")}
          className={`link_item ${
            location.pathname === "/Vehicleownertabel" && "active_side_menu"
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Vehicles
        </div>
        <div
          onClick={() => goto("/top-up")}
          className={`link_item ${
            location.pathname === "/top-up" && "active_side_menu"
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Top Up
        </div>
      </section>
    </>
  );
}
