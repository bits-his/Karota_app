import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { _get } from '../Utils/Helper'

export default function PaymentTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [searchList, setSearchList] = useState('')

  const getState = () => {
    _get(
      `api/getpayment?query_type=select`,
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

  return (
    <Card className="app_card dashboard_card shadow p-3 mt-2">
      <Row className="m-0">
        <Col md={6} sm={6} xs={6}>
          <h4 className="app_title"> Payment Table</h4>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <button
            className="app_button"
            onClick={() => navigate('/payment-form')}
            style={{ float: 'right' }}
          >
            Make Payment
          </button>
        </Col>
        <input
          className="app_input2 mt-3"
          placeholder="Search Payment"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />
      </Row>
      <div></div>

      <div className="table_overflow">
        <table className="mt-5" style={{width: '100%'}}>
          <thead>
            <th>Unique Number</th>
            <th>Amount</th>
            <th>Card Number</th>
            <th>CVV Number</th>
            <th>Card Expiring Date</th>
          </thead>
          {data?.map((i) => (
            <tbody>
              <td>{i.vehicle_id}</td>
              <td>{i.amount}</td>
              <td>{i.card_number}</td>
              <td>{i.cvv}</td>
              <td>{i.expiry_date}</td>
            </tbody>
          ))}
        </table>
      </div>
    </Card>
  )
}