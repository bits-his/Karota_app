import React from "react";
import { useNavigate } from "react-router-dom";
import kekeLogo from "../assets/keke_napep.png";
import { useSelector } from "react-redux";
import { toParagraph } from "../Utils/Helper";

export default function SideBar() {
  const goto = useNavigate();
  const { user } = useSelector((p) => p.auth);

  return (
    <div>
      <div>
        <center>
          <div className="user_image">
            <img src={kekeLogo} alt="Keke logo" className="keke-logo" />
          </div>
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
          Keke dpp
        </h4>
      </div>
      <section className="link">
        <div
          onClick={() => goto("/")}
          className={`link_item ${location.pathname === "/" && "active_side_menu"
            }`}
        >
          {toParagraph(user.role)} Dashboard
        </div>
        {true ? (
          <div
            onClick={() => goto("/vendorReg")}
            className={`link_item ${location.pathname === "/vendor" && "active_side_menu"
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Vendors
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/vendortopup")}
            className={`link_item ${location.pathname === "/vendortopup" && "active_side_menu"
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Vendors Top Up
          </div>
        ) : (
          ""
        )}
        {/* <div
          onClick={() => goto("/")}
          className={`link_item ${location.pathname === "/" && "active_side_menu"
            }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> 
          Regitration
        </div> */}
        {true ? (
          <div
            onClick={() => goto("/superagenttable")}
            className={`link_item ${location.pathname === "/superagenttable" && "active_side_menu"
              }`}
          >
            Super Agents
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/superagenttopup")}
            className={`link_item ${location.pathname === "/superagenttopup" && "active_side_menu"
              }`}
          >
            Super Agents Top Up
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/agenttable")}
            className={`link_item ${location.pathname === "/agenttable" && "active_side_menu"
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Agents
          </div>
        ) : (
          ""
        )}
        {/* {true ? (
          <div
            onClick={() => goto("/agintopup")}
            className={`link_item ${
              location.pathname === "/agintopup" && "active_side_menu"
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
            className={`link_item ${location.pathname === "/agenttopup" && "active_side_menu"
              }`}
          >
            Agents Top Up
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/vehicleownertable")}
            className={`link_item ${location.pathname === "/vehicleownertable" && "active_side_menu"
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Vehicles Owners
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/top-up")}
            className={`link_item ${location.pathname.includes("top-up") ? "active_side_menu" : ""
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Vehicles
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/vehicletopup")}
            className={`link_item ${location.pathname === "/vehicletopup" && "active_side_menu"
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Vehicles Top Up
          </div>
        ) : (
          ""
        )}
        {true ? (
          <div
            onClick={() => goto("/vehicles")}
            className={`link_item ${location.pathname.includes("vehicles") ? "active_side_menu" : ""
              }`}
          >
            {/* <GiArchiveRegister className="icon shadow" /> */}
            Collection Point
          </div>
        ) : (
          ""
        )}
      </section>
    </div>
  );
}
