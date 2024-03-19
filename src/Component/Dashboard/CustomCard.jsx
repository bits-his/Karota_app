import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { SiAnalogue } from "react-icons/si";
import { _get } from '../../Utils/Helper';
import { SiApachekafka } from "react-icons/si";
import { SiAqua } from "react-icons/si";
import { FaMagento } from 'react-icons/fa';

const QuickActivityWrap = () => {
    const columnMarginBottom = {
        marginBottom: "2rem",
    };

    const totalIncomeStyle = {
        backgroundColor: "#f5c005 ",
        borderRadius: "15px",
        padding: "20px",
        height: "100%",
        color: "#fff",
        transition: "background-color 0.3s ease !important",
        cusor: "pointer",
    };

    const totalExpensesStyle = {
        backgroundColor: "#f5c005 ",
        borderRadius: "15px",
        padding: "20px",
        height: "100%",
        color: "#fff",
        transition: "background-color 0.3s ease !important",
        cusor: "pointer",
    };

    const cashOnHandStyle = {
        backgroundColor: "#f5c005 ",
        borderRadius: "15px",
        padding: "20px",
        height: "100%",
        color: "#fff",
        transition: "background-color 0.3s ease !important",
        cusor: "pointer",
    };

    const netProfitMarginStyle = {
        backgroundColor: "#f5c005 ",
        borderRadius: "15px",
        padding: "20px",
        height: "100%",
        color: "#fff",
        transition: "background-color 0.3s ease !important",
        cusor: "pointer",
    };
    const iconStyle = {
        fontSize: "50px",
        display: "flex",
        justifyContent: "end",
        alignItems: "start",
    };

    const [superAgentMax, setSuperAgentMax] = useState([]);

    const getdata = () => {

    }


    useEffect(() => {
        _get('fetchallcards', (response) => {
            console.log("Data from server : ", response)
            const data = response.data;
            console.log("Data from server : ")
            setSuperAgentMax(data);
        },
            (error) => {
                console.error('Error fetching cards counts:', error);
            })

    });



    //   return () => clearInterval(interval);
    // }, [superAgentMax, vendorMax, vehicleMax, agentMax]);


    // const data = superAgentMax.length? superAgentMax[0] : {}
    return (
        <div className="quick_activity_wrap">
            {/* {JSON.stringify(superAgentMax)} ddd */}
            <Row>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Link to="/superagentable" style={{ textDecoration: 'none' }}>
                        <Card className="single_quick_activity " style={totalIncomeStyle} >
                            <CardBody>
                                <CardTitle>Total No. of super agent</CardTitle>
                                <h3><span>{data?.super_agents_count}</span></h3>
                                <div style={iconStyle}><FaMagento /></div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Link to="/vendorReg" style={{ textDecoration: 'none' }}>
                        <Card className="single_quick_activity " style={totalExpensesStyle}>
                            <CardBody>
                                <CardTitle>Total No. of vendors</CardTitle>
                                <h3><span>{superAgentMax?.vendors_count}</span></h3>
                                <div style={iconStyle}><SiAnalogue /></div>
                            </CardBody>

                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Link to="/Vehicleownertable" style={{ textDecoration: 'none' }}>
                        <Card className="single_quick_activity " style={cashOnHandStyle}>
                            <CardBody>
                                <CardTitle>Total No. of vehicles</CardTitle>
                                <h3><span>{superAgentMax?.vehicles_count}</span></h3>
                                <div style={iconStyle}><SiApachekafka /></div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
                    <Link to="/agentable" style={{ textDecoration: 'none' }}>
                        <Card className="single_quick_activity " style={netProfitMarginStyle}>
                            <CardBody>
                                <CardTitle>Total No. of Agents</CardTitle>
                                <h3><span>{data?.agents_count}</span></h3>
                                <div style={iconStyle}><SiAqua /></div>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </Row >
        </div >
    );
};

export default QuickActivityWrap;