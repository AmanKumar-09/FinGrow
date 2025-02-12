import React from 'react'
import logo from "../assets/img/Fingrow.png"
import { NavLink } from 'react-router-dom'

const Header = () => {

    const links = [
        {
            name: "Home",
            // route: "/Home"

        },
        {
            name: "Loan",
            // route: "/Loan"

        },
        {
            name: "Insurance",
            // route: "/Insurance"

        },
        {
            name: "Product",
            // route: "/Product"

        },
        {
            name: "Sign-Up",
            // route: "/Signup"

        },

    ]
    return (
        <>
            <div className=' flex justify-between pb-5 shadow-md'>

                <div>

                    <img className='w-40' src={logo} alt="logo" />
                </div>

                <nav className='flex list-none gap-12 items-center justify-center text-lg pr-12'>

                    <input className='bg-gray-200 rounded-md sm:w-96 placeholder-gray-600 sm:ml-4 focus:outline-nonepy-1 px-2' type='text' placeholder='Search '/>

                    {
                        links.map((link, index) => {

                            return <li className='flex hover:text-yellow-500'>

                                {link.name}
                            </li>

                        }
                        )
                    }
                </nav>


            </div>
        </>
    )
}

export default Header