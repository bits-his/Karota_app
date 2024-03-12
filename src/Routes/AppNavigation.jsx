import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Registration from "../Component/Registration";
import RegistrationTable from "../Component/RegistrationTable";
import Register from "../Component/Register";
import SignUp from "../Component/SignIn/signUp/Login";
import Login from "../Component/SignIn/signUp/Login";
import SuperAgent from "../Component/SuperAgent/SuperAgent";

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
      ],
    },
  ]);
  return Pages;
}
