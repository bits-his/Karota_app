import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import { _get } from "../../Utils/Helper";
import VendorDropdown from "./VendorDropdown";

function SuperAgentTopUp({ selectedVendorValue, selectedAgentsValue }) {
  const [data, setData] = useState([]);
  const [agentData, setAgentData] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);
  const [selectedAgents, setSelectedAgents] = useState(selectedAgentsValue);
  const [loading, setLoading] = useState(false);

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

  const getAgents = useCallback(() => {
    setLoading(true);
    _get(`agents?query_type=select-all`, (resp) => {
      setLoading(false);
      if (resp.success && resp.result) {
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
    getAgents();
  }, [getVendors]);

  const handleSelectChange = (selectedOption) => {
    setSelectedVendor(selectedOption);
    handleSelectChange({
      target: { name: "vendor", value: selectedOption.value },
    });
  };
  const handleSelectAgentChange = (selectedOption) => {
    setSelectedAgents(selectedOption);
    handleSelectAgentChange({
      target: { name: "agents", value: selectedOption.value },
    });
  };
  return (
    <div className="app_card dashboard_card m-0 p-0">
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          fontWeight: "600",
          fontSize: "18px",
        }}
      >
        Super Agent Top-Up
      </span>


      <div
        style={{
          position: "relative",
          paddingLeft: '52px',
          top: "30px",
          margin: "0 auto",
          width: "40%",
          height: "65vh",
          borderRadius: "8px",
          border: "1px solid #f5c005",
          boxShadow: '1px 2px #f5c005'
        }}
      >
        <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
            marginBottom: '20px'
          }}
        >
          <span
            style={{
                position: 'relative',
                left: '-36px',
              display: "flex",
              alignItems: "center",
            //   marginRight: "50px",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Super Agent:
          </span>
          <VendorDropdown />
          {/* <Select
            value={selectedVendor}
            onChange={handleSelectChange}
            options={data}
            placeholder="Search for a super agent ........"
            styles={{
              borderRadius: "none !important",
              border: "1px solid #f5c005 !important",
              marginBottom: "15px",
              width: "50%",
              padding: "8px",
            }}
            isLoading={loading}
          /> */}
        </div>
        <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>Name : <span style={{marginLeft: '72px', fontWeight: '400'}}>Ibrahim Auwal</span></p>
        <p style={{fontSize: '15px', fontWeight: '600', marginBottom: '20px'}}>ID : <span style={{marginLeft: '95px', fontWeight: '400'}}>12345</span></p>       
        </div>
       
        <div
          style={{
            position: "relative",
            top: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
            }}
          >
            <span
              style={{
                position: 'relative',
                left: '-35px',
                display: "flex",
                alignItems: "center",
                marginRight: "38px",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Agent:
            </span>
            <Select
              value={selectedAgents}
              onChange={handleSelectAgentChange}
              options={agentData}
              placeholder="Search for a agents..."
              styles={{
                borderRadius: "none !important",
                border: "1px solid #f5c005 !important",
                marginBottom: "15px",
                width: "60%",
                padding: "8px",
              }}
              isLoading={loading}
            />
          </div>
          <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px', marginTop: '20px'}}>Name : <span  style={{marginLeft:  '72px', fontWeight: '400'}}>qwerty</span></p>
          <p style={{fontSize: '15px', fontWeight: '600', marginRight: '57px', marginBottom: '20px'}}>ID :  <span  style={{marginLeft: '95px', fontWeight: '400'}}>1233344455</span></p>
        </div>


        <span
          style={{
            position: "relative",
            top: "2.5rem",
            display: "flex",
            alignItems: "center",
            marginRight: "10px",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Balance: 
          <span  style={{marginLeft: '60px', fontWeight: '400'}}>1233344455</span>
        </span>
        <div>
          <span
            style={{
              position: "relative",
              top: "4rem",
              display: "flex",
              alignItems: "center",
              marginRight: "10px",
              fontWeight: "600",
              fontSize: "15px",
            }}
          >
            Amount
          </span>
          <input
            placeholder="Enter amount here..."
            // className="app_input-topUp"
            style={{
              position: 'relative',
              width: '50%',
              left: '12.7rem',
              top: '1.7rem',
              height: '32px',
              paddingLeft: '5px',
              borderRadius: '5px',
              border: '1px solid',
            }}
          />
        </div>
        <button
          style={{
            position: 'relative',
                top: '30px',
                borderRadius: '5px',
                border: '0px solid',
                height: '40px',
                backgroundColor: '#f5c005',
                left: '13rem',
                width: '150px',
                boxShadow: '1px 2px gray'
          }}
        >Submit</button>
      </div>
    </div>
  );
}

export default SuperAgentTopUp;
