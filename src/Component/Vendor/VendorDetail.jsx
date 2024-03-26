import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Card, Row, Col, Button } from "reactstrap";
import keke from "../../assets/keke_napep.png";
import { _get, _post } from "../../Utils/Helper";

export default function VendorDetail() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState([]);
  const params = useParams();
  const owner_id = params.id;
  const getReg = useCallback(() => {
    _post(
      `top-up/create`,
      {
        destination_id: owner_id,
        type_of_top_up: "vendor_top_up",
        query_type: "select_destination",
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
    navigate("/vendorReg");
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
                width: 100,
                padding: 10,
                color: "#fff",
                borderRadius: 10,
              }}
              onClick={handleBackToTable}
            >
              Back
            </Button>

            <h4 className="app_title">Account Detail</h4>

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
          <section style={{ marginBottom: "2rem" }}>
            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", marginBottom: "20px" }}>
                <p>Vendor's name: </p>
                <span>{data.vendor_name}</span>
              </div>
              <div style={{ width: "50%" }}>
                <p>Phone no.: </p>
                <span>{data.vendor_org_phone}</span>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <p>Address: </p>
                <span>{data.vendor_ofiice_address}</span>
              </div>
              <div style={{ width: "50%" }}>
                <p>E-mail: </p>
                <span>{data.vendor_org_email}</span>
              </div>
            </div>
          </section>

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
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.t_date}</td>
                  <td>{item.type_of_top_up}</td>
                  <td>{item.description}</td>
                  <td>{item.credit}</td>
                  <td>{item.balance}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
