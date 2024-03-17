import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
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
}

export default VehicleTopUp;
