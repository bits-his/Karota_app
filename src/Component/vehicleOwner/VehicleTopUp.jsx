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
    _post(`top-up/create`,
    form,
    (res)=> {
      if(res.success){
        toast.success(`Sucessfully added ${form.amount}`)
        navigate('/vehicleownertable')
      }
    },
    err =>{
      console.log(err)
    } 
    )
    console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
      <h3 className="text-center fw-bold">Vehicle Top-Up</h3>
        <div style={{
          position: "relative",
          // display: 'flex',
          paddingLeft: '52px',
          top: "30px",
          margin: "0 auto",
          width: "75%",
          height: "45vh",
          borderRadius: "8px",
          border: "1px solid #f5c005",
          boxShadow: '1px 2px #f5c005'
        }}>
        

          {/* {JSON.stringify(form)} */}
          <div>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
                marginBottom: '20px'
              }}
            >
              <h4 style={{fontSize: '15px', fontWeight: '600', marginRight: '20px'}}> Select Agent:</h4>
              <AgentDropDown
                handleChange={handleChange}
                selectedAgentValue={form.agent_id}
              />
              </div>
              <div>
               <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>Name : <span style={{marginLeft: '57px', fontWeight: '400'}}>{form.agent_name}</span></p>
               <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>ID : <span style={{marginLeft: '80px', fontWeight: '400'}}>{form.agent_id}</span></p>
              </div>
            </div>

            <div
              style={{
                position: 'absolute',
                left: '42rem',
                top: '1rem',
                opacity: '0.3',
                border: '1px solid gray',
                height: '19rem',
                width:'1px'
              }}
              ></div>

          <div style={{
            position: 'relative',
            left: '42rem',
            top: '-13rem'
          }}>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
                marginBottom: '20px'
              }}
            >
              <h4 style={{fontSize: '15px', fontWeight: '600', marginRight: '57px'}}> Vehicle:</h4>
              <VehicleDropDown
                handleChange={handleChange}
                selectedVehicleValue={form.vehicle_id}
              />
              </div>
              <div>
                <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px'}}>Name : <span  style={{marginLeft: '54px', fontWeight: '400'}}>{form.Plate_no}</span></p>
               <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px'}}>ID :  <span  style={{marginLeft: '80px', fontWeight: '400'}}>{form.vehicle_id}</span></p>
              </div> 
            </div>


            <div style={{ display: "flex", position: 'relative', top: '-14rem'}}>
              <p style={{fontSize: '15px', fontWeight: '600', marginRight: '50px'}}>Amount:</p>
              <input
                // className="app_input"
                placeholder="Enter amount here..."
                onChange={handleChange}
                name="amount"
                value={form.amount}
                type="number"
                style={{
                  position: 'relative',
                  width: '19.4rem',
                  height: '3.8rem',
                  left: '.7px',
                  borderRadius: '5px',
                  border: '1px solid',
                  marginBottom: '20px',
                  paddingLeft: '10px'
                }}
              />
            </div>
          

          <div
            style={{
              marginTop: "auto",
            }}
          >
            <Button 
            onClick={submitTopUp}
            style={{
                position: 'relative',
                top: '-12rem',
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
    </>
  );
}

export default VehicleTopUp;

