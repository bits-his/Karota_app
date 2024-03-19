import React from 'react'
import { Outlet } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
// import SideBar from '../Component/SideBar'
import Navbar from '../Component/Navbar'

export default function AppIndex() {
    return (
        <div >
            <Row className="m-0 p-0" style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'row' }}>
                <Col md={2} sm={0} className="m-0 sidebar">
                    {/* <SideBar /> */}
                    <Navbar />
                </Col>
                <Col md={10} sm={12}>
                    <div className="p-0 m-0" style={{ marginRight: 'auto', width: '100%' }}>
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </div>
    )
}
