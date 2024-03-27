import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Table, Card, Row, Col, Button } from "reactstrap";
import keke from "../../assets/keke_napep.png";
import { _get, _post, separator } from "../../Utils/Helper";

export default function VendorDetail() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({})
  const params = useParams();
  const owner_id = params.id;

<<<<<<< HEAD
  const getData = useCallback(() => {
    _get(`vendors?query_type=select-all&id=${owner_id}`, (resp) => {
      if (resp.success && resp.results) {
        setDetails(resp.results[0]);
      }
    });
  }, [owner_id]);
=======
 const getReg = useCallback(() => {
  _get(`fetch/trans_history/?query_type=vendor&vendor_id=${vendor.id}`, (res) => {
    console.log(res.data)
    setVendorDetail(res.data[0])
  })
 }, [vendor.id])
>>>>>>> 9a224b714674aef47b9650052635a760a287d35e

  useEffect(() => {
    getData();
  }, [getData]);

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
              <div style={{ width: "50%", marginBottom: "20px", display: "flex" }}>
                <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>Vendor's name: </p>
                <span>{details.vendor_name}</span>
              </div>
              <div style={{ width: "50%", display: "flex" }}>
                <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>Phone no.: </p>
                <span>{details.vendor_org_phone}</span>
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ width: "50%", display: "flex" }}>
                <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>Address: </p>
                <span>{details.vendor_ofiice_address}</span>
              </div>
              <div style={{ width: "50%", display: "flex" }}>
                <p style={{ marginRight: 10, fontSize: 16, fontWeight: "bold" }}>E-mail: </p>
                <span>{details.vendor_org_email}</span>
              </div>
            </div>
          </section>

          <Table striped bordered>
            <thead>
              <tr className="table-dark">
                <th scope="row" className="text-center">Date</th>
                <th scope="row" className="text-center">Type</th>
                <th scope="row" className="text-center">Description</th>
                <th scope="row" className="text-center">Amount</th>
                <th scope="row" className="text-center">Balance</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.t_date}</td>
                  <td>{item.type_of_top_up}</td>
                  <td>{item.description}</td>
                  <td className="text-right">{separator(item.credit)}</td>
                  <td className="text-right">{item.balance ? (separator(item.balance)):(0)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Card>
  );
}
