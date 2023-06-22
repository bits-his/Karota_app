import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'reactstrap'
import { _get } from '../Utils/Helper'
import { useNavigate } from 'react-router-dom'
import { MdOutlineArrowBackIos } from 'react-icons/md'
import { RiUser4Line } from 'react-icons/ri'

export default function Payment() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    vehicle_id: '',
  })
  const [data, setData] =useState([])

  const handleChange = ({ target: { name, value } }) => {
    setForm((p) => ({ ...p, [name]: value }))
    console.log(form)
  }

   const handleSubmit = () => {
    // alert('click')
    _get(
      `api/getCreate_user?query_type=select-one&vehicle_id=${form.vehicle_id}`,
      (res) => {
        // alert('sucessful');
        setData([res.results[0]])
      },
      (err) => {
        setLoading(false)
        console.log(err)
      },
    )
  }
  
  useEffect(() => {
    // getState()
  }, [])

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
            <h5 className="m-0">Initiating Payment</h5>
          </Col>
        </Row>
        <div className="p-0 m-0 mt-3">
          <label>Rider Unique ID</label>
          <div className="d-flex align-items-center" style={{ width: '100%' }}>
            <input
              id="exampleSelect"
              className="app_input"
              value={form.vehicle_id}
              name="vehicle_id"
              onChange={handleChange}
              style={{ width: '100%', marginRight: 10 }}
            />
            <button 
                className="app_button"
                onClick={()=>handleSubmit()}
            >GO</button>
          </div>
        </div>
        <Row>
          <Col md={12} className="d-flex align-items-center mt-4">
            <RiUser4Line
              className="back_icon"
              onClick={() => navigate('/registration')}
              size="2.5rem"
              style={{ marginRight: 15 }}
            />
            <h5 className="m-0">Rider Details</h5>
          </Col>
        </Row>
        <div className="user_data_div mt-3">
            {data?.map((idx) => (
            <>
                <p className="user_data_l">
                    Full Name: <span className="user_data_s">{idx.name} {idx.middle_name} {idx.surname}</span>
                </p>
                <p className="user_data_l">
                    Plate Number: <span className="user_data_s">{idx.plate_number}</span>
                </p>
                <p className="user_data_l">
                    Chassis Number: <span className="user_data_s">{idx.classes_number}</span>
                </p>
                <p className="user_data_l">
                    NIN: <span className="user_data_s">{idx.NIN_number}</span>
                </p>
            </>
                ))
            }
        </div>
        <div>
          <button
            className="app_button mt-3"
            onClick={() => {navigate(`/make-payment?vehicle_id=${form.vehicle_id}`)}}
          >
            Make Payment
          </button>
        </div>
      </Card>
    </div>
  )
}
