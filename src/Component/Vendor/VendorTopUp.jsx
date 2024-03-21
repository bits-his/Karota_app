import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown";
import { _get, _post } from "../../Utils/Helper";
import { Button } from "reactstrap";

function VendorTopUp({
  selectedVendorValue,
  selectedAgent,
  handleSelectSuperAgentChange,
}) {
  const [data, setData] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);
  const [loading, setLoading] = useState(false);

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
  }, [getVendors]);

  const handleSelectVendorChange = (selectedOption) => {
    setSelectedVendor(selectedOption);
    handleSelectVendorChange({
      target: { name: "vendor", value: selectedOption.value },
    });
  };

  const submitTopUp = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0 md:h-[90vh]">
        <div className='middle-card-topup' style={{ margin: "auto" }}>
          <h3
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: '600',
              fontSize: '18px',
              marginBottom: '5px'
            }}
          >Vendor Top-Up</h3>

          <div
            className='md:h-[35vh] h-[50vh]'
            style={{
              margin: "0 auto",
              maxWidth: "100%",
              // height: "35vh",
              borderRadius: "5px",
              border: "1px solid #f5c005",
              padding: "20px",
            }}

          >
            {/* {JSON.stringify(form)} */}
            <div className="md:w-[50%] md:m-0">
              <div
                className=''
                style={{ display: "flex", marginTop: "15px", alignItems: "center", marginBottom: '20px' }}>
                <h4
                  className=''
                  style={{
                    fontWeight: '600',
                    // marginRight: '10px'
                  }}> Select Vendor:</h4>
                <VendorTopUpDropDown
                  handleChange={handleChange}
                  selectedVendorValue={form.vendor_id}
                />
              </div>

            </div>


            <div
              className='md:left-[61rem] md:top-[8.6rem] md:h-[16rem] md:w-[1px]'
              style={{
                position: 'absolute',
                opacity: '0.3',
                border: '1px solid gray',
              }}
            ></div>

            <div
              className='relative md:top-[-85px] md:left-[37rem] top-[80px] left-[0rem]'
              style={{
                // position: 'relative',
                // top: '-85px',
                // left: '37rem'
              }}>
              <h4
                className='md:top-[-10px] top-[-15px]'
                style={{
                  position: 'relative',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '20px',
                  marginRight: '20px'
                }}>
                Balance: <span className='font-light'>0</span>
              </h4>
              <div style={{ display: "flex" }}>
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: '600',
                  marginRight: '20px'
                }}>
                  Amount:
                </h4>
                <input placeholder='Enter amount here...' className='md:w-[28%] w-[100%]' style={{ width: '', padding: '10px', borderRadius: '5px', border: '1px solid' }} />
              </div>
              <div className="transaction-details">
                <h3>Transaction Details</h3>
                <div className="details">
                  <p>
                    FROM : <span>{form.vendor_name}</span>
                  </p>
                  <p>
                    ID : <span>{form.vendor_id}</span>
                  </p>
                  <p>
                    Amount: <span>{form.amount ? form.amount : 0}</span>
                  </p>
                </div>
              </div>
              <div className="top-up-submit">
                <Button onClick={submitTopUp}>Submit</Button>
              </div>
              <Button onClick={submitTopUp} className='relative w-[100%] top-[110px] md:top-[-40px] md:w-[30%] bg-[#f5c005] md:left-[24.5rem]' style={{ position: 'relative', borderRadius: '5px' }}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorTopUp;
