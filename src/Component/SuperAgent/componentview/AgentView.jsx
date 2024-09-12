import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Container } from "reactstrap";
import { useSelector } from "react-redux";
import { _get } from "../../../Utils/Helper";
import keke from "../../../assets/keke_napep.png";

export default function AgentView() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const params = useParams();
  const owner_id = params.id;

  const getReg = useCallback(() => {
    _get(`agents?query_type=select&id=${owner_id}`, (resp) => {
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
       
        <Container>
          <Col md={12}>
            <section style={{ marginBottom: "2rem" }}>
              <Row>
                <Col md={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>
                      Owner's Name:{" "}
                      <span style={{ fontWeight: "normal" }}>{data?.name}</span>
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>
                      Phone:{" "}
                      <span style={{ fontWeight: "normal" }}>{data?.phone_no}</span>
                    </p>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>
                      Address:{" "}
                      <span style={{ fontWeight: "normal" }}>{data?.address}</span>
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>
                      Owner's Email:{" "}
                      <span style={{ fontWeight: "normal" }}>{data?.email}</span>
                    </p>
                  </div>
                </Col>
              </Row>
            </section>
          </Col>
        </Container>
      </Row>
    </Card>
  );
}
