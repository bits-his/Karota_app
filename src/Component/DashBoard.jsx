import React, { useState } from 'react'
import { Card, Col } from 'reactstrap'
import { BsHospital } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'
import { GiReceiveMoney } from 'react-icons/gi'
import Table1 from './DashboardTable/Table1'
import Table2 from './DashboardTable/Table2'
import Table3 from './DashboardTable/Table3'

export default function Dashboard() {
  const [step, setStep] = useState(0)

  return (
    <Card className="app_card dashboard_card shadow p-4 m-2 mt-2">
        <Col md={12}>
            <h4 className="app_title"> Programms DashBoard </h4>
            <hr style={{border: "1px solid #198a3c"}}/>
        </Col>
        <Col md={12} style={{marginBottom: 20, display: 'flex'}}>
          <Col md={4}>
            <div className='tittle_dash' onClick={() => {setStep(1)}}>
              <div>
                <p className='para_tittle_dash'>Total No. of Register Vehicle</p>
                <p className='number'>231</p>
              </div>
              <IoIosPeople className='icon_dash' style={step === 1 ?{backgroundColor: '#f5c005'}: {backgroundColor: '#b99205'}}/>
            </div>
          </Col>
          <Col md={4}>
            <div className='tittle_dash' onClick={() => {setStep(2)}}>
              <div>
                <p className='para_tittle_dash'>Total Incidence Report </p>
                <p className='number'>231</p>
              </div>
              <GiReceiveMoney className='icon_dash' style={step === 2 ?{backgroundColor: '#f5c005'}: {backgroundColor: '#b99205'}}/>
            </div>
          </Col>
          <Col md={4}>
            <div className='tittle_dash' onClick={() => {setStep(3)}}>
              <div>
                <p className='para_tittle_dash'>Total Daily Revenue</p>
                <p className='number'>₦231</p>
              </div>
              <BsHospital className='icon_dash' style={step === 3 ?{backgroundColor: '#f5c005'}: {backgroundColor: '#b99205'}}/>
            </div>
          </Col>
        </Col>
        
        {step === 1 ?
          <div className="card-content">
            <Table1 />
          </div> : '' 
        }

        {step === 2 ?
          <div className="card-content">
            <Table2 />
          </div> : '' 
        }

        {step === 3 ?
          <div className="card-content">
            <Table3 />
          </div> : '' 
        }

    </Card>
  )
}