import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Registration from "../Component/Registration";
import RegistrationTable from "../Component/RegistrationTable";
import Vendor from "../Component/Vendor/Vendor";
import Login from "../Component/SignIn/signUp/Login";
import VehicleOwner from "../Component/vehicleOwner/VehicleOwner";
import VehicleReg from "../Component/vehicleReg/VehicleReg";
import SuperAgent from "../Component/SuperAgent/SuperAgent";
import SuperAgentTable from "../Component/SuperAgent/SuperAgentTable";
import Agent from "../Component/SuperAgent/Agent";
import AgentTable from "../Component/SuperAgent/AgentTable";
import VendorReg from "../Component/Vendor/VendorReg";
import VehicleOwnerTable from "../Component/vehicleOwner/VehicleOwnerTable";
import TopUp from "../Component/SignIn/signUp/TopUp";
import Dashboard from '../Component/Dashboard/index'

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
          element: <Dashboard />,
        },
        {
          path: "/registration",
          element: <Registration />,
        },
        {
          path: "/superagent",
          element: <SuperAgent />,
        },
        {
          path: "/agent",
          element: <Agent />,
        },
        {
          path: "/superagentable",
          element: <SuperAgentTable />,
        },
        {
          path: "/agentable",
          element: <AgentTable />,
        },
        {
          path: "/vendor",
          element: <Vendor />,
        },
        {
          path: "/vendorReg",
          element: <VendorReg />,
        },
        {
          path: "/VehicleOwner",
          element: <VehicleOwner />,
        },
        {
          path: "/Vehicleownertable",
          element: <VehicleOwnerTable />,
        },
        {
          path: "/VehicleOwner",
          element: <VehicleReg />,
        },
        {
          path: "/top-up",
          element: <TopUp />,
        },
      ],
    },
  ]);
  return Pages;
}
