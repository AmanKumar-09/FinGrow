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
    { name: "Goal Tracker", route: "/GoalSavingPlanner" },
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
        <>
            <div className='flex justify-between pb-2 shadow-md '>
                <div>
                    <img className='w-40 h-40' src={logo} alt="logo" />
                </div>
                <nav className='flex list-none gap-12 items-center justify-center text-xl pr-12'>
                    {links.map((link, index) => (
                        <NavLink
                            to={link.route}
                            key={index}
                            className={({ isActive }) =>
                                `no-underline  ${isActive ? "text-yellow-500 font-bold" : "text-black"}`
                              }
                        >
                            {link.name}
                        </NavLink>
                       
                  ))}
                </nav>
            </div>
        </>
    );

  
};

export default Header;