import React, { useState, useCallback, useEffect } from 'react'
import Select from 'react-select';
import { _get } from '../../Utils/Helper';

// &plate_no=${filter}
function AgentTopUp() {
    const [data, setData] = useState([])

    const getReg = useCallback(() => {
        _get(`agents?query_type=select-all`,
          (resp) => {
            if (resp.success && resp.results) {
              setData(resp.results);
            }
          });
      }, []);
    
      useEffect(() => {
        getReg();
      }, [getReg]);

  return (
    <div className="app_card dashboard_card m-0 p-0">
      <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: '600',
            fontSize: '18px',
          }}
        >Agent Top-Up</span>
       <Select 
       options={data}
       />
    </div>
  )
}

export default AgentTopUp
