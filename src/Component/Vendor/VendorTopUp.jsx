import React, { useState, useCallback, useEffect } from "react";
import Select from "react-select";
import VendorTopUpDropDown from "../Vendor/VendorTopUpDropDown";
import { _get, _post, separator } from "../../Utils/Helper";
import { Button } from "reactstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function VendorTopUp({ selectedVendorValue }) {

  const [data, setData] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    vendor_id: '',
    vendor_name: '',
    

  });

  const handleChange = ({ target: { name, value } }) => {
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


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

  const submitTopUp = () => {
    // e.preventDefault();
    const obj = {
      source_id: 0,
      destination_id: form.vendor_id,
      query_type: 'vendor_top_up',
      type_of_top_up:"vendor_top_up",
      ...form
    }
    _post(
      "top-up/create",
      obj,
      (res) => {
        if(res.success){
          setLoading(false);
          toast.success("vendor top_up successfully");
          navigate("/vendorReg");
        }
      },
      (err) => {
        console.log(err)
        toast.error('Error occoured while creating top up ');
        setLoading(false)
      }
    );

    if (form.amount <= 0) {
      toast.error("Amount should be above 100.");
      return;
    }

    //console.log(form);
  };

  return (
    <>
      <div className="app_card dashboard_card m-0 p-0">
        <div style={{ margin: "auto" }}>
          <h3 className="text-center fw-bold ve-t-u">Vendor Top-Up</h3>
          <div className="account-info row">
            <div className="info-input col-md-6">
              <div style={{ marginTop: "15px" }}>
                <h4> Select Vendor:</h4>
                <VendorTopUpDropDown
                  handleChange={handleChange}
                  selectedVendorValue={form.vendor_id}
                />
              </div>
              
            </div>

            <div>
              <div className="info-input col-md-6">
                <h4>Amount ({form.amount ? separator(form.amount) : 0}):</h4>
                <input
                  placeholder="Enter amount here..."
                  name = 'amount'
                  value={form.amount}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    borderColor: "#dedede",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid",
                  }}
                />
              </div>
              </div>
             
            </div>
             <div className="transaction-details">
                <h3>Transaction Details</h3>
                <div className="details">
                  <div className="full-width">
                    <p>
                      VENDOR NAME: <span>{form.vendor_name}</span>
                    </p>
                  </div>
                  <div className="full-width">
                    <p>
                      VENDOR ID: <span>{form.vendor_id}</span>
                    </p>
                    <p>
                      AMOUNT: <span>{form.amount ? separator(form.amount) : 0}</span>
                    </p>
                  </div>
                </div>
              </div>
            <div className="top-up-submit">
              {/* <Button onClick={submitTopUp}>Submit</Button> */}
              <Button onClick={submitTopUp}>
            {loading ? "Submitting..." : "Submit"}
          </Button>
            </div>
          </div>
      </div>
    </>
  );
}

export default VendorTopUp;