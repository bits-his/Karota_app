import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Card, Row, Col, Button, Input } from "reactstrap";
import keke from "../../../assets/keke_napep.png";
import { _get, _post } from "../../../Utils/Helper";
import AgentVeiw from  "./AgentView"

export default function AgentHistory() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState([]);
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _post(
      `top-up/create`,
      {
        source_id: owner_id,
        type_of_top_up: "agent_top_up",
        query_type: "select_agent",
      },
      (resp) => {
        if (resp.success && resp.results) {
          setData(resp.results);
        }
      }
    );
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);
  const handleBackToTable = () => {
    navigate("/agenttable");
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
       
        <Col md={12} className="text-center" >
          <Col md={12}>
          <AgentVeiw  />
          <Row  className="text-left" style={{ margin: "50px" ,}}>
            
    <Col md={3}>
        from
        <Input
            type="date"
            className="form-control-sm"
        />
    </Col>
    <Col md={3}>
        to
        <Input
            type="date"
            className="form-control-sm"
        />
    </Col>
</Row>


          
            <Table striped bordered>
              {/* {JSON.stringify(data)} */}
              <thead>
                <tr className="table-dark">
                  <th scope="row">Date</th>
                  <th scope="row">Type</th>
                  <th scope="row">Description</th>
                  <th scope="row">Topup</th>
                  <th scope="row">Withdraw</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.t_date}</td>
                    <td>{item.type_of_top_up}</td>
                    <td>{item.description}</td>
                    <td className="text-right">{item.credit}</td>
                    <td className="text-right">{item.debit}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
