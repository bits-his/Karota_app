import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import QRCode from 'qrcode.react'
import { _get } from '../Utils/Helper'

export default function RegistrationTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [searchList, setSearchList] = useState('')

  const getState = () => {
    _get(
      `api/getCreate_user?query_type=select-all`,
      (res) => {
        setData(res.results)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  useEffect(() => {
    getState()
  }, [])

  const search = []
  data &&
    data.forEach((item) => {
      if (
        item.phone_no.toLowerCase().indexOf(searchList.toLowerCase()) === -1 &&
        item.classes_number.toLowerCase().indexOf(searchList.toLowerCase()) ===
          -1 &&
        item.name.toLowerCase().indexOf(searchList.toLowerCase()) === -1 &&
        item.plate_number.toLowerCase().indexOf(searchList.toLowerCase()) === -1
      ) {
        return
      } else search.push(item)
    })

  return (
    <Card className="app_card dashboard_card shadow p-3 mt-2">
      <Row className="m-0">
        <Col md={6} sm={6} xs={6}>
          <h4 className="app_title"> Registered Rides</h4>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <button
            className="app_button"
            onClick={() => navigate('/registration-form')}
            style={{ float: 'right' }}
          >
            Register New
          </button>
        </Col>
        <input
          className="app_input2 mt-3"
          placeholder="Search Ride"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />
      </Row>
      <div></div>

      <div className="table_overflow">
        <table className="mt-5">
          <thead>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Surename</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Nationality</th>
            <th>State Of Origin</th>
            <th>Local Goverment</th>
            <th>Date Of Birth</th>
            <th>Place Of Birth</th>
            <th>Phone Number</th>
            <th>Blood Group</th>
            <th>Geno Type</th>
            <th>Address</th>
            <th>NIN Number</th>
            <th>Next Of Kin</th>
            <th>Next Of Kin Address</th>
            <th>Next Of Kin Phone Number</th>
            <th>Plate Number</th>
            <th>Classes Number</th>
            <th>Side Number</th>
            <th>Phone Number</th>
            <th>Name Of Company or Individual</th>
            <th>QR Code</th>
          </thead>
          {search?.map((i) => (
            <tbody>
              <td>{i.name}</td>
              <td>{i.middle_name}</td>
              <td>{i.surname}</td>
              <td>{i.gender}</td>
              <td>{i.status}</td>
              <td>{i.nationality}</td>
              <td>{i.state_of_origin}</td>
              <td>{i.lg}</td>
              <td>{i.date_of_birth}</td>
              <td>{i.place_of_birth}</td>
              <td>{i.phone_no}</td>
              <td>{i.blood_group}</td>
              <td>{i.genotype}</td>
              <td>{i.address}</td>
              <td>{i.NIN_number}</td>
              <td>{i.next_of_kin}</td>
              <td>{i.next_of_kin_address}</td>
              <td>{i.phone_no2}</td>
              <td>{i.plate_number}</td>
              <td>{i.classes_number}</td>
              <td>{i.side_number}</td>
              <td>{i.phone_no3}</td>
              <td>{i.name_of_company}</td>
              <td>
                <QRCode value={i.qrcode} renderAs="canvas" />
              </td>
            </tbody>
          ))}
        </table>
      </div>
    </Card>
  )
}
