import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Suggestion from './Components/Suggestion.jsx'
import Signup from './Components/Signup.jsx'
import Loan from './Components/Loan.jsx'
import Home from './Components/Home.jsx'
import Insurance from './Components/Insurance.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
         path:'/',
         element:<Home/>
      },
      {
        path:'/suggestion',
        element:<Suggestion/>
      },
      {
        path:'/Signup',
        element:<Signup/>
      },
      {
       path:'Insurance',
       element:<Insurance/>
      },
      {
        path:'/Loan',
        element:<Loan/>
      },

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}>

</RouterProvider>
  </StrictMode>,
)
