import React from 'react'
import logo from "../assets/img/Fingrow.png"
import { NavLink } from 'react-router-dom'

const Header = () => {
    const links = [
        { name: "Home", route: "/" },
        { name: "Loan", route: "/loan" },
        { name: "Trends", route: "/trends" },
        {name:"Financial Planning",route:"/FinancialFreedom"},
        { name: "Suggestion", route: "/suggestion" },
        { name: "Sign-Up", route: "/signup" },
       
    ];

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
}

export default Header;
