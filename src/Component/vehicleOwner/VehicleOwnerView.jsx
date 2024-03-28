import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Col, Row, Button, Table, Badge } from "reactstrap";
import { useSelector } from "react-redux";
import { _get, _post, separator } from "../../Utils/Helper";
import keke from "../../assets/keke_napep.png";
import { Filter } from "@mui/icons-material";

export default function VehicleOwnerView() {
  const navigate = useNavigate();
  const { user } = useSelector((s) => s.auth);
  const [data, setData] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const params = useParams();
  const owner_id = params.id;
  // console.log(owner_id)
  const getReg = useCallback(() => {
    _get(`vehicle-owners?query_type=select-all&user_id=${owner_id}`, (resp) => {
      // console.log(resp)
      if (resp.success && resp.data) {
        const ownerDetail = resp.data.find((item) => item.id == owner_id)
        console.log(ownerDetail)
        setData(ownerDetail);
      }
    });

    _get(`vehicles?query_type=select&owner_id=${owner_id}`, (resp) => {
      // console.log(resp)
      if (resp.success && resp.data) {
        setVehicles(resp.data);
      }
    });
//////////////////API to get only transaction history
    _post(
      `top-up/create`,
      {
        source_id: owner_id,
        type_of_top_up: "vehicle_top_up",
        query_type: "select_destination",
      },
      (res) => {
        console.log(res, "see me")
        if(res.success && res.results){
          console.log(res)
        }
      }
    )
    // _get(`top-up/create/?query_type=vehicle&vehicle_id=${owner_id}`, (res) => {
    //   console.log(res)
    //   setVendorDetail(res.data[0])
    // })
  }, [owner_id]);

  useEffect(() => {
    getReg();
  }, [getReg]);

  const handleBackToTable = () => {
    navigate("/Vehicleownertable");
  };
 
  console.log(data)
  // const vehicledata = data.map((item) => {
  //   item.filter((itemId) => itemId === item.id)
  // })


// console.log(vehicledata)



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
            {/* Back Button */}

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

            {/* Title */}
            <h4 className="app_title">{data.name}</h4>

            {/* User DP */}
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
            
          <div className="vehicleview">
                <div style={{display: "flex"}}>
                  <span style={{fontWeight: '600', marginRight: '20px'}}>Owner's Name:</span>
                  <p>{data.name}</p>
                </div>
                <div style={{display: "flex"}}>
                  <span style={{fontWeight: '600', marginRight: '20px'}}>Phone Number</span>
                  <p>{data.phone}</p>
                </div>
                <div style={{display: "flex"}}>
                  <span style={{fontWeight: '600', marginRight: '20px'}}>Address</span>
                  <p>{data.address}</p>
                </div>
                {/* <div style={{display: "flex"}}>
                  <span style={{fontWeight: '600', marginRight: '20px'}}>Registered Vehicle</span>
                  <p>245678rty</p>
                </div> */}
                <div style={{display: "flex"}}>
                  <span style={{fontWeight: '600', marginRight: '20px'}}>Local Government Area</span>
                  <p>{data.lga}</p>
                </div>
                <div  style={{display: "flex"}}>
                <span  style={{fontWeight: '600', marginRight: '20px'}}>Number of vehicle</span>
                <p>{vehicles.length}</p>
                </div>
              </div>
              <div>
              {/* <Badge color="primary">{vehicles.length}</Badge>{" "} */}
                    <Button
                      className="btn btn-primary"
                      onClick={() =>
                        navigate(`/vehicleregistration/${owner_id}`)
                      }
                    >
                      {" "}
                      Add +
                    </Button>
              </div>
              
            <Table striped>
              {/* <tbody>
              <tr>
                  <th width="15%">Owner's Name</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Owner's Email</th>
                  <th>State</th>
                  <th>NIN</th>
                  <th>Local Government Area</th>
                  <th>Registered Vehicles</th>
                </tr>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.address}</td>
                  <td>{data.email}</td>
                  <td>{data.state}</td>
                  <td>{data.nin}</td>
                  <td>{data.lga}</td>
                  <td className="text-center">
                    <Badge color="primary">{vehicles.length}</Badge>{" "}
                    <Button
                      className="btn btn-primary"
                      onClick={() =>
                        navigate(`/vehicleregistration/${owner_id}`)
                      }
                    >
                      {" "}
                      Add +
                    </Button>
                  </td>
                 </tr>
              </tbody> */}
              <div style={{marginBottom: '20px', marginTop: '15px', fontSize: '15px', fontWeight: '600'}}>Transaction History</div>
              <tbody>
            <tr>
                <th width="20%">Date</th>
                <th width="20%">Type</th>
                <th width="20%">Description</th>
                <th width="20%">Topup</th>
                <th width="20%">Withdraw</th>
              </tr>
              <tr>
                <td>{vehicles.t_date}</td>
                <td>{vehicles.type}</td>
                <td>{vehicles.description}</td>
                <td>{vehicles.debit === NaN ? 0 : separator(vehicles.debit)}</td>
                <td>{vehicles.credit === NaN ? 0 : separator(vehicles.credit)}</td>
              </tr>
            </tbody>
            </Table>
          </Col>
        </Col>
      </Row>
    </Card>
  );
}
