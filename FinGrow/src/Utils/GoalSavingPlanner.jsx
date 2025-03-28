
// import React, { useState, useEffect } from "react";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// const GoalSavingPlanner = () => {
//   const [goalAmount, setGoalAmount] = useState("");
//   const [months, setMonths] = useState("");
//   const [monthlySavings, setMonthlySavings] = useState([]); // Array to store month-wise savings
//   const [chartData, setChartData] = useState([]);
//   const [error, setError] = useState("");

//   // Handle individual month saving input
//   const handleMonthlySavingChange = (index, value) => {
//     const newSavings = [...monthlySavings];
//     newSavings[index] = value ? parseFloat(value) || 0 : 0;
//     setMonthlySavings(newSavings);
//   };

//   useEffect(() => {
//     // Validation
//     if (!goalAmount || !months || parseFloat(goalAmount) <= 0 || parseInt(months) <= 0) {
//       setError("Please enter valid goal amount and months");
//       setChartData([]);
//       return;
//     }
//     setError("");

//     // Initialize monthly savings array if empty
//     if (monthlySavings.length !== parseInt(months)) {
//       setMonthlySavings(Array(parseInt(months)).fill(0));
//       return;
//     }

//     let accumulatedSavings = 0;
//     let chartDataPoints = [];

//     monthlySavings.forEach((saving, index) => {
//       accumulatedSavings += saving;
//       const progressPercentage = Math.min((accumulatedSavings / goalAmount) * 100, 100);
//       const targetPercentage = Math.min(((goalAmount / months) * (index + 1) / goalAmount) * 100, 100);

//       chartDataPoints.push({
//         month: `Month ${index + 1}`,
//         actual: progressPercentage,
//         target: targetPercentage,
//       });
//     });

//     setChartData(chartDataPoints);
//   }, [goalAmount, months, monthlySavings]);

//   return (
//     <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 gap-6">
//       {/* Left Side - Input Fields */}
//       <div className="lg:w-1/3 w-full">
//         <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="mr-2">🎯</span> Savings Goal Planner
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Target Amount (₹)
//               </label>
//               <input
//                 type="number"
//                 min="1"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 value={goalAmount}
//                 onChange={(e) => setGoalAmount(e.target.value ? parseFloat(e.target.value) : "")}
//                 placeholder="Enter goal amount"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Duration (Months)
//               </label>
//               <input
//                 type="number"
//                 min="1"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                 value={months}
//                 onChange={(e) => setMonths(e.target.value ? parseInt(e.target.value) : "")}
//                 placeholder="Enter months"
//               />
//             </div>

//             {months > 0 && (
//               <div className="space-y-2 max-h-60 overflow-y-auto">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Monthly Savings (₹)
//                 </label>
//                 {Array.from({ length: parseInt(months) }, (_, i) => (
//                   <input
//                     key={i}
//                     type="number"
//                     min="0"
//                     className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
//                     value={monthlySavings[i] || ""}
//                     onChange={(e) => handleMonthlySavingChange(i, e.target.value)}
//                     placeholder={`Month ${i + 1} saving`}
//                   />
//                 ))}
//               </div>
//             )}
            
//             {error && (
//               <p className="text-red-500 text-sm mt-2">{error}</p>
//             )}
//           </div>

//           {goalAmount && months && (
//             <div className="mt-4 text-sm text-gray-600">
//               Required monthly saving: ₹{(goalAmount / months).toFixed(2)}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Right Side - Chart */}
//       <div className="lg:w-2/3 w-full">
//         <div className="bg-white rounded-xl shadow-lg p-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
//             Savings Progress Tracker
//           </h2>
          
//           <LineChart 
//             width={Math.min(700, window.innerWidth - 100)} 
//             height={400} 
//             data={chartData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//             <XAxis 
//               dataKey="month" 
//               stroke="#6b7280"
//               tick={{ fill: '#6b7280' }}
//             />
//             <YAxis 
//               domain={[0, 150]}
//               tickFormatter={(tick) => `${tick}%`}
//               stroke="#6b7280"
//               tick={{ fill: '#6b7280' }}
//             />
//             <Tooltip
//               formatter={(value) => `₹{value.toFixed(1)}%`}
//               contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
//             />
//             <Legend />
//             <Line
//               type="natural" // Changed to natural for curved line
//               dataKey="target"
//               name="Target Progress"
//               stroke="#3b82f6"
//               strokeWidth={2}
//               strokeDasharray="5 5"
//               dot={{ r: 4 }}
//             />
//             <Line
//               type="natural" // Changed to natural for curved line
//               dataKey="actual"
//               name="Actual Progress"
//               stroke="#10b981"
//               strokeWidth={3}
//               dot={{ r: 6 }}
//             />
//           </LineChart>

