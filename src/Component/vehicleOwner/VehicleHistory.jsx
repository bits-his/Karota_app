import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { _get } from '../../Utils/Helper'

export default function VehicleHistory() {
    const vehicle_id = useParams()
    const [transactions, setTransactions] = useState([])
    useEffect(()=> {
        _get(`trans_history?query_type=vehicles&vehicle_id${vehicle_id}`,
        res => {
          console.log(res.data)
        },[])
    })
  return (
    <div>VehicleHistory
      {transactions}
    </div>
  )
}
