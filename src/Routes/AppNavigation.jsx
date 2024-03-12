import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Registration from '../Component/Registration'
import RegistrationTable from '../Component/RegistrationTable'
import Register from '../Component/SignIn/signUp/SignIn'

export default function AppNavigation() {
  let Pages = useRoutes([
    {
      path: '/login',
      element: <Register />
    },
    {
      element: <AppIndex />,
      children: [
        {
          path: '/',
          element: <RegistrationTable />
        },
        {
          path: '/registration',
          element: <Registration />
        },
        {
          path: '/registration-form',
          element: <Registration />
        },
        {
          path: '/superagent',
          element: <Registration />
        },
      ]
    }
  ])
  return Pages
}
