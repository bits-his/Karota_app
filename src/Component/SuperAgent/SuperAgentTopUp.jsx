import React, { useState, useCallback, useEffect } from 'react'
import Select from "react-select";
import { _get } from '../../Utils/Helper';


function SuperAgentTopUp({selectedVendorValue, selectedAgentsValue}) {
    const [data, setData] = useState([])
    const [agentData, setAgentData] = useState([])
    const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue)
    const [selectedAgents, setSelectedAgents] = useState(selectedAgentsValue)
    const [loading, setLoading] = useState(false)



    const getVendors = useCallback(() => {
        setLoading(true);
        _get(`vendors?query_type=select-all`, (resp) => {
            setLoading(false);
            if(resp.success && resp.result){
                const formattedData = resp.result.map((vendor) => ({
                    value: vendor.id,
                    label: vendor.vendor_name,
                }));
                setData(formattedData);
            }
        });
    }, []);

    const getAgents = useCallback(() => {
        setLoading(true);
        _get(`agents?query_type=select-all`, (resp) => {
            setLoading(false);
            if(resp.success && resp.result){
                const formattedAgentData = resp.result.map((agents) => ({
                    value: agents.id,
                    label: agents.agents_name,
                }));
                setAgentData(formattedAgentData);
            }
        });
    }, []);

    useEffect(() => {
        getVendors();
        getAgents()
    }, [getVendors])

    const handleSelectChange = (selectedOption) => {
        setSelectedVendor(selectedOption);
        handleSelectChange({target: {name: "vendor", value: selectedOption.value}});
    };
    const handleSelectAgentChange = (selectedOption) => {
        setSelectedAgents(selectedOption);
        handleSelectAgentChange({target: {name: "agents", value: selectedOption.value}});
    };
  return (
    <div className="app_card dashboard_card m-0 p-0">
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >Super Agent Top-Up</span>
        <div
          style={{
            position: 'relative',
            top: '30px',
            left: '20%',
            width: '60%',
            height: '60vh',
            borderRadius: '5px',
            border: '1px solid #f5c005'
          }}
        >
          <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            }}>
            <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Vendor:</span>
            <Select 
              value={selectedVendor}
              onChange={handleSelectChange}
              options={data}
              placeholder='Search for a vendor........'
              styles={{
                borderRadius: "none !important",
                border: "1px solid #f5c005 !important",
                marginBottom: "15px",
                width: '50%',
                padding: "8px",
              }}
              isLoading={loading}
            />
          </div>
          <div
          style={{
            position: 'relative',
            left: '26.8%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Name: {selectedVendor}</span>
          </div>
          <div
          style={{
            position: 'relative',
            left: '31.5%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>ID: {selectedVendor}</span>
          </div>
       


        <div
        style={{
            position: 'relative',
            top: '30px',            
          }}
        >
           <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15px',
            }}>
            <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Agent:</span>
            <Select 
              value={selectedAgents}
              onChange={handleSelectAgentChange}
              options={agentData}
              placeholder='Search for a agents...'
              styles={{
                borderRadius: "none !important",
                border: "1px solid #f5c005 !important",
                marginBottom: "15px",
                width: '60%',
                padding: "8px",
              }}
              isLoading={loading}
            />
          </div>
          <div
          style={{
            position: 'relative',
            left: '26.8%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>Name: {selectedVendor}</span>
          </div>
          <div
          style={{
            position: 'relative',
            left: '31.5%',
            marginTop: '15px',
            }}
          >
          <span style={{display: 'flex', alignItems: 'center', marginRight: '10px', fontWeight: '600', fontSize: '18px'}}>ID: {selectedVendor}</span>
          </div>
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
  )
}

export default SuperAgentTopUp
