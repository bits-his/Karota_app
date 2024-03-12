import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Registration from '../Component/Registration'
import RegistrationTable from '../Component/RegistrationTable'
import Vendor from '../Component/Vendor'
import Register from '../Component/Register'

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
            path: '/',
            element: <RegistrationTable />
          },
          {
            path: '/registration-form',
            element: <Registration />
          },
          {
            path: '/superagent',
            element: <Registration />
          },
          {
            path: '/vendor',
            element: <Vendor />
          },
        ]
       }
    ])
    return Pages
}
