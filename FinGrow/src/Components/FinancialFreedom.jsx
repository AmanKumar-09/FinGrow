import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const FinancialFreedom = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  p-6 md:p-12 my-4 max-w-5xl mx-auto ">
      {/* Left Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start  mr-6  md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Financial freedom starts here.
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Aiming for early retirement, a dream home, or a comfortable future?
          Get a personalised financial plan and transform your finances.
        </p>
        <NavLink to={"/MentorCard"} className="bg-green-600 no-underline text-white flex items-center gap-2 px-6 py-3 rounded-lg mt-6 text-lg font-semibold hover:bg-green-700 transition">
          Personalise your Financial Plan <FaArrowRight />
        </NavLink>
       
      </div>


      {/* Right Section (YouTube Video) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <div className="relative  rounded-xl w-[500px] h-80 flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7oj6gpAbYgw"
            title="Gravitas Plus | Financial Literacy: The need of the hour"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FinancialFreedom;
