import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { SiAnalogue } from "react-icons/si";
import { _get } from "../../Utils/Helper";
import { SiApachekafka } from "react-icons/si";
import { SiAqua } from "react-icons/si";
import { MdOutlineSupportAgent } from "react-icons/md";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { FaMagento, FaUser } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

const QuickActivityWrap = () => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    _get(
      "fetchallcards",
      (response) => {
        if (response.success) setData(response.data[0]);
      },
      (error) => {
        console.error("Error fetching cards counts:", error);
      }
    );
  }, []);

  // const data = data.length ? data[0] : {}
  return (
    <div className="quick_activity_wrap">
      {/* {JSON.stringify(data)} */}
      <Row>
         <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
          <Link to="/vendorReg" style={{ textDecoration: "none" }}>
            <Card className="single_quick_activity " style={totalExpensesStyle}>
              <CardBody>
                <CardTitle>Total No. of vendors</CardTitle>
                <h3>
                  <span>{data ? data.vendors_count : 0}</span>
                </h3>
                <div style={iconStyle}>
                  <LiaLayerGroupSolid />
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
          <Link to="/superagenttable" style={{ textDecoration: "none" }}>
            <Card className="single_quick_activity " style={totalIncomeStyle}>
              <CardBody>
                <CardTitle>Total No. of super agent</CardTitle>
                <h3>
                  <span>{data ? data.super_agents_count : 0}</span>
                </h3>
                <div style={iconStyle}>
                  <FaUser />
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
          <Link to="/agenttable" style={{ textDecoration: "none" }}>
            <Card
              className="single_quick_activity "
              style={netProfitMarginStyle}
            >
              <CardBody>
                <CardTitle>Total No. of Agents</CardTitle>
                <h3>
                  <span>{data ? data.agents_count : 0}</span>
                </h3>
                <div style={iconStyle}>
                  <MdOutlineSupportAgent />
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
        <Col xs={12} sm={6} lg={3} style={columnMarginBottom}>
          <Link to="/Vehicleownertable" style={{ textDecoration: "none" }}>
            <Card className="single_quick_activity " style={cashOnHandStyle}>
              <CardBody>
                <CardTitle>Total No. of vehicles</CardTitle>
                <h3>
                  <span>{data ? data.vehicles_count : 0}</span>
                </h3>
                <div style={iconStyle}>
                  <FaTruckFast />
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
       
      </Row>
    </div>
  );
};

export default QuickActivityWrap;
