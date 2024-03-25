import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Card, Col, Input, Label, Table } from 'reactstrap'
import useQuery, { _get } from '../../Utils/Helper'

function VendorDetail() {
  const [vendorDetail, setVendorDetail] = useState([])
  const navigate = useNavigate();
  const location = useLocation()
  const query = useQuery()
  const vendor = location.state
 console.log(vendor)

 const getReg = useCallback(() => {
  _get(`fetch/trans_history/?query_type=vendor&vendor_id=${vendor.id}`, (res) => {
    setVendorDetail(res.data[0])
  })
 }, [vendor.id])



 useEffect(() => {
  getReg();
 }, [getReg])

 console.log(vendorDetail)
  return (
    <div>
      <Col md={12}>
        <Card className='container shadow app_card mt-5'
          style={{ marginTop: '20px',paddingTop:'20px' }}>
            <button
            className="app_button"
            style={{
              // float: 'right',
              width: 150,
              padding: 10,
              margin: 15,
              color: "#000",
              borderRadius: 7,
            }}
            onClick={() => navigate('/vendorReg')}
          >
            Back
          </button>
            <button
            className="app_button"
            style={{
              float: 'right',
              width: 180,
              padding: 10,
              margin: 15,
              color: "#000",
              borderRadius: 7,
            }}
            onClick={() => navigate(`/vendorReg/view/${vendor.id}`)}
          >
            View Vendor Detail
          </button>
          <Table 
            striped
          >
            <tbody>
              <tr>
                <th width="20%">Date</th>
                <th width="20%">Description</th>
                <th width="20%">Dr</th>
                <th width="20%">Cr</th>
              </tr>
              <tr>
                <td>{vendorDetail.t_date}</td>
                <td>{vendorDetail.description}</td>
                <td>{vendorDetail.debit}</td>
                <td>{vendorDetail.credit}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
      </Col>
    </div>
  )
}

export default VendorDetail
