import { useState } from "react";
import { Link } from "react-router-dom";
import Loaninfo from "./LoanInfo";
import Progressbar from "./ProgressBar";

const Aadhar=()=> {
  const [pan, setPan] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pan) {
      setError("Please enter your PAN number");
    } else {
      setError("");
      // Proceed to next step
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-5">
      < Loaninfo/>

      <Progressbar currentStep={3}/>

      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-[800px] transition-shadow hover:shadow-xl">
        <h2 className="text-center font-bold text-3xl mb-10">Adhar</h2>
        <form onSubmit={handleSubmit} className="px-10">
          <label className="block font-bold mb-2">Adhar Id:*</label>
          <input
            type="text"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
            className="w-full p-2 border-b-2 border-black outline-none"
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* Buttons */}
          <div className="flex justify-between mt-6">
          <Link to={"/Pan-Verify"}>
            <button
              type="button"
              className="bg-red-500 text-white px-10 py-4 rounded-full transition hover:bg-red-700"
            >
              Back
            </button>
            </Link>
            <Link to={"/Bank-verify"}>
            <button
              type="submit"
              className="bg-blue-500 text-white px-20 py-4 rounded-full transition hover:bg-blue-700"
            >
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Aadhar;