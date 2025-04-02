import mentor1 from "../assets/img/mentors1.jpg";
import { FaStar, FaVideo, FaBullseye } from "react-icons/fa";

const mentors = [
  {
    name: "Divang Sharma",
    position: "Senior Financial Advisor @ Goldman Sachs",
    experience: 17,
    rating: 4.5,
    sessions: 10,
    about: "I am a Senior Financial Advisor at Goldman Sachs, specializing in wealth management and investment strategies...",
    image: mentor1,
  },
  {
    name: "Aman Gupta",
    position: "Investment Banker @ JP Morgan",
    experience: 12,
    rating: 4.7,
    sessions: 15,
    about: "I specialize in mergers and acquisitions, helping clients navigate complex financial deals...",
    image: mentor1,
  },
  {
    name: "Neha Sharma",
    position: "Financial Analyst @ Morgan Stanley",
    experience: 9,
    rating: 4.8,
    sessions: 20,
    about: "I am an expert in financial modeling and market analysis, providing insights for investment decisions...",
    image: mentor1,
  },
  {
    name: "Raj Verma",
    position: "Wealth Manager @ CitiBank",
    experience: 8,
    rating: 4.6,
    sessions: 12,
    about: "Helping high-net-worth individuals manage their portfolios and achieve financial goals...",
    image: mentor1,
  },
  {
    name: "Priya Patel",
    position: "Tax Consultant @ Deloitte",
    experience: 10,
    rating: 4.9,
    sessions: 18,
    about: "Specialist in tax planning and compliance, helping clients optimize their financial strategies...",
    image: mentor1,
  },
  {
    name: "Rohan Mehta",
    position: "Risk Analyst @ HSBC",
    experience: 7,
    rating: 4.7,
    sessions: 14,
    about: "Focused on financial risk management and developing strategies to mitigate market risks...",
    image: mentor1,
  },
];

const MentorCard = ({ mentor }) => {
  return (
    <div className="">
      <div className="p-4 rounded-2xl bg-white shadow-lg flex flex-col w-[500px]">
        <div className="flex items-start gap-4">
          <img
            src={mentor.image}
            alt="Profile"
            className="w-16 h-16 rounded-full border-2 border-gray-400"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-black">
              {mentor.name} <span className="text-blue-500">✔</span>
            </h2>
            <p className="text-sm text-gray-600">{mentor.position}</p>
            <p className="text-sm text-gray-600">{mentor.experience}+ Years of Experience</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2 text-sm text-black">
          <FaStar className="text-yellow-500" />
          <span>{mentor.rating} Ratings</span>
          <span className="text-green-600">• {mentor.sessions} Sessions</span>
        </div>
        <p className="text-gray-700 text-sm mt-2 truncate">
          {mentor.about} <span className="text-blue-500 cursor-pointer">Read More</span>
        </p>
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => alert("The session has successfully booked")}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm"
          >
            Book 1:1 Session Now!
          </button>
        </div>
      </div>
    </div>
  );
};

const MentorList = () => {
  return (
    <div className="grid grid-cols-2 mt-4 mb-4 pl-40 max-w-[1300px] mx-auto gap-2 px-1 items-center">
      {mentors.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} />
      ))}
    </div>
  );
};

export default MentorList;