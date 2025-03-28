import { useState, useEffect } from "react";

const FinancialDashboard = () => {
  const [salary, setSalary] = useState("");
  const [houseRent, setHouseRent] = useState("");
  const [electricityBill, setElectricityBill] = useState("");
  const [groceryExpenses, setGroceryExpenses] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [totalSpending, setTotalSpending] = useState(0);
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotalSpending(
      Number(houseRent) + Number(electricityBill) + Number(groceryExpenses) + Number(otherExpenses)
    );
  }, [houseRent, electricityBill, groceryExpenses, otherExpenses]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const spendings = [Number(houseRent), Number(electricityBill), Number(groceryExpenses), Number(otherExpenses)];

    try {
      const response = await fetch("http://localhost:5000/financial_dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ salary: Number(salary), spendings }),
      });

      if (!response.ok) throw new Error("Failed to fetch dashboard data.");

      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error("Error:", error);
      setDashboardData({ error: "Error fetching dashboard data. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">AI-Driven Financial Dashboard</h2>

        {/* Input Form */}
        <form className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Monthly Salary (₹):</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">House Rent (₹):</label>
            <input
              type="number"
              value={houseRent}
              onChange={(e) => setHouseRent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Electricity Bill (₹):</label>
            <input
              type="number"
              value={electricityBill}
              onChange={(e) => setElectricityBill(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Grocery Expenses (₹):</label>
            <input
              type="number"
              value={groceryExpenses}
              onChange={(e) => setGroceryExpenses(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Other Expenses (₹):</label>
            <input
              type="number"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-2">Total Spending (₹):</label>
            <input
              type="number"
              value={totalSpending}
              readOnly
              className="w-full p-3 border border-gray-300 rounded-md bg-gray-100"
            />
          </div>
          <button
            type="submit"
            className="col-span-full p-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition text-lg"
            disabled={loading}
          >
            {loading ? "Loading Dashboard..." : "Generate Dashboard"}
          </button>
        </form>

        {/* Current Savings (Outside the Box) */}
        {dashboardData && (
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">Current Savings</h3>
            {dashboardData.error ? (
              <p className="text-red-600 text-xl">{dashboardData.error}</p>
            ) : (
              <p className="text-4xl text-green-600 font-bold mt-2">₹{dashboardData.savings}</p>
            )}
          </div>
        )}

        {/* Dashboard Display */}
        {dashboardData && !dashboardData.error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Suggestions */}
            <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">AI Suggestions</h3>
              {dashboardData.suggestions ? (
                <ol className="list-decimal list-inside text-gray-700 flex-1">
                  {dashboardData.suggestions
                    .split(". ")
                    .filter((s) => s.trim())
                    .map((suggestion, index) => (
                      <li key={index} className="mb-3 text-base leading-relaxed">{suggestion.trim()}</li>
                    ))}
                </ol>
              ) : (
                <p className="text-gray-500 flex-1">Suggestions not available.</p>
              )}
            </div>

            {/* Financial Analysis */}
            <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Financial Analysis</h3>
              {dashboardData.predicted_savings && dashboardData.analysis ? (
                <div className="flex-1">
                  <p className="text-gray-700 text-lg mb-4">
                    Predicted Savings Next Month: <span className="font-semibold">{dashboardData.predicted_savings}</span>
                  </p>
                  <ol className="list-decimal list-inside text-gray-700">
                    {dashboardData.analysis
                      .split(". ")
                      .filter((s) => s.trim())
                      .map((insight, index) => (
                        <li key={index} className="mb-3 text-base leading-relaxed">{insight.trim()}</li>
                      ))}
                  </ol>
                </div>
              ) : (
                <p className="text-gray-500 flex-1">No analysis available.</p>
              )}
            </div>

            {/* Investment Recommendations */}
            <div className="p-6 bg-white rounded-lg shadow-lg min-h-[300px] flex flex-col lg:col-span-2">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Investment Recommendations</h3>
              {dashboardData.stocks && dashboardData.stocks.length > 0 ? (
                <ul className="list-disc list-inside text-gray-700 flex-1">
                  {dashboardData.stocks.map((stock, index) => (
                    <li key={index} className="mb-3 text-base leading-relaxed">{stock}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 flex-1">No recommendations available.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialDashboard;