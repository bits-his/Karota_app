import React, { useState, useCallback, useEffect } from "react";
import { _get, _post } from "../../Utils/Helper";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import SuperDropdown from "./SuperDropdown";
import AgentDropDown from "../vehicleOwner/AgentDropDown";
import toast from "react-hot-toast"

function AgentTopUp() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const submitTopUp = (e) => {
    e.preventDefault();
    _post(
      "agent/top-up/create",
      form,
      (res) => {
        setLoading(false); // Set loading to false when submission is successful
        toast.success("agent top up created successfully");
        // setSubmittedData([...submittedData, res]);
        navigate("/agenttable");
      },
      (err) => {
        console.log(err);
        toast.error("An error occurred while creating agent top up");
        setLoading(false); 
      }
    );
    console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
        <h3 className="text-center fw-bold">Agent Top-Up</h3>

        <div
        >

          <div className="account-info row">
            <div className="info-input col-md-6"
            >
              <h4 >SuperAgent :</h4>
              <SuperDropdown handleChange={handleChange}
                selectedSuperValue={form.super_agent_id}
              />
            </div>
            <div
              className="info-input col-md-6"
            >
              <h4 > Select Agent:</h4>
              <AgentDropDown
                handleChange={handleChange}
                selectedAgentValue={form.agent_id}
              />
            </div>
            <div className="info-input col-md-6">
              <h4 >Amount:</h4>
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

          <div className="transaction-details">
<<<<<<< HEAD
          <h3>Transaction Details</h3>
                <div className="details">
                  <div className="full-width">
                    <p>
                      AGENT NAME: <span>{form.vendor_name}</span>
                    </p>
                  </div>
                  <div className="full-width">
                    <p>
                      AGENT ID: <span>{form.vendor_id}</span>
                    </p>
                    <p>
                      AMOUNT: <span>{form.amount ? form.amount : 0}</span>
                    </p>
                    </div>
=======
            <h3>Transaction Details</h3>
            <div className="details">
              <p>
                FROM : <span>{form.superagent_name}</span>
              </p>
              <p>
                ID : <span>{form.superagent_id}</span>
              </p>
              <p>
                TO : <span>{form.agent_name}</span>
              </p>
              <p>
                ID : <span>{form.agent_id}</span>
              </p>
              <p>
                Amount: <span>{form.amount ? form.amount : 0}</span>
              </p>
>>>>>>> 7a4c486a69174b0994526e613da26ca64ae67d4e
            </div>
          </div>
          <div
            className="top-up-submit"
          >
            <Button onClick={submitTopUp} >Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgentTopUp;
