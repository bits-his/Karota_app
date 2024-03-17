import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { _get } from "../../Utils/Helper";

function VehicleDropDown({ handleChange, selectedVehicleValue }) {
  const [data, setData] = useState([]);
  const [selectedVehicle, setSelectedVehicle] = useState(selectedVehicleValue);
  const [loading, setLoading] = useState(false);

  const getVehicles = useCallback(() => {
    setLoading(true);
    _get(`vehicles?query_type=select-all`, (resp) => {
        if (resp.success) {
         // setData(resp.data);
          console.log(resp.data)
          const formattedData = resp.data.map((vehicle) => ({
          value: vehicle.vehicle_id,
          label: vehicle.plate_no,
        chasis: vehicle.chasis_no
         }));
         setData(formattedData);
         setLoading(false)
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
    getVehicles();
  }, [getVehicles]);
  console.log(selectedVehicle);
  const handleSelectChange = (selectedOption) => {
    setSelectedVehicle(selectedOption);
    handleChange({ target: { name: selectedOption.name, value: selectedOption.value ,chasis: selectedOption.chasis} });
  };

  return (
    <>
    {/* {JSON.stringify(data)} */}
    <Select
      value={selectedVehicle}
      onChange={handleSelectChange}
      options={data}
      placeholder="Search for a vehicle..."
      styles={{
        borderRadius: "none !important",
        border: "1px solid #f5c005 !important",
        marginBottom: "15px",
        width: '100%',
        padding: "8px",
      }}
      isLoading={loading}
    />
    </>
  );
}

export default VehicleDropDown;
