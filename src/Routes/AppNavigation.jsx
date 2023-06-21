import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Registration from '../Component/Registration'
import RegistrationTable from '../Component/RegistrationTable'
import DashBoard from '../Component/DashBoard'
import Incident from '../Component/Incident'
import Payment from '../Component/Payment'
import MakePayment from '../Component/MakePayment'
import VarifyPaymentWithID from '../Component/VarifyPaymentWithID'
import VarifyPaymentWithQR from '../Component/VarifyPaymentWithQR'

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
          {
            path: '/dashboard',
            element: <DashBoard />
          },
          {
            path: '/incident',
            element: <Incident />
          },
          {
            path: '/payment',
            element: <Payment />
          },
          {
            path: '/make-payment',
            element: <MakePayment />
          },
          {
            path: '/varify-payment-with-id',
            element: <VarifyPaymentWithID />
          },
          {
            path: '/varify-payment-with-qr',
            element: <VarifyPaymentWithQR />
          }
        ]
       }
    ])
    return Pages
}
