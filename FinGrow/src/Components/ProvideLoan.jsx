// import { useState } from "react";
// import Chatbot from "./ChatBot";

// const ProvideLoan = () => {
//   const [amount, setAmount] = useState("");
//   const [interest, setInterest] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Loan Amount:", amount, "Interest Rate:", interest);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen ">
//       <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
//         <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
//           Offer a Loan
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Loan Amount
//             </label>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter amount"
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium mb-2">
//               Interest Rate (%)
//             </label>
//             <input
//               type="number"
//               value={interest}
//               onChange={(e) => setInterest(e.target.value)}
//               placeholder="Enter interest rate"
//               className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Submit Loan Offer
//           </button>
//         </form>
//       </div>
//       <Chatbot/>
//     </div>
//   );
// };

// export default ProvideLoan;
import { useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios
import Chatbot from "./ChatBot";

const ProvideLoan = () => {
  const [name, setName] = useState("Pourush");
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post("/api/v1/users/createoffer", {
        name,
        loanAmount: Number(amount), // Convert to number
        interestRate: Number(interest), // Convert to number
      });

      setSuccess("Loan offer created successfully!");
      // Clear form after successful submission
      setName("");
      setAmount("");
      setInterest("");
      console.log("API Response:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to create loan offer. Please try again."
      );
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Offer a Loan
        </h2>
        
        {/* Success/Error Messages */}
        {success && (
          <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Loan Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              placeholder="Enter interest rate"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded-lg text-white transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Submitting..." : "Submit Loan Offer"}
          </button>
        </form>
      </div>
      <Chatbot />
    </div>
  );
};

export default ProvideLoan;