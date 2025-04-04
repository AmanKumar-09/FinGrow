



// import React, { useEffect, useState } from "react";
// import userPhoto from "../assets/img/mentors1.jpg"

// const Profile = ({ isProfileOpen, toggleProfile }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check if user exists in localStorage, otherwise add random data
//     let storedUser = JSON.parse(localStorage.getItem("user"));

//     if (!storedUser) {
//       storedUser = {
//         name: "John Doe",
//         email: "johndoe@example.com",
//         borrowedLoans: [
//           { amount: `$${Math.floor(Math.random() * 5000) + 100}`, status: "Approved" },
//           { amount: `$${Math.floor(Math.random() * 8000) + 500}`, status: "Pending" },
//         ],
//         givenLoans: [
//           { amount: `$${Math.floor(Math.random() * 10000) + 500}`, status: "Completed" },
//           { amount: `$${Math.floor(Math.random() * 3000) + 200}`, status: "Pending" },
//         ],
//         bookedSessions: [
//           { title: "Stock Investment 101", date: "2025-03-25" },
//           { title: "Loan Management Strategies", date: "2025-04-02" },
//         ],
//         monthlyContributions: [
//           { month: "January", amount: Math.floor(Math.random() * 5000) + 100 },
//           { month: "February", amount: Math.floor(Math.random() * 5000) + 100 },
//           { month: "March", amount: Math.floor(Math.random() * 5000) + 100 },
//         ],
//         totalSessions: Math.floor(Math.random() * 20) + 5,
//       };

//       localStorage.setItem("user", JSON.stringify(storedUser));
//     }

//     setUser(storedUser);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("user");
//     window.location.reload();
//   };

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       {/* Profile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
//           isProfileOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {user ? (
//           <div className="p-6 text-gray-800">
//             {/* Profile Header */}
//             <div className="flex items-center space-x-4">
//               <img
//                 src={userPhoto}
//                 alt="Profile"
//                 className="w-20 h-20 rounded-full object-cover"
//               />
//               <div>
//                 <h2 className="text-xl font-bold flex items-center">
//                   {user.name}{" "}
//                   <span className="ml-2">
//                     <svg
//                       className="w-5 h-5 text-blue-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </span>
//                 </h2>
//                 <p className="text-blue-600">{user.email}</p>
//                 <p className="text-gray-600">Financial Consultant</p>
//               </div>
//             </div>

           

//             {/* Borrowed Loans Section */}
//             <div className="mt-6 bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Borrowed Loans</h3>
//               {user.borrowedLoans.length > 0 ? (
//                 <ul className="space-y-2">
//                   {user.borrowedLoans.map((loan, index) => (
//                     <li key={index} className="flex justify-between">
//                       <span>{loan.amount}</span>
//                       <span className={loan.status === "Approved" ? "text-green-600" : "text-yellow-600"}>
//                         {loan.status}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600">No borrowed loans</p>
//               )}
//             </div>

//             {/* Given Loans Section */}
//             <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Given Loans</h3>
//               {user.givenLoans.length > 0 ? (
//                 <ul className="space-y-2">
//                   {user.givenLoans.map((loan, index) => (
//                     <li key={index} className="flex justify-between">
//                       <span>{loan.amount}</span>
//                       <span className={loan.status === "Completed" ? "text-green-600" : "text-yellow-600"}>
//                         {loan.status}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600">No given loans</p>
//               )}
//             </div>

//             {/* Booked Sessions Section */}
//             <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Booked Sessions</h3>
//               {user.bookedSessions.length > 0 ? (
//                 <ul className="space-y-2">
//                   {user.bookedSessions.map((session, index) => (
//                     <li key={index} className="flex justify-between">
//                       <span>{session.title}</span>
//                       <span>{session.date}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600">No booked sessions</p>
//               )}
//             </div>

//             {/* Monthly Contributions Section */}
//             <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Monthly Contributions</h3>
//               {user.monthlyContributions.length > 0 ? (
//                 <ul className="space-y-2">
//                   {user.monthlyContributions.map((contribution, index) => (
//                     <li key={index} className="flex justify-between">
//                       <span>{contribution.month}</span>
//                       <span className="text-green-600">${contribution.amount}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-600">No contributions</p>
//               )}
//             </div>

//             {/* Total Sessions Section */}
//             <div className="mt-4 bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold mb-2">Total Sessions Taken</h3>
//               <p className="text-green-600">{user.totalSessions} Sessions</p>
//             </div>

//             {/* Logout Button */}
//             <button
//               className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <p className="text-gray-600 p-6">Loading user data...</p>
//         )}
//       </div>

