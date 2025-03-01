import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Suggestion from './Components/Suggestion.jsx'
import Signup from './Components/Signup.jsx'
import Loan from './Components/Loan.jsx'
import Home from './Components/Home.jsx'
import Insurance from './Components/Insurance.jsx'
import GetLoan from './Components/GetLoan.jsx'
import ProvideLoan from './Components/ProvideLoan.jsx'
import LoanForm from './Components/Loan-summary.jsx'
import Aadhar from './Components/Aadhar.jsx'
import UserForm from './Components/BasicKYC.jsx'
import BankDetails from './Components/BankKYC.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/suggestion',
        element: <Suggestion />
      },
      {
        path: '/Signup',
        element: <Signup />
      },
      {
        path: '/Insurance',
        element: <Insurance />
      },
      {
        path: '/Loan',
        element: <Loan />,
      },
      {
        path: '/loan/get-loan',
        element: <GetLoan />
      },
      {
        path: '/loan/provide-loan',
        element: <ProvideLoan />
      },
      {
        path: '/Pan-Verify',
        element: <LoanForm />
      },
      {
        path: '/Aadhar-verify',
        element: <Aadhar/>
      },
      {
        path: '/Basic-verify',
        element: <UserForm/>
      },
      {
        path: '/Bank-verify',
        element: <BankDetails/>
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </StrictMode>,
)
