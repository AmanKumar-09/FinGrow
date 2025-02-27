import { useState } from "react";

export default function LoanPage() {
  const [loanAmount, setLoanAmount] = useState(500);
  const minLoan = 500;
  const maxLoan = 20000;
  const repaymentDate = "06.03.2025";
  // const repaymentAmount = loanAmount; // Assuming no extra interest in display
  const repaymentAmount = (loanAmount * 1.18).toFixed(2); // Including 18% increase


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
     
      
      {/* Loan Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-10 max-w-3xl w-full flex justify-between items-center">
        <div className="w-2/3 pr-4">
          <h2 className="text-2xl font-bold text-blue-600">Instant <span className="text-black">cash loans</span></h2>
          <p className="text-gray-700 text-sm">Up to ₹40,000 for up to 180 days in 5 minutes.<br/>First loan for FREE</p>
          <p className="text-gray-700 font-semibold mt-2">You don’t need to confirm income, bring references, visit our office</p>
          
          <div className="mt-4">
            <p className="text-lg font-semibold">I am borrowing</p>
            <input
              type="range"
              min={minLoan}
              max={maxLoan}
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
              className="w-full mt-2"
            />
            <div className="flex justify-between text-sm text-gray-700">
              <span>₹{minLoan}</span>
              <span className="text-lg font-bold">₹{loanAmount}</span>
              <span>₹{maxLoan}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between text-gray-700 text-sm">
            <p>Total repayment: <span className="font-semibold">₹{repaymentAmount}</span></p>
            <p>Repayment date: <span className="font-semibold">{repaymentDate}</span></p>
          </div>
        </div>
        
        <div className="w-1/3 text-center">
          <input
            type="text"
            placeholder="Mobile phone number"
            className="w-full p-2 border rounded text-center"
          />
          <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            GET CASH TODAY
          </button>
          <p className="text-xs text-gray-600 mt-2">
            By clicking on the "Get cash today" button above, I acknowledge that I have read and agree to the <span className="text-blue-500 underline">Terms and Conditions</span> and <span className="text-blue-500 underline">Privacy Policy</span>.
          </p>
        </div>
      </div>
      
     
    </div>
  );
}
