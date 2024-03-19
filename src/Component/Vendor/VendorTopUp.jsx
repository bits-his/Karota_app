import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown"
import { _get, _post } from "../../Utils/Helper";
import { Button } from "reactstrap";

function VendorTopUp({selectedVendorValue, selectedAgent, handleSelectSuperAgentChange}) {
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
    //

    const getVendors = useCallback(() => {
      setLoading(true);
      _get(`vendors?query_type=select-all`, (resp) => {
        setLoading(false);
        if (resp.success && resp.result) {
          const formattedData = resp.result.map((vendor) => ({
            value: vendor.id,
            label: vendor.vendor_name,
          }));
          setData(formattedData);
        }
      });
    }, []);

    useEffect(() => {
        getVendors();
    }, [getVendors])

    const handleSelectVendorChange = (selectedOption) => {
        setSelectedVendor(selectedOption);
        handleSelectVendorChange({target: {name: "vendor", value: selectedOption.value}});
    }
    
    const submitTopUp = (e) => {
      e.preventDefault();
     
      console.log(form);
    };

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
          
          <div style={{
            margin: "0 auto",
            width: "110%",
            height: "35vh",
            borderRadius: "5px",
            border: "1px solid #f5c005",
            padding: "20px",
           }} >
            {/* {JSON.stringify(form)} */}
            <div className="agent">
              <div style={{display: "flex", marginTop: "15px", alignItems: "center"}}>
                <h4
                style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '20px'
                }}> Select Vendor:</h4>
                <VendorTopUpDropDown
                  handleChange={handleChange}
                  selectedVendorValue={form.vendor_id}
                />
              </div>
              <h4 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '20px',
                  marginBottom: '20px'
                }}>Name : <span className='capitalize-text'>{form.vendor_name}</span></h4>
              <h4 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '20px'
                }}>ID : <span className='capitalize-text'>{form.vendor_id}</span></h4>
            </div>
            

            
          <div
              style={{
                position: 'absolute',
                left: '63rem',
                top: '12rem',
                opacity: '0.3',
                border: '1px solid gray',
                height: '16rem',
                width:'1px'
              }}
              ></div>

            <div style={{
              position: 'relative',
              top: '-92px',
              left: '37rem'
            }}>
            <h4 style={{
                  position: 'relative',
                  top: '-10px',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  marginRight: '20px'
                }}>
              Balance: #0
            </h4>
            <div style={{ display: "flex" }}>
              <h4 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '20px'
                }}>
                Amount:
              </h4>
              <input placeholder='Enter amount here...' style={{width: '33%', padding: '10px', borderRadius: '5px', border: '1px solid'}} />
            </div>
            </div>
            <Button onClick={submitTopUp} style={{position: 'relative', width: '30%', backgroundColor: '#f5c005', left: '24.5rem', top: '-30px'}}>Submit</Button>
          </div> 
        </div>  
      </div>
    </>
  )
}

export default VendorTopUp
