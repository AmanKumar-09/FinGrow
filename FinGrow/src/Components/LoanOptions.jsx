import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Expanded dummy data with more lenders
const dummyLenders = [
  { name: 'John Doe', amount: 5000, rate: 5 },
  { name: 'Jane Smith', amount: 10000, rate: 6 },
  { name: 'Alex Johnson', amount: 3000, rate: 4.5 },
  { name: 'Sarah Williams', amount: 2000, rate: 4 },
  { name: 'Michael Brown', amount: 1500, rate: 3.5 },
  { name: 'Emily Davis', amount: 4000, rate: 5.2 },
  { name: 'David Wilson', amount: 2500, rate: 4.2 },
];

const LoanOptions = ({
  loanAmount,
  phone,
  navigate,
  amount,
  totalRepayment,
  repaymentDate,
  interestRate,
  formattedDate,
}) => {
  const [lenders, setLenders] = useState([]);
  const [error, setError] = useState(null);
  const [exactMatch, setExactMatch] = useState(false);

  const handleGetCashToday = async () => {
    try {
      const phoneWithoutCountryCode = phone.replace(/^\+\d{1,2}/, "");
      console.log("Original phone:", phone);
      console.log("Phone without country code:", phoneWithoutCountryCode);

      const response = await axios.post(
        "/api/v1/users/Kycstatus",
        { phone: phoneWithoutCountryCode },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Full API Response:", response.data);
      const kycStatus = response.data.message;
      console.log("kycstatus:", kycStatus);

      if (kycStatus === "success") {
        navigate(`/LoanConfirmation`, {
          state: {
            amount,
            totalRepayment,
            repaymentDate: formattedDate,
            interestRate: `${interestRate * 100}%`,
          },
        });
      } else {
        navigate(`/Basic-verify`, {
          state: {
            amount,
            totalRepayment,
            repaymentDate: formattedDate,
            interestRate: `${interestRate * 100}%`,
            phone: phoneWithoutCountryCode,
          },
        });
      }
    } catch (error) {
      console.error("Error checking KYC status:", error.response || error.message);
      alert("Failed to check KYC status. Please try again.");
    }
  };

  const handleApplyForLoan = () => {
    console.log(`Applying for loan of ₹${loanAmount}`);
    alert(`Loan application submitted for ₹${loanAmount}. We'll notify you when a lender is available!`);
  };

  useEffect(() => {
    const fetchLenders = async () => {
      setError(null);
      setLenders([]);
      setExactMatch(false);

      if (!loanAmount || loanAmount <= 0) {
        // setError('Invalid loan amount provided.');
        return;
      }

      try {
        const response = await fetch(`/api/lenders?amount=${loanAmount}`);
        if (!response.ok) {
          throw new Error('Failed to fetch lenders');
        }
        const data = await response.json();

        const hasExactMatch = data.some(lender => lender.amount === parseInt(loanAmount));
        setExactMatch(hasExactMatch);

        if (data.length === 0) {
          // setError('No lenders found in the database. Showing available options from dummy data.');
          const filteredDummyLenders = dummyLenders
            .filter((lender) => lender.amount <= parseInt(loanAmount))
            .sort((a, b) => b.amount - a.amount);
          setLenders(filteredDummyLenders);
          setExactMatch(dummyLenders.some(lender => lender.amount === parseInt(loanAmount)));
          if (filteredDummyLenders.length === 0) {
            // setError('No lenders available for this amount or less.');
          }
        } else {
          const filteredData = data
            .filter((lender) => lender.amount <= parseInt(loanAmount))
            .sort((a, b) => b.amount - a.amount);
          setLenders(filteredData);
          if (filteredData.length === 0) {
            // setError('No lenders found in the database. Showing available options from dummy data.');
            const filteredDummyLenders = dummyLenders
              .filter((lender) => lender.amount <= parseInt(loanAmount))
              .sort((a, b) => b.amount - a.amount);
            setLenders(filteredDummyLenders);
            setExactMatch(dummyLenders.some(lender => lender.amount === parseInt(loanAmount)));
            if (filteredDummyLenders.length === 0) {
              setError('No lenders available for this amount or less.');
            }
          }
        }
      } catch (err) {
        // setError('Failed to fetch from the database. Showing available options from dummy data.');
        console.error(err);
        const filteredDummyLenders = dummyLenders
          .filter((lender) => lender.amount <= parseInt(loanAmount))
          .sort((a, b) => b.amount - a.amount);
        setLenders(filteredDummyLenders);
        setExactMatch(dummyLenders.some(lender => lender.amount === parseInt(loanAmount)));
        if (filteredDummyLenders.length === 0) {
          // setError('No lenders available for this amount or less.');
        }
      }
    };

    fetchLenders();
  }, [loanAmount]);

  return (
    <div className="mt-6 w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {!exactMatch && loanAmount > 0 && (
        <div className="mb-6 p-4 bg-yellow-100 border border-yellow-400 rounded-lg">
          <p className="text-yellow-700">
            No lenders are currently offering exactly ₹{loanAmount}. You can apply for this amount below or choose from available options.
          </p>
          <button
            onClick={handleApplyForLoan}
            className="mt-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Apply for ₹{loanAmount} Loan
          </button>
        </div>
      )}

      {lenders.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Loan Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lenders.map((lender, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-lg font-semibold text-gray-800">{lender.name}</h4>
                <p className="text-gray-600">Amount: ₹{lender.amount}</p>
                <p className="text-gray-600">Rate: {lender.rate}%</p>
                <button
                  className="mt-3 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
                  onClick={handleGetCashToday}
                >
                  Borrow Now
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanOptions;