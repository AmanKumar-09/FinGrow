import React from 'react'
import Crousal from '../Utils/Crousal'
import { NavLink } from 'react-router-dom'
import Chatbot from './ChatBot'

function Loan() {

  // const links = [
  //   {
  //     name: "GetLoan",
  //     route: "get-loan"
  //   },
  //   {
  //     name: "ProvideLoan",
  //     route: "provide-loan"
  //   }
  // ]


  return (
    <div>
      <Crousal />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3  pt-10  mb-10 my-10'>


        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Borrow Money</h1>
            <ul className="list-inside text-lg text-gray-600 space-y-2">
              <li><span className="text-xl font-bold text-gray-500">Rule 1:</span> Borrow responsibly</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 2:</span> Understand the interest rates</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 3:</span> Have a repayment plan</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 4:</span> Borrow only what you need</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 5:</span> Read all terms carefully</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 6:</span> Maintain a good credit score</li>
            </ul>



          </div>
       
          <NavLink to="/loan/get-loan" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all no-underline">
            Get Loan
          </NavLink>
          
        </div>

        <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center text-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Rules to Lend Money</h1>
            <ul className=" list-inside text-lg text-gray-500 space-y-2">
              <li><span className="text-xl font-bold text-gray-500">Rule 1:</span> Verify the borrower's credibility</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 2:</span> Set clear terms and agreements</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 3:</span> Keep proper records</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 4:</span> Consider interest and risks</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 5:</span> Have a legal contract</li>
              <li><span className="text-xl font-bold text-gray-500">Rule 6:</span> Be prepared for repayment delays</li>
            </ul>
          </div>
          <NavLink to="/loan/provide-loan" className="mt-6 bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all no-underline">
            Give Loan
          </NavLink>
        </div>

      </div>
      <Chatbot/>
    </div>
  )
}

export default Loan