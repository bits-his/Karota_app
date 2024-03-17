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
import VendorTable from "../Component/Vendor/VendorTable"
import VendorReg from "../Component/Vendor/VendorReg";
import VendorView from "../Component/Vendor/VendorView"
import VehicleOwnerTable from "../Component/vehicleOwner/VehicleOwnerTable";
import TopUp from "../Component/SignIn/signUp/TopUp";
import Dashboard from "../Component/Dashboard/index";
import SuperAgentTopUp from "../Component/SuperAgent/SuperAgentTopUp";
import AgentTopUp from "../Component/SuperAgent/AgentTopUp";
import VendorTopUp from "../Component/Vendor/VendorTopUp";
import VehicleView from "../Component/vehicleOwner/VehicleView";
import Vehicle from "../Component/vehicleOwner/Vehicle";

export default function AppNavigation() {
  let Pages = useRoutes([
    {
      path: "/login",
      element: <Login />,
    },
    // {
    //   path: '/top-up/funding',
    //   element: <Funding />
    // },
    {
      element: <AppIndex />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "registration",
          element: <Registration />,
        },
        {
          path: "supergent",
          element: <SuperAgent />,
        },
        {
          path: "agent",
          element: <Agent />,
        },
        {
          path: "supergentable",
          element: <SuperAgentTable />,
        },
        {
          path: "agentable",
          element: <AgentTable />,
        },
        {
          path: "vendor",
          element: <Vendor />,
        },
        {
          path: "vendorReg",
          element: <VendorTable />,
          children: [
            {
              path: '',
              element: <VendorReg />
            },
            {
              path: ":id",
              element: <VendorView />
            },
        ]
        },
        {
          path: "/vehicleOwner",
          element: <VehicleOwner />,
        },
        {
          path: "vehicleownertable",
          element: <Vehicle />,
<<<<<<< HEAD
            children: [
              {
                path: '',
                element: <VehicleOwnerTable />
              },
              {
                path: ":id",
                element: <VehicleView />
              },
          ]
=======
          children: [
            {
              path: "",
              element: <VehicleOwnerTable />,
            },
            {
              path: ":id",
              element: <VehicleView />,
            },
          ],
>>>>>>> bd0be33eb66c77be1e0ea0604fa18b3f3c1830e0
        },
        {
          path: "vehicleregistration/:id",
          element: <VehicleReg />,
        },
        {
          path: "top-up",
          element: <TopUp />,
        },
        {
          path: "/supertopup",
          element: <SuperAgentTopUp />,
        },
        {
          path: "/vendortopup",
          element: <VendorTopUp />,
        },
        {
          path: "/agintopup",
          element: <AgentTopUp />,
        },
        // {
        //   path: "/superagenttopup",
        //   element: <SuperAgentTopUp />,
        // },
      ],
    },
  ]);
  return Pages;
}
