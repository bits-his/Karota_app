import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { _get, _post } from "../../Utils/Helper";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown"

function VendorTopUp({selectedVendorValue}) {
    const [data, setData] = useState([])
    const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);
    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({});

    const handleChange = ({ target: { name, value } }) => {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
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
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '18px',
            }}
          >Vendor Top-Up</h3>
          
          <div style={{ position: 'relative', top: '30px', left: '20%', width: '60%', height: '60vh', borderRadius: '5px', border: '1px solid #f5c005' }} >
            {JSON.stringify(form)}
            <div className="agent">
              <div
                style={{
                  display: "flex",
                  marginTop: "15px",
                }}
              >
                <h4> Select Vendor:</h4>
                <VendorTopUpDropDown
                  handleChange={handleChange}
                  selectedVendorValue={form.vendor_name}
                />
              </div>
              <h3>Name : {form.vendor_name}</h3>
              <h3>ID : {form.id}</h3>
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
    </>
  )
}

export default VendorTopUp