//           {chartData.length > 0 && (
//             <div className="mt-4 text-center text-sm text-gray-600">
//               Total Saved: ₹{monthlySavings.reduce((sum, val) => sum + val, 0).toFixed(2)} / 
//               Goal: ₹{goalAmount}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GoalSavingPlanner;



import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const GoalSavingPlanner = () => {
  const [goalAmount, setGoalAmount] = useState("");
  const [months, setMonths] = useState("");
  const [monthlySavings, setMonthlySavings] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [error, setError] = useState("");

  const handleMonthlySavingChange = (index, value) => {
    const newSavings = [...monthlySavings];
    newSavings[index] = value ? parseFloat(value) || 0 : 0;
    setMonthlySavings(newSavings);
  };

  useEffect(() => {
    if (!goalAmount || !months || parseFloat(goalAmount) <= 0 || parseInt(months) <= 0) {
      setError("Please enter valid goal amount and months");
      setChartData([]);
      return;
    }
    setError("");

    if (monthlySavings.length !== parseInt(months)) {
      setMonthlySavings(Array(parseInt(months)).fill(0));
      return;
    }

    let accumulatedSavings = 0;
    let chartDataPoints = [];

    monthlySavings.forEach((saving, index) => {
      accumulatedSavings += saving;
      const progressPercentage = Math.min((accumulatedSavings / goalAmount) * 100, 100);
      const targetPercentage = Math.min(((goalAmount / months) * (index + 1) / goalAmount) * 100, 100);

      chartDataPoints.push({
        month: `Month ${index + 1}`,
        actual: progressPercentage,
        target: targetPercentage,
      });
    });

    setChartData(chartDataPoints);
  }, [goalAmount, months, monthlySavings]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Input Fields */}
          <div className="lg:w-1/3 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-2">🎯</span> Savings Goal Planner
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Target Amount (₹)
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={goalAmount}
                    onChange={(e) => setGoalAmount(e.target.value ? parseFloat(e.target.value) : "")}
                    placeholder="Enter goal amount"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Duration (Months)
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    value={months}
                    onChange={(e) => setMonths(e.target.value ? parseInt(e.target.value) : "")}
                    placeholder="Enter months"
                  />
                </div>

                {months > 0 && (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Monthly Savings (₹)
                    </label>
                    {Array.from({ length: parseInt(months) }, (_, i) => (
                      <input
                        key={i}
                        type="number"
                        min="0"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        value={monthlySavings[i] || ""}
                        onChange={(e) => handleMonthlySavingChange(i, e.target.value)}
                        placeholder={`Month ${i + 1} saving`}
                      />
                    ))}
                  </div>
                )}
                
                {error && (
                  <p className="text-red-500 text-sm mt-2">{error}</p>
                )}
              </div>

              {goalAmount && months && (
                <div className="mt-4  text-green-400  font-bold text-xl">
                  Required monthly saving: ₹{(goalAmount / months).toFixed(2)}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Chart */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Savings Progress Tracker
              </h2>
              
              <LineChart 
                width={Math.min(600, window.innerWidth - 100)} 
                height={400} 
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280"
                  tick={{ fill: '#6b7280' }}
                />
                <YAxis 
                  domain={[0, 150]}
                  tickFormatter={(tick) => `${tick}%`}
                  stroke="#6b7280"
                  tick={{ fill: '#6b7280' }}
                />
                <Tooltip
                  formatter={(value) => `${value.toFixed(1)}%`}
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                />
                <Legend />
                <Line
                  type="natural"
                  dataKey="target"
                  name="Target Progress"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 4 }}
                />
                <Line
                  type="natural"
                  dataKey="actual"
                  name="Actual Progress"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={{ r: 6 }}
                />
              </LineChart>

              {chartData.length > 0 && (
                <div className="mt-4 text-center text-sm text-gray-600">
                  <p>Total Saved: ₹{monthlySavings.reduce((sum, val) => sum + val, 0).toFixed(2)} / Goal: ₹{goalAmount}</p>
                  <div className="mt-2">
                    <p className="font-bold text-xl text-green-400">Monthly Breakdown:</p>
                    <div className="grid grid-cols-2 gap-2 mt-1 max-h-40  overflow-y-auto">
                      {monthlySavings.map((saving, index) => (
                        <p key={index}>
                          Month {index + 1}: ₹{saving.toFixed(2)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalSavingPlanner;