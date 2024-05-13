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
import SuperAgentTopUp from "../Component/SuperAgent/SuperAgentTopUp"
import Agent from "../Component/SuperAgent/Agent";
import AgentTable from "../Component/SuperAgent/AgentTable";
import AgentTopUp from "../Component/SuperAgent/AgentTopUp"
import VendorTable from "../Component/Vendor/VendorTable";
import VendorReg from "../Component/Vendor/VendorReg";
import VehicleOwnerTable from "../Component/vehicleOwner/VehicleOwnerTable";
import TopUp from "../Component/SignIn/signUp/CollectionPoint";
import Dashboard from "../Component/Dashboard/index";
import VendorTopUp from "../Component/Vendor/VendorTopUp";
import VehicleView from "../Component/vehicleOwner/VehicleView";
import Vehicle from "../Component/vehicleOwner/Vehicle";
import VehicleTopUp from "../Component/vehicleOwner/VehicleTopUp";
import LicensViever from "../Component/SignIn/signUp/LicensViever";
import VehicleOwnerView from "../Component/vehicleOwner/VehicleOwnerView";
import AgentView from "../Component/SuperAgent/componentview/AgentView";
import SuperAgentView from "../Component/SuperAgent/componentview/SuperAgentView";
import VendorView from "../Component/SuperAgent/componentview/VendorView";
import VendorDetail from "../Component/Vendor/VendorDetail";
import SuperAgentHistory from "../Component/SuperAgent/componentview/SuperAgentHistory";
import AgentHistory from "../Component/SuperAgent/componentview/AgentHistory";
import VehicleHistory from "../Component/vehicleOwner/VehicleHistory";
import ReportStolen from "../Component/ReportStolen/ReportStolen"

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
          path: "superagent",
          element: <SuperAgent />,
        },
        {
          path: "agent",
          element: <Agent />,
        },
        {
          path: "superagenttable",
          element: <SuperAgentTable />,
        },
        {
          path: "superagenttable/view/:id",
          element: <SuperAgentView />,
        },
        {
          path: "superagenthistory/history/:id",
          element: <SuperAgentHistory />,
        },
        {
          path: "agenttable",
          element: <AgentTable />,
        },
        {
          path: "agenttable/view/:id",
          element: <AgentView />,
        },
        {
          path: "vendorReg/view/:id",
          element: <VendorDetail />,
        },
        {
          path: "agenthistory/history/:id",
          element: <AgentHistory />,
        },
        {
          path: "/agenttopup",
          element: <AgentTopUp />,
        },
        {
          path: "vendor",
          element: <Vendor />,
        },
        {
          path: "report_stolen",
          element: <ReportStolen />,
        },
        {
          path: "vendorReg/",
          element: <VendorTable />,
          children: [
            {
              path: "",
              element: <VendorReg />,
            },

          ],
        },
        {
          path: "vendorReg/view/:id",
          element: <VendorView />,
        },
        {
            path: "vendorReg/detail/:id",
            element: <VendorDetail />,
          },
        {
          path: "/vehicleOwner",
          element: <VehicleOwner />,
        },
        {
          path: "vehicleownertable",
          element: <Vehicle />,
          children: [
            {
              path: "",
              element: <VehicleOwnerTable />,
            },
            {
              path: ":id",
              element: <VehicleView />,
            },
            {
              path: "view/:id",
              element: <VehicleOwnerView />,
            },
          ],
        },
        {
          path: "vehicleregistration/:id",
          element: <VehicleReg />,
        },
        {
          path: "vehicles",
          children:[
            {
              path:'',
              element: <TopUp />,
            },
            {
              path:':id',
              element: <VehicleHistory />
             }
          ]
          
        },
        {
          path: "/superagenttopup",
          element: <SuperAgentTopUp />,
        },
        {
          path: "/licens-pdf/:vehicle_id",
          element: <LicensViever />,
        },
        {
          path: "/vendortopup",
          element: <VendorTopUp />,
        },
        {
          path: "/vehicletopup",
          element: <VehicleTopUp />,
        },
      ],
    },
  ]);
  return Pages;
}
