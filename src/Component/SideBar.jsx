import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GiArchiveRegister } from "react-icons/gi";

export default function SideBar() {
  const goto = useNavigate()
  return (
    <div className="">
      <div>
        <center>
          <div className='user_image'>
            
          </div>
        </center>
        <h4 className="mt-4 app_title" style={{ fontSize: "26px", textAlign: 'center', color: 'black'}}>
            Karota App
        </h4>  
      </div>
      <div className="link" activeclassName="active">
        <li
          onClick={() => goto("/registration")}
          className={`link_item ${
            location.pathname === "/registration" && "active_side_menu"
          }`}
        >
          <GiArchiveRegister className="icon shadow" />Regitration
        </li>
      </div>
    </div>
  )
}
