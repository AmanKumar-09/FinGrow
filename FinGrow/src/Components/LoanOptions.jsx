import React, { useState } from 'react';

const LoanOptions = () => {
  const [activeTab, setActiveTab] = useState('lenders');

  // Sample data (replace with real data from an API or database)
  const lenders = [
    { id: 1, name: 'John Doe', amount: 5000, rate: 5 },
    { id: 2, name: 'Jane Smith', amount: 10000, rate: 6 },
  ];

  const borrowers = [
    { id: 1, name: 'Alice Brown', amount: 3000, purpose: 'Business' },
    { id: 2, name: 'Bob Wilson', amount: 7000, purpose: 'Education' },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Loan Platform</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === 'lenders' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('lenders')}
        >
          Lenders
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === 'borrowers' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('borrowers')}
        >
          Borrowers
        </button>
      </div>

      {/* Content */}
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        {activeTab === 'lenders' ? (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Lenders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lenders.map((lender) => (
                <div key={lender.id} className="p-4 border rounded-lg hover:shadow-md transition">
                  <p className="text-lg font-medium">{lender.name}</p>
                  <p className="text-gray-600">Amount: ${lender.amount}</p>
                  <p className="text-gray-600">Rate: {lender.rate}%</p>
                  <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                    Borrow Now
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Offer a Loan</h3>
              <form className="mt-4 space-y-4">
                <input
                  type="number"
                  placeholder="Amount"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="number"
                  placeholder="Interest Rate (%)"
                  className="w-full p-2 border rounded"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  Submit Offer
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Borrowers Seeking Loans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {borrowers.map((borrower) => (
                <div key={borrower.id} className="p-4 border rounded-lg hover:shadow-md transition">
                  <p className="text-lg font-medium">{borrower.name}</p>
                  <p className="text-gray-600">Amount Needed: ${borrower.amount}</p>
                  <p className="text-gray-600">Purpose: {borrower.purpose}</p>
                  <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Lend Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default LoanOptions;