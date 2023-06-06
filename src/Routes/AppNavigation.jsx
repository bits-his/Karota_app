import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Registration from '../Component/Registration'
import RegistrationTable from '../Component/RegistrationTable'

export default function AppNavigation() {
  let Pages = useRoutes([
       {
        element: <AppIndex />,
        children: [
          {
            path: '/registration',
            element: <RegistrationTable />
          },
          {
            path: '/registration-form',
            element: <Registration />
          },
        ]
       }
    ])
    return Pages
}
