import mentor1 from "../assets/img/mentors1.jpg";
import { FaStar, FaVideo, FaBullseye } from "react-icons/fa";


const mentors = [
  {
    name: "Divang Sharma",
    position: "Senior Software Engineer @ Microsoft",
    experience: 17,
    rating: 4.5,
    sessions: 10,
    about: "I am a Senior Software Engineer at Microsoft...",
    image: mentor1,
  },
  {
    name: "Aman Gupta",
    position: "Tech Lead @ Google",
    experience: 12,
    rating: 4.7,
    sessions: 15,
    about: "I specialize in full-stack web development...",
    image: mentor1,
  },
  {
    name: "Neha Sharma",
    position: "Data Scientist @ Amazon",
    experience: 9,
    rating: 4.8,
    sessions: 20,
    about: "I am an expert in Machine Learning and AI...",
    image: mentor1,
  },
  {
    name: "Raj Verma",
    position: "Software Engineer @ Facebook",
    experience: 8,
    rating: 4.6,
    sessions: 12,
    about: "Building scalable backend systems...",
    image: mentor1,
  },
  {
    name: "Priya Patel",
    position: "Cloud Architect @ AWS",
    experience: 10,
    rating: 4.9,
    sessions: 18,
    about: "Specialist in cloud infrastructure and DevOps...",
    image: mentor1,
  },
  {
    name: "Rohan Mehta",
    position: "AI Researcher @ OpenAI",
    experience: 7,
    rating: 4.7,
    sessions: 14,
    about: "Focused on deep learning and AI advancements...",
    image: mentor1,
  },
];

const MentorCard = ({ mentor }) => {
  return (
    <div className="">
    <div className="p-4 rounded-2xl bg-white shadow-lg  flex flex-col w-[500px] ">
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
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg text-sm">
          Book 1:1 Session Now!
        </button>
      </div>
    </div>
    </div>
  );
};

const MentorList = () => {
  return (
    <div className="grid grid-cols-2 mt-4 mb-4  pl-40 max-w-[1300px] mx-auto gap-2 px-1 items-center">
      {mentors.map((mentor, index) => (
        <MentorCard key={index} mentor={mentor} />
      ))}
   
    </div>
  );
};

export default MentorList;