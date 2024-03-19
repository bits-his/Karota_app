import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, Col, Row, Button, Table, Badge } from 'reactstrap';
import { useSelector } from 'react-redux';
import { _get, _post } from '../../Utils/Helper';
import keke from '../../assets/keke_napep.png'

export default function VehicleOwnerView() {
    const navigate = useNavigate();
    const { user } = useSelector(s => s.auth)
    const [data, setData] = useState({})
    const [vehicles, setVehicles] = useState([])
    const params = useParams()
    const owner_id = params.id
    const getReg = useCallback(() => {
        _get(`vehicle-owners?query_type=select&user_id=${owner_id}`,
            (resp) => {
                if (resp.success && resp.data) {
                    setData(resp.data[0]);
                }
            });

        _get(`vehicles?query_type=select&owner_id=${owner_id}`,
            (resp) => {
                if (resp.success && resp.data) {
                    setVehicles(resp.data);
                }
            });
    }, [owner_id]);

    useEffect(() => {
        getReg();
    }, [getReg]);


    const handleBackToTable = () => {
        navigate('/Vehicleownertable')
    };

    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <Row>
                <Col md={12}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        {/* Back Button */}

                        <Button
                            className="app_button"
                            style={{ width: 150, padding: 10, marginLeft: 15, color: '#000', borderRadius: 10 }}
                            onClick={handleBackToTable}
                        >
                            Back
                        </Button>

                        {/* Title */}
                        <h4 className="app_title">{data.name}</h4>

                        {/* User DP */}
                        <img src={keke} alt="User DP" style={{ width: 40, height: 40, borderRadius: '50%', marginRight: 10 }} />

                    </div>
                    <hr />
                </Col>
                <Col md={12}>
                    <Col md={12}>
                        <Table striped>
                            <tbody>
                                <tr>
                                    <th>Owner's Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{data.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{data.address}</td>
                                </tr>
                                <tr>
                                    <th>Owner's Email</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{data.state}</td>
                                </tr>
                                <tr>
                                    <th>NIN</th>
                                    <td>{data.nin}</td>
                                </tr>
                                <tr>
                                    <th>Local Government Area</th>
                                    <td>{data.lga}</td>
                                </tr>
                                <tr>
                                    <th>Registered Vehicles</th>
                                    <td className='text-center'><Badge color='primary'>{vehicles.length}</Badge> {" "} <Button
                                        className="btn btn-primary"
                                        onClick={() => navigate(`/vehicleregistration/${owner_id}`)}
                                    > Add +</Button></td>

                                </tr>
                            </tbody>
                        </Table>

                    </Col>
                </Col>
            </Row>

        </Card >
    );
}
