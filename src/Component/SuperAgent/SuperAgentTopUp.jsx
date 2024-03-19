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
        <h3 className="text-center fw-bold">Super Agent Top-Up</h3>


      <div
        style={{
          position: "relative",
          display: 'flex',
          paddingLeft: '52px',
          top: "30px",
          margin: "0 auto",
          width: "75%",
          height: "45vh",
          borderRadius: "8px",
          border: "1px solid #f5c005",
          boxShadow: '1px 2px #f5c005'
        }}
      >
      <div>
          {/* {JSON.stringify(form)} */}
          <div className="agent">
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              <h4 style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '5px'}}> Select Vendor:</h4>
              <VendorTopUpDropDown
                handleChange={handleChange}
                selectedVendorValue={form.vendor_id}
              />
            </div>
            <h3 style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '5px'}}>Name : {form.vendor_name}</h3>
            <h3  style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '5px'}}>ID : {form.vendor_id}</h3>
          </div>

          <div
              style={{
                position: 'absolute',
                left: '42rem',
                top: '1rem',
                opacity: '0.3',
                border: '1px solid gray',
                height: '20rem',
                width:'1px'
              }}
              ></div>

          <div style={{
             position: 'relative',
             left: '45rem',
             top: "-125px"
          }}>
            <div
              style={{
                display: "flex",
                marginTop: "15px",
              }}
            >
              
              <h4 style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '0px'}}> SuperAgent</h4>
              <SuperDropdown
                handleChange={handleChange}
                selectedSuperValue={form.superagent_id}
              />
            </div>
            <h3 style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '0px'}}>Name : {form.superagent_id}</h3>
            <h3 style={{position: 'relative', left: '-30px', fontSize: '15px', fontWeight: '600', marginRight: '0px'}}>ID : {form.superagent_name}</h3>
            </div>
            <div style={{ position: 'relative', left: '-30px', display: "flex" }}>
              <h3 style={{position: 'relative',top: '-11rem', marginRight: '3rem', fontSize: '15px', fontWeight: '600',}}>Amount:</h3>
              <input
                style={{
                  position: 'relative',
                  top: '-10rem',
                  left: '37px',
                  height: '38px',
                  width: '20rem',
                  paddingLeft:'10px',
                  borderRadius: '5px',
                  border: '1px solid'
                }}
                placeholder="Enter amount here..."
                onChange={handleChange}
                name="amount"
                value={form.amount}
                type="number"
              />
            </div>


          <div
            style={{
              marginTop: "auto",
            }}
          >
            <Button onClick={submitTopUp} style={{position: 'relative', width: '25rem', backgroundColor: '#f5c005', boxShadow: '1px 2px gray', top: '-6rem',height: '35px', left: '25rem'}}>Submit</Button>
          </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default SuperAgentTopUp;
