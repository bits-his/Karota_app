import React, { useState, useCallback, useEffect } from "react";
import { _get, _post } from "../../Utils/Helper";
import VendorDropdown from "./VendorDropdown";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import SuperDropdown from "./SuperDropdown";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown";
import toast from "react-hot-toast"

function SuperAgentTopUp() {
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
      "super_agent/top-up/create",
      form,
      (res) => {
        setLoading(false); // Set loading to false when submission is successful
        toast.success("super agent top up created successfully");
        // setSubmittedData([...submittedData, res]);
        navigate("/superagenttable");
      },
      (err) => {
        console.log(err);
        toast.error("An error occurred while creating uper agent top up");
        setLoading(false); 
      }
    );
    console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
        <h3 className="text-center fw-bold">Super Agent Top-Up</h3>


      <div className="account-info row"
      >
          {/* {JSON.stringify(form)} */}
  
            <div className="info-input col-md-6" >
              <h4 > Select Vendor:</h4>
              <VendorTopUpDropDown
                handleChange={handleChange}
                selectedVendorValue={form.vendor_id}
              />
            </div>
           <div
            className="info-input col-md-6"
            >
              
              <h4> SuperAgent :</h4>
              <SuperDropdown
                handleChange={handleChange}
                selectedSuperValue={form.super_agent_id}
              />
          </div>
            <div className="info-input col-md-6" >
              <h4>Amount :</h4>
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
              <h3>Transaction Details</h3>
              <div className='details'>
                <p >FROM : <span >{form.vendor_name}</span></p>
                <p >TO : <span  >{form.super_agent_name}</span></p>
               <p >ID : <span >{form.vendor_id}</span></p>
          
               <p >ID :  <span  >{form.super_agent_id}</span></p>
               <p >Amount:  <span  >{form.amount ? form.amount : 0}</span></p>
              </div>
               
            
          </div>
        <div className="top-up-submit" >
            <Button onClick={submitTopUp} >
              Submit</Button>
          </div>
      </div>

    </>
  );
}

export default SuperAgentTopUp;