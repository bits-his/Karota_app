import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
import { _get, _post } from "../../Utils/Helper";
import VehicleDropDown from "./VehicleDropDown";
import AgentDropDown from "./AgentDropDown";
import { Button, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import './vehicletopup.css'


function VehicleTopUp({ selectedAgentValue, selectedVehicleValue }) {
  const [data, setData] = useState([]);
  const [agentData, setAgentData] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(selectedAgentValue);
  const [selectedVehicle, setSelectedVehicle] = useState(selectedVehicleValue);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    // agent_id: "",
    // agent_name: "",
    // agent_balance: "",
    // vehicle_id: "",
    // plate_no: "",
    // chasis_no: "",
    // amount: "",
  });
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };



  const submitTopUp = (e) => {
    e.preventDefault();
    setLoading(true)
    _post(`top-up/create`,
      form,
      (res) => {
        if (res.success) {
          toast.success(`Sucessfully added ${form.amount}`)
          navigate('/vehicleownertable')
        }
      },
      err => {
        console.log(err)
        setLoading(false)
      }
    )
    //setLoading(false)
    //console.log(form);
  };

  return (<>
    <div className="app_card dashboard_card m-0 p-0">
      <div className='middle-card-topup' style={{ margin: "auto" }}>
        <h3 className="text-center fw-bold ve-t-u" >Vehicle Top-Up</h3>

        {/* {JSON.stringify(form)} */}
        <div className="agent app_card " style={{ padding: "50px" }}>
          <div className='account-info row'>
            <div className='info-input col-md-6'>
              <h4 style={{ marginRight: '20px' }}> Select Agent:</h4>
              <AgentDropDown
                handleChange={handleChange}
                selectedAgentValue={form.agent_id}
              />
            </div>

            <div className='info-input col-md-6' >
              <h4 style={{ marginRight: '57px' }}> Vehicle:</h4>
              <VehicleDropDown
                handleChange={handleChange}
                selectedVehicleValue={form.vehicle_id}
              />
            </div>
            <div className='info-input col-md-6 mx-auto mb-5'>
              <h4>Amount:</h4>
              <input
                className="form-control"
                placeholder="Enter amount here..."
                onChange={handleChange}
                name="amount"
                value={form.amount}
                type="number"

              />
            </div>
          </div>

          <div
            style={{
              marginTop: "50px",
            }}
          >
            <Button
              onClick={submitTopUp}
              disabled={loading}
              style={{
                marginInline: 'auto',
                display: 'block',
                height: '40px',
                backgroundColor: '#f5c005',
                left: '23rem',
                width: '28rem',
                boxShadow: '1px 2px gray'
              }}
            >Submit</Button>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default VehicleTopUp;

