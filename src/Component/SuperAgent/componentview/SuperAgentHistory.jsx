import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Table} from "reactstrap";
import { useSelector } from "react-redux";
import { _get, _post } from "../../../Utils/Helper";
import keke from "../../../assets/keke_napep.png";

export default function SuperAgentHistory() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _get(`fetch/trans_history?super_agent_id=${owner_id}`, (resp) => {
      if (resp.success && resp.results) {
        console.log(resp.results[0]);
      }
    });
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  const handleBackToTable = () => {
    navigate("/superagenttable");
  };
  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={12}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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

            <h4 className="app_title">Account History</h4>

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
        </Col>
        <Col md={12}>
          <Col md={12}>
            <Table striped bordered>
              <thead>
                <tr className="table-dark">
                  <th scope="row">Date</th>
                  <th scope="row">Type</th>
                  <th scope="row">Description</th>
                  <th scope="row">Amount</th>
                  <th scope="row">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1/2/2000</td>
                  <td>debit</td>
                  <td>payment</td>
                  <td>2000</td>
                  <td>10000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
