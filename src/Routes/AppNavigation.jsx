import React from 'react'
import { useRoutes } from 'react-router-dom'
import AppIndex from './AppIndex'
import Registration from '../Component/Registration'
import RegistrationTable from '../Component/RegistrationTable'
import DashBoard from '../Component/DashBoard'
import Incident from '../Component/Incident'
import Payment from '../Component/Payment'
import MakePayment from '../Component/MakePayment'
import VerifyPaymentWithID from '../Component/VerifyPaymentWithID'
import VerifyPaymentWithQR from '../Component/VerifyPaymentWithQR'

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
            path: '/verify-payment-with-id',
            element: <VerifyPaymentWithID />
          },
          {
            path: '/verify-payment-with-qr',
            element: <VerifyPaymentWithQR />
          }
        ]
       }
    ])
    return Pages
}
