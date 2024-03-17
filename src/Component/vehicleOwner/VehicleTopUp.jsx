import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
<<<<<<< HEAD
import { _get } from '../../Utils/Helper';

function VendorTopUp({selectedAgentValue, selectedSuperAgentsValue}) {
    const [data, setData] = useState([])
    const [agentData, setAgentData] = useState([])
    const [selectedAgent, setSelectedAgent] = useState(selectedAgentValue)
    const [selectedSuperAgents, setSelectedSuperAgents] = useState(selectedSuperAgentsValue)
    const [loading, setLoading] = useState(false)


    const getSuperAgent = useCallback(() => {
        setLoading(true);
        _get(`superagent?query_type=select-all`, (resp) => {
            setLoading(false);
            if(resp.success && resp.result){
                const formattedData = resp.result.map((superagent) => ({
                    value: superagent.id,
                    label: superagent._name,
                }));
                setData(formattedData);
            }
        });
    }, []);

    const getAgents = useCallback(() => {
        setLoading(true);
        _get(`agents?query_type=select-all`, (resp) => {
            setLoading(false);
            if(resp.success && resp.result){
                const formattedAgentData = resp.result.map((agents) => ({
                    value: agents.id,
                    label: agents.agents_name,
                }));
                console.log(formattedAgentData)
                setAgentData(formattedAgentData);
            }
        });
    }, []);

    useEffect(() => {
        getSuperAgent();
        getAgents()
    }, [getSuperAgent])

    const handleSelectChange = (selectedOption) => {
        setSelectedAgent(selectedOption);
        handleSelectChange({target: {name: "agent", value: selectedOption.value}});
    };
    const handleSelectSuperAgentChange = (selectedOption) => {
        setSelectedSuperAgents(selectedOption);
        handleSelectSuperAgentChange({target: {name: "superagent", value: selectedOption.value}});
    };
  return (
    
    <div className="app_card dashboard_card m-0 p-0">
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >Super Agent Top-Up</span>
        <div
          style={{
            position: 'relative',
            top: '30px',
            left: '20%',
            width: '60%',
            height: '60vh',
            borderRadius: '5px',
            border: '1px solid #f5c005'
          }}
        >
          <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            }}>
            <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Vendor:</span>
            <Select 
              value={selectedAgent}
              onChange={handleSelectChange}
              options={data}
              placeholder='Search for a vendor........'
              styles={{
                borderRadius: "none !important",
                border: "1px solid #f5c005 !important",
                marginBottom: "15px",
                width: '50%',
                padding: "8px",
              }}
              isLoading={loading}
            />
          </div>
          <div
          style={{
            position: 'relative',
            left: '26.8%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Name: {selectedAgent}</span>
          </div>
          <div
          style={{
            position: 'relative',
            left: '31.5%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>ID: {selectedAgent}</span>
          </div>
       


        <div
        style={{
            position: 'relative',
            top: '30px',            
          }}
        >
           <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            }}>
            <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Agent:</span>
            <Select 
              value={selectedAgent}
              onChange={handleSelectSuperAgentChange}
              options={agentData}
              placeholder='Search for a agents...'
              styles={{
                borderRadius: "none !important",
                border: "1px solid #f5c005 !important",
                marginBottom: "15px",
                width: '60%',
                padding: "8px",
              }}
              isLoading={loading}
            />
          </div>
          <div
          style={{
            position: 'relative',
            left: '26.8%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Name: {selectedAgent}</span>
          </div>
          <div
          style={{
            position: 'relative',
            left: '31.5%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>ID: {selectedAgent}</span>
          </div>
        </div>
        <span style={{position: 'relative', top: '5rem',left: '12rem', display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Balance:</span>
        <div>
            <span
            style={{position: 'absolute', top: '37rem',left: '12rem', display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}
            >Amount</span>
            <input 
              placeholder='Enter amount here...'
              className='app_input-topUp'
            />
        </div>
        </div>
    </div>
  )
=======
import { _get } from "../../Utils/Helper";
import VehicleDropDown from "./VehicleDropDown";
import AgentDropDown from "./AgentDropDown";
import { Button, Row, Col } from "reactstrap";
import { json } from "react-router-dom";

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
 const handleChange = ({ target: { name, value } }) => {
   setForm((prevForm) => ({
     ...prevForm,
     [name]: value,
   }));
 };



  const submitTopUp = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
        <h3 className="text-center fw-bold">Vehicle Top-Up</h3>

        <div
          style={{
            margin: "0 auto",
            width: "60%",
            height: "60vh",
            borderRadius: "5px",
            border: "1px solid #f5c005",
            padding: "20px",
          }}
        >
          {JSON.stringify(form)}
          <div className="agent">
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4> Select Agent:</h4>
              <AgentDropDown
                handleChange={handleChange}
                selectedAgentValue={form.agent_id}
              />
            </div>
            <h3>Name : {form.agent_name}</h3>
            <h3>ID : {form.agent_id}</h3>
          </div>
          <div className="vehicle">
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4> vehicle</h4>
              <VehicleDropDown
                handleChange={handleChange}
                selectedVehicleValue={form.vehicle_id}
              />
            </div>
            <h3>Name : {form.Plate_no}</h3>
            <h3>ID : {form.vehicle_id}</h3>

            <div style={{ display: "flex" }}>
              <h3>Amount:</h3>
              <input
                className="app_input"
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
              marginTop: "auto",
            }}
          >
            <Button onClick={submitTopUp}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
>>>>>>> 1ffa72c9374458721c6d9cca25f050f06bfde646
}

export default VendorTopUp

