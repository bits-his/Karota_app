import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Table } from "reactstrap";
import { useSelector } from "react-redux";
import { _get, _post } from "../../../Utils/Helper";
import keke from "../../../assets/keke_napep.png";

export default function SuperAgentHistory() {
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
        type_of_top_up: "super_agent_top_up",
        query_type: "select_super_agent",
      },
      (resp) => {
       // console.log(resp, "gsgsggsg");
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
    navigate("/superagenttable");
  };
  return (
    <Card>
      <Row>
        <Col md={12}>
          <Col md={12}>
            <Table striped bordered>
              {/* {JSON.stringify(data)} */}
              <thead>
                <tr className="table-dark">
                  <th>Date</th>
                  <th>Type</th>
                  <th>Description</th>
                  <th>Topup</th>
                  <th>Withdraw</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item && item.t_date}</td>
                      <td>{item && item.type_of_top_up}</td>
                      <td>{item && item.description}</td>
                      <td>{item && item.credit}</td>
                      <td>{item && item.debit}</td>
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
