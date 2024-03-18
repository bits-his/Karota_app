import React, { useState, useEffect, useCallback } from "react";
import Select from "react-select";
import { _get } from "../../Utils/Helper";

function SuperAgentDropdown({ handleChange, selectedSuperAgentValue }) {
  const [data, setData] = useState([]);
  const [selectedSuperAgent, setselectedSuperAgent] = useState(
    selectedSuperAgentValue
  );
  const [loading, setLoading] = useState(false);

  const getsuperAgents = useCallback(() => {
    setLoading(true);
    _get(`superagent?query_type=select-all`, (resp) => {
      setLoading(false);
      if (resp.success && resp.results) {
        // Extract only the name and id properties from the response
        const formattedData = resp.results.map((superagent) => ({
          value: superagent.id,
          label: superagent.name,
        }));
        setData(formattedData);
      }
    });
  }, []);

  useEffect(() => {
    getsuperAgents();
  }, [getsuperAgents]);
  console.log(selectedSuperAgent);
  const handleSelectChange = (selectedOption) => {
    setselectedSuperAgent(selectedOption);
    handleChange({
      target: { name: "super_agent", value: selectedOption.value },
    });
  };

  return (
    <Select
      value={selectedSuperAgent}
      onChange={handleSelectChange}
      options={data}
      placeholder="Search for a super agent..."
      styles={{
        borderRadius: "none !important",
        border: "1px solid #f5c005 !important",
        marginBottom: "15px",
        width: "100%",
        padding: "8px",
      }}
      isLoading={loading}
    />
  );
}

export default SuperAgentDropdown;
