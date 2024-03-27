import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { _get, _post } from '../../Utils/Helper'

export default function VehicleHistory() {
    const params = useParams()
    const vehicle_id = params.id
    console.log(vehicle_id)
    const [transactions, setTransactions] = useState([])



    const getReg = useCallback(() => {
      _post(
        `top-up/create`,
        {
          source_id: vehicle_id,
          query_type: "select_destination",
        },
        (resp) => {
          if(resp.success && resp.result){
            console.log(resp)
          }
        }
      )
    }, [vehicle_id])
    useEffect(()=> {
        // _get(`trans_history?query_type=vehicles&vehicle_id${vehicle_id}`,
        // res => {
        //   console.log(res.data)
        // },[])
      getReg()
    }, [getReg])
  return (
    <div>VehicleHistory 3333
      {transactions}
    </div>
  )
}
