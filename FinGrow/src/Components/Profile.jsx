import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user exists in localStorage, otherwise add random data
    let storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      // Generate random user data
      storedUser = {
        name: "John Doe",
        email: "johndoe@example.com",
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
      };

      // Store the random user data in localStorage
      localStorage.setItem("user", JSON.stringify(storedUser));
    }

    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user"); // Remove stored user data
    window.location.reload(); // Refresh page to redirect to sign-in page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {user ? (
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome, {user.name}
          </h1>
          <p className="text-gray-600 text-center">{user.email}</p>

          {/* Borrowed Loans Section */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Borrowed Loans</h2>
            {user.borrowedLoans.length > 0 ? (
              <ul className="list-disc ml-5 text-gray-700">
                {user.borrowedLoans.map((loan, index) => (
                  <li key={index}>{loan.amount} - {loan.status}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No borrowed loans</p>
            )}
          </div>

          {/* Given Loans Section */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Given Loans</h2>
            {user.givenLoans.length > 0 ? (
              <ul className="list-disc ml-5 text-gray-700">
                {user.givenLoans.map((loan, index) => (
                  <li key={index}>{loan.amount} - {loan.status}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No given loans</p>
            )}
          </div>

          {/* Booked Sessions Section */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">Booked Sessions</h2>
            {user.bookedSessions.length > 0 ? (
              <ul className="list-disc ml-5 text-gray-700">
                {user.bookedSessions.map((session, index) => (
                  <li key={index}>{session.title} - {session.date}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No booked sessions</p>
            )}
          </div>

          {/* Logout Button */}
          <button
            className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
