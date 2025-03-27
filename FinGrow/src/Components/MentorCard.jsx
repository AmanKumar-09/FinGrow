import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import mentor1 from "../assets/img/mentors1.jpg";
// import mentor1 from "../assets/img/Fingrow.png";

const mentorsData = [
  {
    id: 1,
    name: "Pourush",
    qualification: "B.Tech",
    rating: 4.5,
    sessionDuration: "1 Hour Session",
    description:
      "Expert in financial planning and investment strategies. Helping individuals achieve their financial goals efficiently.",
    expertise: ["Investment", "Loans", "Budgeting", "Wealth Management"],
    price: 499,
  },
  {
    id: 2,
    name: "Aarav Mehta",
    qualification: "MBA Finance",
    rating: 4.8,
    sessionDuration: "45 Min Session",
    description:
      "Specialist in financial risk management and wealth creation. Assisting individuals and businesses in managing assets effectively.",
    expertise: ["Risk Management", "Wealth Creation", "Stock Market", "Tax Planning"],
    price: 799,
  },
  {
    id: 3,
    name: "Ishita Sharma",
    qualification: "CA (Chartered Accountant)",
    rating: 4.6,
    sessionDuration: "1 Hour Session",
    description:
      "Certified Chartered Accountant with expertise in taxation, corporate finance, and financial advisory services.",
    expertise: ["Taxation", "Corporate Finance", "Auditing", "Investment Strategies"],
    price: 999,
  },
  {
    id: 4,
    name: "Rohan Verma",
    qualification: "M.Sc Economics",
    rating: 4.7,
    sessionDuration: "30 Min Session",
    description:
      "Experienced economist helping individuals understand economic trends, financial growth strategies, and business models.",
    expertise: ["Economic Analysis", "Investment Planning", "Savings Strategies", "Business Growth"],
    price: 699,
  },
  {
    id: 5,
    name: "Sanya Kapoor",
    qualification: "CFA (Chartered Financial Analyst)",
    rating: 4.9,
    sessionDuration: "1.5 Hour Session",
    description:
      "Professional CFA with deep knowledge in equity research, financial modeling, and investment banking.",
    expertise: ["Equity Research", "Financial Modeling", "Investment Banking", "Portfolio Management"],
    price: 1199,
  },
];


const alertbutton = ()=>{
  alert("your session has been booked successfully")
}
const MentorCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 max-w-6xl items-center m-auto gap-6 px-6 py-8">
      {mentorsData.map((mentor) => (
        <div key={mentor.id} className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 items-center border border-yellow-500">
          {/* Profile Image */}
          <img
            src={mentor1}
            className="w-24 h-24 rounded-full  "
            alt="Mentor"
          />

          {/* Details Section */}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold ">{mentor.name}</h2>
              <FaCheckCircle className="text-green-600" />
            </div>
            <p className="text-sm text-gray-500">{mentor.qualification}</p>
            <p className="text-yellow-500 flex items-center gap-1">
              <FaStar /> {mentor.rating} Ratings
            </p>
            <p className="">{mentor.sessionDuration}</p>
            <p className="text-gray-600 mt-2">{mentor.description}</p>

            {/* Expertise */}
            <div className="mt-3 flex flex-wrap gap-2">
              {mentor.expertise.map((topic, index) => (
                <span key={index} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm border border-green-500">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Action Section */}
          <div className="flex flex-col items-center gap-2">
           
            <button onClick={alertbutton} className="bg-green-500 text-white px-4 py-2 rounded-lg w-full hover:bg-yellow-600 transition">
              Book 1:1 Session
            </button>
            <p className="text-sm text-gray-500">Starts @ ₹{mentor.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MentorCard;
