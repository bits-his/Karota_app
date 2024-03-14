import React, { useCallback, useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row, Table } from 'reactstrap'
import { _get } from '../../Utils/Helper';

function VendorReg() {
    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState('');
    const getReg = useCallback(() => {
        _get(`vendors?query_type=select-all&plate_no=${filter}`,
            (resp) => {
                if (resp.success && resp.results) {
                    setData(resp.results);
                }
            });
    }, [filter]);

    useEffect(() => {
        getReg();
    }, [getReg]);
    return (
        <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
            <Row>
                <Col md={10}>
                    <h4 className="app_title"> Registered Vendors </h4>

                </Col>
                <Col>
                    <button
                        className="app_button"
                        style={{
                            position: 'relative',
                            left: 34,
                            width: 150,
                            padding: 10,
                            marginLeft: 15,
                            color: '#000'
                        }}
                        onClick={() => navigate("/vendor")}
                    >
                        Add vendor +
                    </button></Col>

            </Row>
            <hr style={{ position: 'relative', width: '100%', top: "25px" }} />
            <Table
                bordered
                responsive
                style={{ position: 'relative', top: '20px', width: '100%', marginTop: '4px' }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Vendor Name</th>
                        <th>Phone Number</th>
                        <th>Vendor email</th>
                        <th>Office Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((vendor, idx) => <tr key={idx}>
                        <th scope="row">{idx + 1}</th>
                        <td>{vendor.vendor_name}</td>
                        <td>{vendor.vendor_org_phone}</td>
                        <td>{vendor.vendor_org_email}</td>
                        <td>{vendor.vendor_ofiice_address}</td>
                        <td className="text-center">
                            <Button color="info">View</Button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </Card>
    )
}

export default VendorReg
