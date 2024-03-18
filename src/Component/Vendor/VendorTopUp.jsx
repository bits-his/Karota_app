import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { _get, _post } from "../../Utils/Helper";
import { Button } from "reactstrap";
//confirm
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown"

function VendorTopUp({selectedVendorValue}) {
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

    const navigate = useNavigate();

    // const getVendors = useCallback(() => {
    //   setLoading(true);
    //   _get(`vendors?query_type=select-all`, (resp) => {
    //     setLoading(false);
    //     if (resp.success && resp.result) {
    //       const formattedData = resp.result.map((vendor) => ({
    //         value: vendor.id,
    //         label: vendor.vendor_name,
    //       }));
    //       setData(formattedData);
    //     }
    //   });
    // }, []);

    // useEffect(() => {
    //     getVendors();
    // }, [getVendors])

    // const handleSelectVendorChange = (selectedOption) => {
    //     setSelectedVendor(selectedOption);
    //     handleSelectVendorChange({target: {name: "vendor", value: selectedOption.value}});
    // };
  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
        <div className='middle-card-topup' style={{margin: "auto"}}>
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >Vendor Top-Up</h3>
          
          <div style={{ }} >
            {/* {JSON.stringify(form)} */}
            <div className="agent">
              <div style={{display: "flex", marginTop: "15px", alignItems: "center"}}>
                <h4> Select Vendor:</h4>
                <VendorTopUpDropDown
                  handleChange={handleChange}
                  selectedVendorValue={form.vendor_id}
                />
              </div>
              <h4>Name : <span className='capitalize-text'>{form.vendor_name}</span></h4>
              <h4>ID : <span className='capitalize-text'>{form.vendor_id}</span></h4>
            </div>
            
            <h4 style={{}}>
              Balance: #0
            </h4>
            <div style={{ display: "flex" }}>
              <h4 style={{ marginRight: 5}}>
                Amount:
              </h4>
              <input placeholder='Enter amount here...' className='app_input-topUp' />
            </div>
            <Button onClick={submitTopUp} style={{}}>Submit</Button>
          </div> 
        </div>  
      </div>
    </>
  )
}

export default VendorTopUp
