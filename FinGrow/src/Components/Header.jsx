import logo from "../assets/img/Fingrow.png"
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ toggleProfile, isProfileOpen }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const links = [
    { name: "Home", route: "/" },
    { name: "Loan", route: "/loan" },
    { name: "Trends", route: "/trends" },
    { name: "Financial Planning", route: "/FinancialFreedom" },
    { name: "Dashboard", route: "/GoalSavingPlanner" },
    { name: "Suggestion", route: "/suggestion" },
    ...(isAuthenticated ? [] : [{ name: "Sign-Up", route: "/signup" }]), // Conditionally include Sign-Up link
  ];

  const handlePersonIconClick = () => {
    if (isAuthenticated) {
      if (toggleProfile) {
        toggleProfile(); // Toggle the profile sidebar
      } else {
        navigate("/profile"); // Fallback navigation if toggleProfile is not provided
      }
    }
  };

  

  return (
    <div className="flex justify-between pb-5 shadow-md items-center">
      <div>
        <img className="w-40" src={logo} alt="logo" />
      </div>
      <nav className="flex list-none gap-12 items-center justify-center text-xl pr-12">
        {links.map((link, index) => (
          <NavLink
            to={link.route}
            key={index}
            className={({ isActive }) =>
              `no-underline ${isActive ? "text-yellow-500 font-bold" : "text-black"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
        {/* Show Person Icon if authenticated */}
        {isAuthenticated && (
          <div
            className="cursor-pointer flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full hover:bg-yellow-500 transition-colors"
            onClick={handlePersonIconClick}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Header;