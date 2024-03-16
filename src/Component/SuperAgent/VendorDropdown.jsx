import React, { useState, useEffect } from "react";
import Select from "react-select";

function VendorDropdown({ handleChange, selectedVendorValue }) {
  const [vendors, setVendors] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState(selectedVendorValue);

  useEffect(() => {
    fetchVendorsFromDatabase()
      .then((vendorsData) => {
        setVendors(vendorsData);
      })
      .catch((error) => {
        console.error("Error fetching vendors:", error);
      });
  }, []);

  const fetchVendorsFromDatabase = async () => {
    const response = await fetch("vendors?query_type=select-all");
    if (!response.ok) {
      throw new Error("Failed to fetch vendors");
    }
    return response.json();
  };
  

  const handleSelectChange = (selectedOption) => {
    setSelectedVendor(selectedOption);
    handleChange(selectedOption.value); 
  };

  return (
    <Select
      value={selectedVendor}
      onChange={handleSelectChange}
      className="app_input"
      options={vendors.map((vendor) => ({
        value: vendor.id,
        label: vendor.name,
        key: vendor.id, 
      }))}
      placeholder="Search for a vendor..."
    />
  );
}

export default VendorDropdown;
