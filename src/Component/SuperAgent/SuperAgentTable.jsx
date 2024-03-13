import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Table } from 'reactstrap'

export default function SuperAgentTable() {
  const navigate = useNavigate()

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
      <Row>
        <Col md={12}>
          <h4 className="app_title"> Super Agents </h4>
          <hr />
        </Col>
        <button
          className="app_button"
          style={{
            width: 150,
            padding: 10,
            marginLeft: 15,
            color: '#000',
            borderRadius: 7,
          }}
          onClick={() => navigate("/superagent")}
        >
          Create New +
        </button>

      </Row>
      <Table
      >
        <thead>
          <tr>
            <th style={{ width: '5%' }}>
              #
            </th>
            <th>
              Name
            </th>
            <th>
              Username
            </th>
            <th>
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ width: '10px' }} scope="row">
              1
            </th>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
            <td>
              @mdo
            </td>
          </tr>
          <tr>
            <th style={{ width: '10px' }} scope="row">
              2
            </th>
            <td>
              Jacob
            </td>
            <td>
              Thornton
            </td>
            <td>
              @fat
            </td>
          </tr>
          <tr>
            <th style={{ width: '10px' }} scope="row">
              3
            </th>
            <td>
              Larry
            </td>
            <td>
              the Bird
            </td>
            <td>
              @twitter
            </td>
          </tr>
        </tbody>
      </Table>
    </Card>
  )
}

