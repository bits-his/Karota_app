import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'reactstrap'
import { _get } from '../Utils/Helper'

export default function IncidentTable() {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [searchList, setSearchList] = useState('')

  const getState = () => {
    _get(
      `api/getIncident?query_type=select-all`,
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
          <h4 className="app_title"> Incident Table</h4>
        </Col>
        <Col md={6} sm={6} xs={6}>
          <button
            className="app_button"
            onClick={() => navigate('/incident-form')}
            style={{ float: 'right' }}
          >
            Add New
          </button>
        </Col>
        <input
          className="app_input2 mt-3"
          placeholder="Search Incident"
          value={searchList}
          onChange={(e) => setSearchList(e.target.value)}
        />
      </Row>
      <div></div>

      <div className="table_overflow">
        <table className="mt-5" style={{width: '100%'}}>
          <thead>
            <th>Full Name</th>
            <th>Type of Incident</th>
            <th>Description</th>
          </thead>
          {data?.map((i) => (
            <tbody>
              <td>{i.user_name}</td>
              <td>{i.type_of_incident}</td>
              <td>{i.description}</td>
            </tbody>
          ))}
        </table>
      </div>
    </Card>
  )
}