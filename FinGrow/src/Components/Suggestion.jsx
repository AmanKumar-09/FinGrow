import { useState, useEffect } from "react";
import FinlogixWidget from "../Utils/Graphs";

const Suggestion = () => {
  const [salary, setSalary] = useState("");
  const [houseRent, setHouseRent] = useState("");
  const [electricityBill, setElectricityBill] = useState("");
  const [groceryExpenses, setGroceryExpenses] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [savingsGoal, setSavingsGoal] = useState("");
  const [totalSpending, setTotalSpending] = useState(0);
  const [savings, setSavings] = useState(null);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [investmentRecommendations, setInvestmentRecommendations] = useState([]);
  const [showInvestmentButton, setShowInvestmentButton] = useState(false);

  // Calculate total spending whenever any expense changes
  useEffect(() => {
    setTotalSpending(
      Number(houseRent) + Number(electricityBill) + Number(groceryExpenses) + Number(otherExpenses)
    );
  }, [houseRent, electricityBill, groceryExpenses, otherExpenses]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const remainingSavings = Number(salary) - totalSpending - Number(savingsGoal);

    setSavings(remainingSavings); // Directly setting savings in state

    try {
      // AI Suggestions API Call
      const aiResponse = await fetch("http://localhost:5000/ai_suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ savings: remainingSavings }),
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
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Financial Planner</h2>

      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label className="font-medium">Enter Monthly Salary (₹):</label>
        <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} className="p-2 border border-gray-300 rounded-md" required />

        <label className="font-medium">Enter House Rent (₹):</label>
        <input type="number" value={houseRent} onChange={(e) => setHouseRent(e.target.value)} className="p-2 border border-gray-300 rounded-md" required />

        <label className="font-medium">Enter Electricity Bill (₹):</label>
        <input type="number" value={electricityBill} onChange={(e) => setElectricityBill(e.target.value)} className="p-2 border border-gray-300 rounded-md" required />

        <label className="font-medium">Enter Grocery Expenses (₹):</label>
        <input type="number" value={groceryExpenses} onChange={(e) => setGroceryExpenses(e.target.value)} className="p-2 border border-gray-300 rounded-md" required />

        <label className="font-medium">Enter Other Expenses (₹):</label>
        <input type="number" value={otherExpenses} onChange={(e) => setOtherExpenses(e.target.value)} className="p-2 border border-gray-300 rounded-md" required />

        <label className="font-medium">Total Spending (₹):</label>
        <input type="number" value={totalSpending} readOnly className="p-2 border border-gray-300 rounded-md bg-gray-100" />

        {/* <label className="font-medium">Enter Savings Goal (₹):</label>
        <input type="number" value={savingsGoal} onChange={(e) => setSavingsGoal(e.target.value)} className="p-2 border border-gray-300 rounded-md" required /> */}

        <button type="submit" className="p-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">
          Get AI Suggestions
        </button>
      </form>

      {/* Results */}
      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="text-lg font-semibold text-gray-700">Results:</h3>
        {savings !== null && <p className="text-gray-700">Your savings: ₹{savings}</p>}
        {/* {aiSuggestion && <p className="text-gray-700">AI Suggestion: {aiSuggestion}</p>} */}

        {aiSuggestion && (
          <div className="text-gray-700">
            <h3 className="font-semibold">AI Suggestion:</h3>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              {aiSuggestion
                .split('. ')
                .filter((suggestion) => suggestion.trim() !== '') // Remove empty suggestions
                .map((suggestion, index) => (
                  <li key={index}>{suggestion.trim()}</li>
                ))}
            </ol>
          </div>
        )}

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
      <FinlogixWidget />
    </div>
  );
};

export default Suggestion;
