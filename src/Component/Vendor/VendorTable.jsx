import React, { useState } from 'react'
import {Outlet } from 'react-router-dom'
import { Card } from 'reactstrap'
import { _get } from "../../Utils/Helper";

export default function Vehicle() {
    const [] = useState('')
    
  return (
    <Card className="app_card2 dashboard_card2 shadow p-4 m-2 mt-2">
      <Outlet />
    </Card>
  );
}