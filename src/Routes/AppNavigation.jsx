import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Registration from "../Component/Registration";
import RegistrationTable from "../Component/RegistrationTable";
import Register from "../Component/Register";
import SuperAgent from "../Component/SuperAgent/SuperAgent";

export default function AppNavigation() {
  let Pages = useRoutes([
    // {
    //   path: '/sign-in-form',
    //   element: <Register />
    // }
    {
      element: <AppIndex />,
      children: [
        {
          path: "/registration",
          element: <RegistrationTable />,
        },
        {
          path: "/registration-form",
          element: <Registration />,
        },
        {
          path: "/superagent",
          element: <SuperAgent />,
        },
      ],
    },
  ]);
  return Pages;
}
