import React, { useState } from "react";
import Select from "react-select";  // Ensure react-select is installed

export default function PaymentType({ handleChange }) {
  // State to track selected vendor
  const [selectedVendor, setSelectedVendor] = useState({});

  // Options for the select dropdown
  const options = [
    { label: "Fixed", value: "fixed" },
    { label: "Percentage", value: "percentage" }
  ];

  // Handle change when an option is selected
  const handleSelectChange = (selectedOption) => {
    setSelectedVendor(selectedOption); // Update selected option
    handleChange({
      target: {
        name: "payment_value",
        value: selectedOption.value,
      },
    });
    handleChange({
      target: {
        name: "payment_name",
        value: selectedOption.label,
      },
    });
  };

  return (
    <>
      <Select
        value={selectedVendor}
        onChange={handleSelectChange}
        options={options}
        placeholder="Select a payment type..."
        styles={{
            borderRadius: "none !important",
            border: "1px solid #f5c005 !important",
            marginBottom: "15px",
            maxWidth: "100%",
            height: "30px",
            padding: "8px",
          }}
      />
    </>
  );
}
