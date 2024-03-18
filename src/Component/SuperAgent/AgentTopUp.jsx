import React, { useState, useCallback, useEffect } from "react";
import { _get } from "../../Utils/Helper";
import { Button } from "reactstrap";
import SuperDropdown from "./SuperDropdown";
import AgentDropDown from "../vehicleOwner/AgentDropDown";

function SuperAgentTopUp() {
  const [form, setForm] = useState({});
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
        <h3 className="text-center fw-bold">Agent Top-Up</h3>

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
          {/* {JSON.stringify(form)} */}

          <div className="vehicle">
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4> Select SuperAgent</h4>
              <SuperDropdown
                handleChange={handleChange}
                selectedSuperValue={form.super_id}
              />
            </div>
            <h3>Name : {form.name}</h3>
            <h3>ID : {form.id}</h3>
          </div>
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

export default SuperAgentTopUp;
