import React, { useState, useCallback, useEffect } from "react";
import { _get } from "../../Utils/Helper";
import { Button } from "reactstrap";
import SuperDropdown from "./SuperDropdown";
import AgentDropDown from "../vehicleOwner/AgentDropDown";

function AgentTopUp() {
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
            width: "70%",
            height: "47vh",
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
              <h4 style={{
                fontSize: '15px', 
                fontWeight: '600',
                marginRight: '2rem'
              }}>SuperAgent</h4>
              <SuperDropdown handleChange={handleChange}
              selectedSuperValue={form.superagent_id}
              />
            </div>
            <h3 style={{
                fontSize: '15px', 
                fontWeight: '600',
              }}>Name : {form.superagent_id}</h3>
            <h3 style={{
                fontSize: '15px', 
                fontWeight: '600',
              }}>ID : {form.superagent_name}</h3>
          </div>

          <div
              style={{
                position: 'absolute',
                left: '60rem',
                top: '14rem',
                opacity: '0.3',
                border: '1px solid gray',
                height: '20rem',
                width:'1px'
              }}
              ></div>


          <div style={{
            position: 'relative',
            left: '40rem',
            top: '-12.5rem'
          }}>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4 style={{
                fontSize: '15px', 
                fontWeight: '600',
                marginRight: '2rem'
              }}> Select Agent:</h4>
              <AgentDropDown
                handleChange={handleChange}
                selectedAgentValue={form.agent_id}
              />
            </div>
            <h3 style={{
                fontSize: '15px', 
                fontWeight: '600',
              }}>Name : {form.agent_name}</h3>
            <h3 style={{
                fontSize: '15px', 
                fontWeight: '600',
              }}>ID : {form.agent_id}</h3>
            </div>


            <div style={{ position: 'relative', top: '-10rem',display: "flex" }}>
              <h3 style={{
                position: 'relative',
                top: '-5px',
                fontSize: '15px', 
                fontWeight: '600',
                marginRight: '4rem'
              }}>Amount:</h3>
              <input
                className="app_input"
                placeholder="Enter amount here..."
                onChange={handleChange}
                name="amount"
                value={form.amount}
                type="number"
                style={{
                  postion: 'relative',
                  width: '23rem',
                  left: '50px',
                  borderRadius: '5px'
                }}
              />
            </div>
          

          <div
            style={{
              marginTop: "auto",
            }}
          >
            <Button onClick={submitTopUp} style={{
              width: '30rem',
              height: '35px',
              position: 'relative',
              top: '-7rem',
              left: "21.7rem",
              backgroundColor: '#f5c005'
            }}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentTopUp;
