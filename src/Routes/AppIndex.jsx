import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import SideBar from '../Component/SideBar'

export default function AppIndex() {
  return (
    <div>
      <Row className="m-0 p-0">
        <Col md={2} className="m-0 sidebar">
          <SideBar />
        </Col>
        <Col md={10} className='backgroung_image'>
          <Col md={12} className="p-0 m-0">
            <Outlet />
          </Col>
        </Col>
      </Row>
    </div>
  )
}
