import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { FaMagento } from "react-icons/fa6";s
import { SiAnalogue } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiAqua } from "react-icons/si";
import { FaMagento } from 'react-icons/fa';

const QuickActivityWrap = () => {
    const columnMarginBottom = {
        marginBottom: '2rem'
    }

    const totalIncomeStyle = {
        backgroundColor: '#f5c005 ',
        borderRadius: '15px',
        padding: '20px',
        height: '100%',
        color: '#fff',
        transition: 'background-color 0.3s ease !important',
        cusor: "pointer"

    };

    const totalExpensesStyle = {
        backgroundColor: '#f5c005 ',
        borderRadius: '15px',
        padding: '20px',
        height: '100%',
        color: '#fff',
        transition: 'background-color 0.3s ease !important',
        cusor: "pointer"
    };

    const cashOnHandStyle = {
        backgroundColor: '#f5c005 ',
        borderRadius: '15px',
        padding: '20px',
        height: '100%',
        color: '#fff',
        transition: 'background-color 0.3s ease !important',
        cusor: "pointer"
    };

    const netProfitMarginStyle = {
        backgroundColor: '#f5c005 ',
        borderRadius: '15px',
        padding: '20px',
        height: '100%',
        color: '#fff',
        transition: 'background-color 0.3s ease !important',
        cusor: "pointer"
    };
    const iconStyle = {
        fontSize: '50px',
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'start',
    };


    const [superAgentCount, setSuperAgentCount] = useState(0);
    const [vendorCount, setVendorCount] = useState(0);
    const [vehicleCount, setVehicleCount] = useState(0);
    const [agentCount, setAgentCount] = useState(0);

    const superAgentMax = 80;
    const vendorMax = 20;
    const vehicleMax = 500;
    const agentMax = 10;

    useEffect(() => {
        const interval = setInterval(() => {
            if (superAgentCount < superAgentMax) {
                setSuperAgentCount(prevCount => prevCount + Math.floor(Math.random() * 5) + 1);
            }
            if (vendorCount < vendorMax) {
                setVendorCount(prevCount => prevCount + Math.floor(Math.random() * 5) + 1);
            }
            if (vehicleCount < vehicleMax) {
                setVehicleCount(prevCount => prevCount + Math.floor(Math.random() * 50) + 1);
            }
            if (agentCount < agentMax) {
                setAgentCount(prevCount => prevCount + Math.floor(Math.random() * 2) + 1);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [superAgentCount, vendorCount, vehicleCount, agentCount]);


    return (
        <div className="quick_activity_wrap">
            
            <Row>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                <Link to="/superagentable"style={{ textDecoration: 'none' }}>
                  
                    <Card className="single_quick_activity " style={totalIncomeStyle} >
                        <CardBody>
                            <CardTitle>Total No. of super agent</CardTitle>
                            <h3><span>{superAgentCount}</span></h3>
                            <div style={iconStyle}><FaMagento /></div>
                        </CardBody>
                    </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                <Link to="/vendorReg"style={{ textDecoration: 'none' }}>
                    <Card className="single_quick_activity " style={totalExpensesStyle}>
                        <CardBody>
                            <CardTitle>Total No. of vendors</CardTitle>
                            <h3><span>{vendorCount}</span></h3>
                            <div style={iconStyle}><SiAnalogue /></div>
                        </CardBody>
                        
                    </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                <Link to="/Vehicleownertable"style={{ textDecoration: 'none' }}>
                    <Card className="single_quick_activity " style={cashOnHandStyle}>
                        <CardBody>
                            <CardTitle>Total No. of vehicles</CardTitle>
                            <h3><span>{vehicleCount}</span></h3>
                            <div style={iconStyle}><SiApachekafka /></div>
                        </CardBody>
                    </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                <Link to="/agentable"style={{ textDecoration: 'none' }}>
                    <Card className="single_quick_activity " style={netProfitMarginStyle}>
                        <CardBody>
                            <CardTitle>Total No. of Agents</CardTitle>
                            <h3><span>{agentCount}</span></h3>
                            <div style={iconStyle}><SiAqua /></div>
                        </CardBody>
                    </Card>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default QuickActivityWrap;