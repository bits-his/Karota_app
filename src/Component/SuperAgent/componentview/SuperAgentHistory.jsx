import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Table } from "reactstrap";
import { useSelector } from "react-redux";
import { _get, _post, separator } from "../../../Utils/Helper";
import keke from "../../../assets/keke_napep.png";

export default function SuperAgentHistory() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState([]);
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _post(
      `top-up/history`,
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
          <Table striped bordered>
            {/* {JSON.stringify(data)} */}
            <thead>
              <tr className="table-dark">
                <th className="text-center">Date</th>
                <th className="text-center">Type</th>
                <th className="text-center">Description</th>
                <th className="text-center">Topup</th>
                <th className="text-center">balance</th>
                <th className="text-center">Withdraw</th>
              </tr>
            </thead>
            <tbody>
              {data && data.length > 0 ? (
                data.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.t_date}</td>
                    <td>{item.type_of_top_up}</td>
                    <td>{item.description}</td>
                    <td>{item.balance}</td>
                    <td className="text-right">{separator(item.credit)}</td>
                    <td className="text-right">{separator(item.debit)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center">
                    No transactions have been made.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
