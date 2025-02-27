import React from 'react'

function Suggestion() {
  return (
    <div className='min-h-secreen flex justify-center items-center bg-gradient-to-r '>
        <div className='w-full my-4 max-w-lg bg-white shadow-lg rounded-lg p-6   mx-auto   '>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-5'>
            Financial Suggestion Form
          </h2>
            <form className='flex flex-col space-y-4'>
                <div>
                <label className='block text-gray-700 font-medium mb-1'>
                    Enter Your Total Salery</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                 type="number" />
                </div>
               <div>
               <label className='block text-gray-700 font-medium mb-1'>
               Enter Your RoomRent</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                 type="number" />
                
               </div>

               <div>
               <label className='block text-gray-700 font-medium mb-1'>
               Enter Your Average Electricity Bill</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                 type="number" />
                
               </div>
              
                <div>
                <label className='block text-gray-700 font-medium mb-1'>
                Enter your Grocery Bill</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                 type="number" />
                </div>
                <div>
                <label className='block text-gray-700 font-medium mb-1'>
                how many percent of money you want to save in rest of money</label>
                <input className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
                 type="number" />
                </div>

                <button className='w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition '>Submit</button>
                
                 
            </form>
        </div>
    </div>
  )
}

export default Suggestion