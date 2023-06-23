import React, { useCallback, useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import InputForm from './Component/InputForm'
import { _post } from '../Utils/Helper'
import QRCode from 'qrcode.react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
// import './style.css'

export default function Registration() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    middle_name: '',
    surname: '',
    gender: '',
    status: '',
    nationality: 'Nigeria',
    state_of_origin: '',
    lg: '',
    date_of_birth: '',
    place_of_birth: '',
    phone_no: '',
    blood_group: '',
    genotype: '',
    address: '',
    NIN_number: '',
    next_of_king: '',
    next_of_king_address: '',
    phone_no2: '',
    plate_number: '',
    classes_number: '',
    side_number: '',
    phone_no3: '',
    name_of_company: '',
  })

  const qrCodeGenerator = `${form.name},${form.middle_name},${form.surname},${form.plate_number}`
  const [Loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [data1, setData1] = useState([])

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

  const handleSubmit = () => {
    setLoading(true)
    let obj = { ...form, qrcode: qrCodeGenerator }
    _post(
      'api/create_users',
      obj,
      (res) => {
        setLoading(false)
        alert('sucessful')
        console.log(form)
        setForm({
          name: '',
          middle_name: '',
          surname: '',
          gender: '',
          status: '',
          nationality: '',
          state_of_origin: '',
          lg: '',
          date_of_birth: '',
          place_of_birth: '',
          phone_no: '',
          blood_group: '',
          genotype: '',
          address: '',
          NIN_number: '',
          next_of_king: '',
          next_of_king_address: '',
          phone_no2: '',
          plate_number: '',
          classes_number: '',
          side_number: '',
          phone_no3: '',
          name_of_company: '',
        })
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  const getState = () => {
    _post(
      `api/state_and_local_gvt?query_type=select-state`,
      {},
      (res) => {
        setData(res.results)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }

  const getLocalGoverment = useCallback(() => {
    const state = form.state_of_origin
    _post(
      `api/state_and_local_gvt?query_type=select-lg`,
      { state },
      (res) => {
        setData1(res.results)
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }, [form.state_of_origin])

  useEffect(() => {
    getState()
    if (form.state_of_origin !== '') {
      getLocalGoverment()
    }
  }, [getLocalGoverment])

  return (
    <div>
      <Card className="app_card shadow dashboard_card m-0 p-3 mt-2">
        <Row>
          <Col md={12} className="d-flex align-items-center">
            <MdOutlineArrowBackIos
              className="back_icon"
              onClick={() => navigate('/registration')}
              size="2.5rem"
              style={{ marginRight: 15 }}
            />
            <h5 className="m-0">Register new ride</h5>
          </Col>
        </Row>
        <Row className="p-0 mt-3">
          <Col md={4}>
            <label>First Name</label>
            <InputForm
              id="exampleSelect"
              //   label="First Name"
              className="app_input"
              value={form.name}
              name="name"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Middle Name</label>
            <InputForm
              id="exampleSelect"
              //   label="Middle Name"
              className="app_input"
              value={form.middle_name}
              name="middle_name"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Surname</label>
            <InputForm
              id="exampleSelect"
              //   label="Surename"
              className="app_input"
              value={form.surname}
              name="surname"
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <label className="Label mt-2">Gender</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.gender}
              name="gender"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </Col>
          <Col md={4}>
            <label>Status</label>
            <InputForm
              id="exampleSelect"
              //   label="Status"
              className="app_input"
              value={form.status}
              name="status"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Nationality</label>
            <InputForm
              id="exampleSelect"
              //   label="Nationality"
              className="app_input"
              value={form.nationality}
              name="nationality"
              onChange={handleChange}
              disabled
            />
          </Col>

          <Col md={4}>
            <label className="Label mt-2">State Of Origin</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.state_of_origin}
              name="state_of_origin"
              onChange={handleChange}
            >
              <option>Select</option>
              {/* {data.map((i) => (
                <option value={i.state}>{i.state}</option>
              ))} */}
            </select>
          </Col>
          <Col md={4}>
            <label className="Label mt-2">Local Government</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.lg}
              name="lg"
              onChange={handleChange}
            >
              <option>Select</option>
              {data1?.map((i) => (
                <option value={i.local_gvt}>{i.local_gvt}</option>
              ))}
            </select>
          </Col>
          <Col md={4}>
            <label>DOB</label>
            <InputForm
              id="exampleSelect"
              //   label="Date Of Birth"
              className="app_input"
              value={form.date_of_birth}
              name="date_of_birth"
              type="Date"
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <label>Place of Birthday</label>
            <InputForm
              id="exampleSelect"
              //   label="Place Of Birth"
              className="app_input"
              value={form.place_of_birth}
              name="place_of_birth"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Phone Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Phone Number"
              className="app_input"
              value={form.phone_no}
              name="phone_no"
              type="Number"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label className="Label mt-2">Blood Group</label>
            <select
              id="exampleSelect"
              className="app_input"
              value={form.blood_group}
              name="blood_group"
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </Col>

          <Col md={4}>
            <label>Genotype</label>
            <InputForm
              id="exampleSelect"
              //   label="Geno Type"
              className="app_input"
              value={form.genotype}
              name="genotype"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Address</label>
            <InputForm
              id="exampleSelect"
              //   label="Address"
              className="app_input"
              value={form.address}
              name="address"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>NIN</label>
            <InputForm
              id="exampleSelect"
              //   label="NIN Number"
              className="app_input"
              value={form.NIN_number}
              name="NIN_number"
              type="Number"
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <label>Next of Kin</label>
            <InputForm
              id="exampleSelect"
              //   label="Next Of Kin"
              className="app_input"
              value={form.next_of_king}
              name="next_of_king"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Next of Kin Address</label>
            <InputForm
              id="exampleSelect"
              //   label="Next Of Kin Address"
              className="app_input"
              value={form.next_of_king_address}
              name="next_of_king_address"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Next of Kin Phone Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Next Of Kin Phone Number"
              className="app_input"
              value={form.phone_no2}
              name="phone_no2"
              type="Number"
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <label>Plate Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Plate Number"
              className="app_input"
              value={form.plate_number}
              name="plate_number"
              onChange={handleChange}
            />
          </Col>
          <Col md={4}>
            <label>Chassis Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Classes Number"
              className="app_input"
              value={form.classes_number}
              name="classes_number"
              onChange={handleChange}
              type="number"
            />
          </Col>
          <Col md={4}>
            <label>Side Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Side Number"
              className="app_input"
              value={form.side_number}
              name="side_number"
              type="Number"
              onChange={handleChange}
            />
          </Col>

          <Col md={4}>
            <label>Phone Number</label>
            <InputForm
              id="exampleSelect"
              //   label="Phone Number"
              className="app_input"
              value={form.phone_no3}
              name="phone_no3"
              onChange={handleChange}
              type="number"
            />
          </Col>
          <Col md={4}>
            <label>Name Of Company or Individual</label>
            <InputForm
              id="exampleSelect"
              //   label="Name Of Company or Individual"
              className="app_input"
              value={form.name_of_company}
              name="name_of_company"
              onChange={handleChange}
            />
          </Col>
        </Row>
        <div>
          <button className="app_button mt-3" onClick={() => {
            handleSubmit();
            navigate('/registration')
          }}>
            Submit
          </button>
        </div>
      </Card>
    </div>
  )
}

// import React, { useState } from "react";
// import "./App.css";
// import InputForm2 from "./Component/InputForm2";

// export default function App() {

//   return (
//     <div>
//         label="PlaceHolder"
//       />
//     </div>
//   );
// }
