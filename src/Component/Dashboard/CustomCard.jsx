import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { FaMagento } from "react-icons/fa6";
import { SiAnalogue } from "react-icons/si";
import { SiApachekafka } from "react-icons/si";
import { SiAqua } from "react-icons/si";

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
<<<<<<< HEAD
                <Col xs={12} sm={6} lg={3}>
                    <Card className="single_quick_activity " style={totalIncomeStyle}>
=======
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Card  className="single_quick_activity " style={totalIncomeStyle}>
>>>>>>> beaf3bc670d0f0f40e394721b0c48326fdbb7677
                        <CardBody>
                            <CardTitle>Registred superagent</CardTitle>
                            <h3><span>{superAgentCount}</span></h3>
                            <div style={iconStyle}><FaMagento /></div>
                        </CardBody>
                    </Card>
                </Col>
<<<<<<< HEAD
                <Col xs={12} sm={6} lg={3}>
                    <Card className="single_quick_activity " style={totalExpensesStyle}>
=======
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Card  className="single_quick_activity " style={totalExpensesStyle}>
>>>>>>> beaf3bc670d0f0f40e394721b0c48326fdbb7677
                        <CardBody>
                            <CardTitle>Registred vendors</CardTitle>
                            <h3><span>{vendorCount}</span></h3>
                            <div style={iconStyle}><SiAnalogue /></div>
                        </CardBody>
                    </Card>
                </Col>
<<<<<<< HEAD
                <Col xs={12} sm={6} lg={3}>
                    <Card className="single_quick_activity " style={cashOnHandStyle}>
=======
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Card  className="single_quick_activity " style={cashOnHandStyle}>
>>>>>>> beaf3bc670d0f0f40e394721b0c48326fdbb7677
                        <CardBody>
                            <CardTitle>Registred vehicle</CardTitle>
                            <h3><span>{vehicleCount}</span></h3>
                            <div style={iconStyle}><SiApachekafka /></div>
                        </CardBody>
                    </Card>
                </Col>
<<<<<<< HEAD
                <Col xs={12} sm={6} lg={3}>
                    <Card className="single_quick_activity " style={netProfitMarginStyle}>
=======
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Card  className="single_quick_activity " style={netProfitMarginStyle}>
>>>>>>> beaf3bc670d0f0f40e394721b0c48326fdbb7677
                        <CardBody>
                            <CardTitle>Agent</CardTitle>
                            <h3><span>{agentCount}</span></h3>
                            <div style={iconStyle}><SiAqua /></div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default QuickActivityWrap;
