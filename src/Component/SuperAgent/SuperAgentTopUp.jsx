import React, { useState, useCallback, useEffect } from "react";
import { _get } from "../../Utils/Helper";
import VendorDropdown from "./VendorDropdown";
import { Button } from "reactstrap";
import SuperDropdown from "./SuperDropdown";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown";

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
        <h3 className="text-center font-bold text-3xl">Super Agent Top-Up</h3>
        <div className="account-info row"
        >
          {/* {JSON.stringify(form)} */}
          <div className="md:mt-[30px] md:space-y-[20px]">
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4 style={{ position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '5px' }}> Select Vendor:</h4>
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
                selectedSuperValue={form.superagent_id}
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
              <p >TO : <span  >{form.superagent_name}</span></p>
              <p >ID : <span >{form.vendor_id}</span></p>

              <p >ID :  <span  >{form.superagent_id}</span></p>
              <p >Amount:  <span  >{form.amount ? form.amount : 0}</span></p>
            </div>


          </div>
          <div className="top-up-submit" >
            <Button onClick={submitTopUp} >Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuperAgentTopUp;