//       {/* Overlay for closing sidebar when clicking outside */}
//       {isProfileOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={toggleProfile}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import userPhoto from "../assets/img/mentors1.jpg";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = ({ isProfileOpen, toggleProfile }) => {
  const [user, setUser] = useState(null);
  const [timeSpentData, setTimeSpentData] = useState(null);

  useEffect(() => {
    // Check if user exists in localStorage, otherwise add random data
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      storedUser = {
        name: "Pourush",
        email: "pourushkashyap06@gmail.com",
        borrowedLoans: [
          { amount: `$${Math.floor(Math.random() * 5000) + 100}`, status: "Approved" },
          { amount: `$${Math.floor(Math.random() * 8000) + 500}`, status: "Pending" },
        ],
        givenLoans: [
          { amount: `$${Math.floor(Math.random() * 10000) + 500}`, status: "Completed" },
          { amount: `$${Math.floor(Math.random() * 3000) + 200}`, status: "Pending" },
        ],
        bookedSessions: [
          { title: "Stock Investment 101", date: "2025-03-25" },
          { title: "Loan Management Strategies", date: "2025-04-02" },
        ],
        monthlyContributions: [
          { month: "January", amount: Math.floor(Math.random() * 5000) + 100 },
          { month: "February", amount: Math.floor(Math.random() * 5000) + 100 },
          { month: "March", amount: Math.floor(Math.random() * 5000) + 100 },
        ],
        totalSessions: Math.floor(Math.random() * 20) + 5,
      };

      localStorage.setItem("user", JSON.stringify(storedUser));
    }

    setUser(storedUser);

    // Simulate time spent data (in hours) for different sections
    const timeData = {
      labels: ["Loans", "Financial Planning", "Goal Tracker", "Trends", "Suggestions"],
      datasets: [
        {
          label: "Time Spent (Hours)",
          data: [
            Math.floor(Math.random() * 20) + 5, // Loans
            Math.floor(Math.random() * 15) + 3, // Financial Planning
            Math.floor(Math.random() * 10) + 2, // Goal Tracker
            Math.floor(Math.random() * 8) + 1,  // Trends
            Math.floor(Math.random() * 5) + 1,  // Suggestions
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 255, 0.6)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
    setTimeSpentData(timeData);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    window.location.reload();
  };

  // Calculate total loans given and taken
  const totalLoansTaken = user
    ? user.borrowedLoans.reduce((total, loan) => {
        const amount = parseFloat(loan.amount.replace("$", ""));
        return total + amount;
      }, 0)
    : 0;

  const totalLoansGiven = user
    ? user.givenLoans.reduce((total, loan) => {
        const amount = parseFloat(loan.amount.replace("$", ""));
        return total + amount;
      }, 0)
    : 0;

  // Calculate total invested from monthly contributions
  const totalInvested = user
    ? user.monthlyContributions.reduce((total, contribution) => {
        return total + contribution.amount;
      }, 0)
    : 0;

  return (
    <div className="bg-white text-gray-800">
      {/* Profile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[40%] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isProfileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {user ? (
          <div className="h-full overflow-y-auto p-6 text-gray-800">
            {/* Profile Header */}
            <div className="flex items-center space-x-4">
              <img
                src={userPhoto}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-bold flex items-center">{user.name}</h2>
                <p className="text-blue-600">{user.email}</p>
                {/* <p className="text-gray-600">Financial Consultant</p> */}
              </div>
            </div>

            {/* Financial Summary Section */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Financial Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Loans Taken:</span>
                  <span className="text-red-600">${totalLoansTaken.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Loans Given:</span>
                  <span className="text-green-600">${totalLoansGiven.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Invested:</span>
                  <span className="text-blue-600">${totalInvested.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Time Spent on Website (Pie Chart) */}
            <div className="mt-6 bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Time Spent on Website</h3>
              {timeSpentData ? (
                <div className="w-full h-64">
                  <Pie
                    data={timeSpentData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          position: "bottom",
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              const label = context.label || "";
                              const value = context.raw || 0;
                              return `${label}: ${value} hours`;
                            },
                          },
                        },
                      },
                    }}
                  />
                </div>
              ) : (
                <p className="text-gray-600">Loading time data...</p>
              )}
            </div>

            {/* Spacer to ensure content is scrollable */}
            <div className="h-20"></div>

            {/* Logout Button */}
            <div className="mt-6">
              <button
                className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full overflow-y-auto p-6">
            <p className="text-gray-600">Loading user data...</p>
          </div>
        )}
      </div>

      {/* Overlay for closing sidebar when clicking outside */}
      {isProfileOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleProfile}
        ></div>
      )}
    </div>
  );
};

export default Profile;