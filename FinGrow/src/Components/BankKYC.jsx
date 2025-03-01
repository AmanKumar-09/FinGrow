import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Loaninfo from './LoanInfo';
import Progressbar from './ProgressBar';

const BankDetails = () => {
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accountNumber || !ifscCode || !bankName) {
      setError("Please fill in all fields");
    } else {
      setError("");
      // Proceed to next step
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      < Loaninfo/>

      <Progressbar currentStep={4}/>

      <div className="bg-white p-6 rounded-lg shadow-md w-[800px]">
        <h2 className="text-center font-bold text-2xl mb-8">Bank Account Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block font-bold">Account Number:*</label>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full p-2 border-b-2 border-black outline-none"
          />

          <label className="block font-bold">IFSC Code:*</label>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            className="w-full p-2 border-b-2 border-black outline-none"
          />

          <label className="block font-bold">Bank Name:*</label>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="w-full p-2 border-b-2 border-black outline-none"
          />

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

          <div className="flex justify-between mt-4">
            <Link to={"/Aadhar-verify"}>
            <button className="px-8 py-4 bg-red-500 text-white rounded-full transition hover:bg-red-700">Back</button>
            </Link>
            <Link to={"/"}>
            <button type="submit" className="px-8 py-4 bg-blue-500 text-white rounded-full transition hover:bg-blue-700">Submit</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankDetails;
