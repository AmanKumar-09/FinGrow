// import React, { useState, useEffect } from 'react';

// // Expanded dummy data with more lenders
// const dummyLenders = [
//   { name: 'John Doe', amount: 5000, rate: 5 },
//   { name: 'Jane Smith', amount: 10000, rate: 6 },
//   { name: 'Alex Johnson', amount: 3000, rate: 4.5 },
//   { name: 'Sarah Williams', amount: 2000, rate: 4 },
//   { name: 'Michael Brown', amount: 1500, rate: 3.5 },
//   { name: 'Emily Davis', amount: 4000, rate: 5.2 },
//   { name: 'David Wilson', amount: 2500, rate: 4.2 },
// ];

// const LoanOptions = ({ loanAmount }) => {
//   const [lenders, setLenders] = useState([]);
//   const [error, setError] = useState(null);

//   // Fetch lenders when loanAmount changes
//   useEffect(() => {
//     const fetchLenders = async () => {
//       setError(null);
//       setLenders([]); // Clear previous results

//       if (!loanAmount || loanAmount <= 0) {
//         setError('Invalid loan amount provided.');
//         return;
//       }

//       try {
//         const response = await fetch(`/api/lenders?amount=${loanAmount}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch lenders');
//         }
//         const data = await response.json();
//         if (data.length === 0) {
//           setError('No lenders found for this exact amount in the database. Showing dummy data instead.');
//           // Filter dummy data based on exact loan amount match
//           const filteredDummyLenders = dummyLenders.filter(
//             (lender) => lender.amount === parseInt(loanAmount)
//           );
//           setLenders(filteredDummyLenders);
//           if (filteredDummyLenders.length === 0) {
//             setError('No lenders available for this exact amount, even in dummy data.');
//           }
//         } else {
//           // Filter API data based on exact loan amount match
//           const filteredData = data.filter(
//             (lender) => lender.amount === parseInt(loanAmount)
//           );
//           setLenders(filteredData);
//           if (filteredData.length === 0) {
//             setError('No lenders found in the database for this exact amount. Showing dummy data instead.');
//             const filteredDummyLenders = dummyLenders.filter(
//               (lender) => lender.amount === parseInt(loanAmount)
//             );
//             setLenders(filteredDummyLenders);
//             if (filteredDummyLenders.length === 0) {
//               setError('No lenders available for this exact amount, even in dummy data.');
//             }
//           }
//         }
//       } catch (err) {
//         setError('Failed to fetch from the database. Showing dummy data instead.');
//         console.error(err);
//         // Filter dummy data based on exact loan amount match
//         const filteredDummyLenders = dummyLenders.filter(
//           (lender) => lender.amount === parseInt(loanAmount)
//         );
//         setLenders(filteredDummyLenders);
//         if (filteredDummyLenders.length === 0) {
//           setError('No lenders available for this exact amount, even in dummy data.');
//         }
//       }
//     };

//     fetchLenders();
//   }, [loanAmount]); // Run when loanAmount changes

//   return (
//     <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
//       {/* Display Suggestions */}
//       {error && (
//         <p className="text-red-500 mb-4">{error}</p>
//       )}

//       {lenders.length > 0 && (
//         <div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Loan Options</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {lenders.map((lender, index) => (
//               <div
//                 key={index}
//                 className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//               >
//                 <h4 className="text-lg font-semibold text-gray-800">{lender.name}</h4>
//                 <p className="text-gray-600">Amount: ₹{lender.amount}</p>
//                 <p className="text-gray-600">Rate: {lender.rate}%</p>
//                 <button
//                   className="mt-3 w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
//                 >
//                   Borrow Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoanOptions;


import React, { useState, useEffect } from 'react';

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

const LoanOptions = ({ loanAmount }) => {
  const [lenders, setLenders] = useState([]);
  const [error, setError] = useState(null);

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

    setCount(count + 1);
  };

  useEffect(() => {
    const fetchLenders = async () => {
      setError(null);
      setLenders([]); // Clear previous results

      if (!loanAmount || loanAmount <= 0) {
        setError('Invalid loan amount provided.');
        return;
      }

      try {
        const response = await fetch(`/api/lenders?amount=${loanAmount}`);
        if (!response.ok) {
          throw new Error('Failed to fetch lenders');
        }
        const data = await response.json();
        if (data.length === 0) {
          setError('No lenders found in the database. Showing available options from dummy data.');
          // Filter dummy data for amounts <= loanAmount
          const filteredDummyLenders = dummyLenders.filter(
            (lender) => lender.amount <= parseInt(loanAmount)
          ).sort((a, b) => b.amount - a.amount); // Sort by amount descending
          setLenders(filteredDummyLenders);
          if (filteredDummyLenders.length === 0) {
            setError('No lenders available for this amount or less.');
          }
        } else {
          // Filter API data for amounts <= loanAmount
          const filteredData = data.filter(
            (lender) => lender.amount <= parseInt(loanAmount)
          ).sort((a, b) => b.amount - a.amount);
          setLenders(filteredData);
          if (filteredData.length === 0) {
            setError('No lenders found in the database. Showing available options from dummy data.');
            const filteredDummyLenders = dummyLenders.filter(
              (lender) => lender.amount <= parseInt(loanAmount)
            ).sort((a, b) => b.amount - a.amount);
            setLenders(filteredDummyLenders);
            if (filteredDummyLenders.length === 0) {
              setError('No lenders available for this amount or less.');
            }
          }
        }
      } catch (err) {
        setError('Failed to fetch from the database. Showing available options from dummy data.');
        console.error(err);
        // Filter dummy data for amounts <= loanAmount
        const filteredDummyLenders = dummyLenders.filter(
          (lender) => lender.amount <= parseInt(loanAmount)
        ).sort((a, b) => b.amount - a.amount);
        setLenders(filteredDummyLenders);
        if (filteredDummyLenders.length === 0) {
          setError('No lenders available for this amount or less.');
        }
      }
    };

    fetchLenders();
  }, [loanAmount]);

  return (
    <div className="mt-6 w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
      {error && (
        <p className="text-red-500 mb-4">{error}</p>
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