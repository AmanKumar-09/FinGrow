import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
function App() {

  return (
    <div className="font-poppins">  {/* Apply font globally */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
