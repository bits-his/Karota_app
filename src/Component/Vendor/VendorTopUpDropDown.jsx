import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { _get } from "../../Utils/Helper";

function VendorTopUpDropDown({ handleChange, selectedVendorValue }) {
  const [data, setData] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);
  const [loading, setLoading] = useState(false);

  const getVendors = useCallback(() => {
    setLoading(true);
    _get(`vendors?query_type=select-all`, (resp) => {
      if (resp.success) {
        // setData(resp.data);
        const formattedData = resp.data.map((vendor) => ({
          value: vendor.vendor_name,
          label: vendor.id,
          // chasis: vehicle.chasis_no,
        }));
        setData(formattedData);
        setLoading(false);
      }
    });
    // _get(`vehicles?query_type=select-all`, (resp) => {
    //   setLoading(false);
    //   if (resp.success && resp.results) {
    //     // Extract only the name and id properties from the response
    //     console.log(resp)
    //
    //   }
    // });
  }, []);

  useEffect(() => {
    getVendors();
  }, [getVendors]);
  // const handleSelectChange = (selectedOption) => {
  //   setSelectedVehicle(selectedOption);
  //   handleChange({ target: { name: selectedOption.name, value: selectedOption.value ,chasis: selectedOption.chasis} });
  // };
  // const handleSelectChange = (selectedOption) => {
  //   setSelectedVehicle(selectedOption);
  //   handleChange({
  //     target: {
  //       name: selectedOption.label, // Assuming name here is label
  //       value: selectedOption.value,
  //       chasis: selectedOption.chasis,
  //     },
  //   });
  // };
  const handleSelectChange = (selectedOption) => {
    setSelectedVendor(selectedOption);
    console.log(selectedOption);
    handleChange({
      target: {
        name: "vendor_id",
        value: selectedOption.value,
      },
    });
    handleChange({
      target: {
        name: "Vendor_Name",
        value: selectedOption.label,
      },
    });
  };

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <Select
        value={selectedVendor}
        onChange={handleSelectChange}
        options={data}
        placeholder="Search for a vehicle..."
        styles={{
          borderRadius: "none !important",
          border: "1px solid #f5c005 !important",
          marginBottom: "15px",
          width: "100%",
          padding: "8px",
        }}
        isLoading={loading}
      />
    </>
  );
}

export default VendorTopUpDropDown;
