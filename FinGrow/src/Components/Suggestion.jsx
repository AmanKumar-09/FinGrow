import { useState } from "react";
import Chatbot from './ChatBot';

const Suggestion = () => {
  const [salary, setSalary] = useState("");
  const [spendings, setSpendings] = useState("");
  const [savings, setSavings] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [investmentRecommendations, setInvestmentRecommendations] = useState([]);
  const [showInvestmentButton, setShowInvestmentButton] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const spendingsArray = spendings.split(",").map(Number);

    try {
      // Calculate Savings API Call
      const savingsResponse = await fetch("http://localhost:5000/calculate_savings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ salary: Number(salary), spendings: spendingsArray }),
      });

      if (!savingsResponse.ok) throw new Error("Failed to calculate savings.");

      const savingsData = await savingsResponse.json();
      setSavings(savingsData.savings);

      // AI Suggestions API Call
      const aiResponse = await fetch("http://localhost:5000/ai_suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ savings: savingsData.savings }),
      });

      if (!aiResponse.ok) throw new Error("Failed to get AI suggestions.");

      const aiData = await aiResponse.json();
      setAiSuggestion(aiData.suggestions);

      // Show investment button
      setShowInvestmentButton(true);
    } catch (error) {
      console.error("Error:", error);
      setAiSuggestion("Error fetching data. Please try again.");
    }
  };

  const handleInvestmentClick = async () => {
    try {
      const investmentResponse = await fetch("http://localhost:5000/get_investment_recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ savings: Number(savings), risk_tolerance: "medium" }),
      });

      if (!investmentResponse.ok) throw new Error("Failed to get investment recommendations.");

      const investmentData = await investmentResponse.json();
      setInvestmentRecommendations(Object.entries(investmentData.stocks));
    } catch (error) {
      console.error("Error:", error);
      setInvestmentRecommendations([]);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Planner</h2>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label className="font-medium">Monthly Salary (₹):</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
          required
        />

        <label className="font-medium">Monthly Spendings (comma-separated ₹):</label>
        <input
          type="text"
          value={spendings}
          onChange={(e) => setSpendings(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-200"
          required
        />

        <button
          type="submit"
          className="p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition"
        >
          Get AI Suggestions
        </button>
      </form>

      {/* Results */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700">Results:</h3>
        {savings !== null && <p className="text-gray-700">Your savings: ₹{savings}</p>}
        {aiSuggestion && <p className="text-gray-700">AI Suggestion: {aiSuggestion}</p>}
      </div>

      {/* Investment Button */}
      {showInvestmentButton && (
        <button
          onClick={handleInvestmentClick}
          className="mt-4 p-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Get Investment Recommendations
        </button>
      )}

      {/* Investment Recommendations */}
      {investmentRecommendations.length > 0 && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Investment Recommendations:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {investmentRecommendations.map(([symbol, price], index) => (
              <li key={index}>
                {symbol}: {price}
              </li>
            ))}
          </ul>
        </div>
      )}
     
    </div>
  );
}

export default Suggestion;
