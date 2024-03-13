import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Registration from "../Component/Registration";
import RegistrationTable from "../Component/RegistrationTable";
import Vendor from "../Component/Vendor/Vendor";
import Login from "../Component/SignIn/signUp/Login";
import VehicleOwner from "../Component/vehicleOwner/VehicleOwner"
import VehicleReg from "../Component/vehicleReg/VehicleReg";
import SuperAgent from "../Component/SuperAgent/SuperAgent";
import SuperAgentTable from "../Component/SuperAgent/SuperAgentTable";

export default function AppNavigation() {
  let Pages = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: '/login',
    //   element: <Register />
    // },
    {
      element: <AppIndex />,
      children: [
        {
          path: "/",
          element: <RegistrationTable />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/superagent",
          element: <SuperAgent />
        },
        {
          path: "/superagentable",
          element: <SuperAgentTable />
        },
        {
          path: "/vendor",
          element: <Vendor />,
        },
        {
          path: "/VehicleOwner",
          element: <VehicleOwner/>,
        },
        {
          path: "/VehicleReg",
          element: <VehicleReg />,
        },
        
        
      ],
    },
  ]);
  return Pages;
}
