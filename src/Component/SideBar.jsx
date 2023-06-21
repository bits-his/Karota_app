import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GiArchiveRegister } from 'react-icons/gi'
import { MdDashboard } from 'react-icons/md'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

export default function SideBar() {
  const goto = useNavigate()
  const [showSubMenu, setShowSubMenu] = useState(false)

  const drop = () => {
    setShowSubMenu((p) => !p)
  }
  return (
    <div className="sidebar">
      <div>
        <h4 className="mt-4 app_title">Karota App</h4>
      </div>
      <div className="link" activeclassName="active">
        <li
          onClick={() => goto('/dashboard')}
          className={`link_item ${
            location.pathname === '/dashboard' && 'active_side_menu'
          }`}
        >
          {/* <MdDashboard className="icon shadow" /> */}
          Dashboard
        </li>
        <li
          onClick={() => goto('/registration')}
          className={`link_item ${
            location.pathname === '/registration' && 'active_side_menu'
          }`}
        >
          {/* <GiArchiveRegister className="icon shadow" /> */}
          Regitration
        </li>
        {/* <li className="link_item" onClick={drop}>
          <span>
            Basic Data{' '}
            {showSubMenu ? (
              <TiArrowSortedUp size="1.4rem" />
            ) : (
              <TiArrowSortedDown size="1.4rem" />
            )}
          </span>
        </li> */}
        {/* {showSubMenu ? (
          <div className="sub_menu">
            <li
              onClick={() => goto('/incident')}
              className={`link_item1 ${
                location.pathname === '/incident' && 'active_side_menu'
              }`}
            >
              Incident
            </li>
            <li
              onClick={() => goto('/payment')}
              className={`link_item1 ${
                location.pathname === '/payment' && 'active_side_menu'
              }`}
            >
              payment
            </li>
            <li
              onClick={() => goto('/varify-payment-with-id')}
              className={`link_item1 ${
                location.pathname === '/varify-payment-with-id' &&
                'active_side_menu'
              }`}
            >
              Varify Payment With ID
            </li>
            <li
              onClick={() => goto('/varify-payment-with-qr')}
              className={`link_item1 ${
                location.pathname === '/varify-payment-with-qr' &&
                'active_side_menu'
              }`}
            >
              Varify Payment With QR
            </li>
          </div>
        ) : (
          ''
        )} */}

        {/* <li
          onClick={() => goto('/incident')}
          className={`link_item ${
            location.pathname === '/incident' && 'active_side_menu'
          }`}
        >
          Incident
        </li> */}
        <li
          onClick={() => goto('/payment')}
          className={`link_item ${
            location.pathname === '/payment' && 'active_side_menu'
          }`}
        >
          payment
        </li>
        <li
          onClick={() => goto('/verify-payment-with-id')}
          className={`link_item ${
            location.pathname === '/verify-payment-with-id' &&
            'active_side_menu'
          }`}
        >
          Varify Payment With ID
        </li>
        <li
          onClick={() => goto('/verify-payment-with-qr')}
          className={`link_item ${
            location.pathname === '/verify-payment-with-qr' &&
            'active_side_menu'
          }`}
        >
          Varify Payment With QR
        </li>
      </div>
    </div>
  )
}
