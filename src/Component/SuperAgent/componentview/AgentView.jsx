import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Table, Badge } from "reactstrap";
import { useSelector } from "react-redux";
import { _get, _post } from "../../../Utils/Helper";
import keke from "../../../assets/keke_napep.png";

export default function AgentView() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const [superagent, setsuperagent] = useState([]);
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _get(`agents?query_type=select-all&id=${owner_id}`, (resp) => {
      if (resp.success && resp.results) {
        setData(resp.results[0]);
      }
    });
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);

  const handleBackToTable = () => {
    navigate("/agenttable");
  };

  return (
    <Card className="">
      <Row>
        {/* <Col md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {}

            <Button
              className="app_button"
              style={{
                width: 150,
                padding: 10,
                marginLeft: 15,
                color: "#000",
                borderRadius: 10,
              }}
              onClick={handleBackToTable}
            >
              Back
            </Button>

            
            <h4 className="app_title">{data.name}</h4>

            
            <img
              src={keke}
              alt="User DP"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginRight: 10,
              }}
            />
          </div>
          <hr />
        </Col> */}
       <Row className="align-items-start text-left">
       <section style={{marginBottom: "2rem"}}>
            <div style={{display: "flex"}}>
              <div style={{width: "50%", marginBottom: "20px"}}>
                <p>Owner's Name: </p>
                <span>{data.name}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>State: </p>
                <span>{data.state}</span>
              </div>
            </div>
             
            <div style={{display: "flex"}}>
              <div style={{width: "50%"}}>
                <p>Phone: </p>
                <span>{data.phone_no}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>NIN: </p>
                <span>{data.nin}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>Address: </p>
                <span>{data.address}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>LGA: </p>
                <span>{data.lga}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>Owner's Email: </p>
                <span>{data.email}</span>
              </div>
              <div style={{width: "50%"}}>
                <p>Service Location: </p>
                <span>{data.service_location}</span>
              </div>
            </div>
          </section>
       
</Row>
      </Row>
    </Card>
  );
}
