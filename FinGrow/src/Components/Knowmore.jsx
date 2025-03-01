import React from "react";
import { NavLink } from "react-router-dom";

const KnowMore = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">About FinGrow</h1>
      <p className="text-gray-600 text-center mt-2">
        FinGrow is your financial guru, offering smart investment insights, instant loans, and personalized financial planning.
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">Why Choose FinGrow?</h2>
        <ul className="list-disc list-inside text-gray-600 mt-2">
          <li>Instant Loan Approval with minimal documentation.</li>
          <li>Investment Suggestions based on your financial goals.</li>
          <li>Expense Tracker to manage your monthly budget efficiently.</li>
          <li>Credit Score Analysis to help you improve your financial health.</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-700">How It Works?</h2>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          <li>Sign up and complete KYC verification.</li>
          <li>Explore loan options and investment suggestions.</li>
          <li>Track your expenses and get financial advice.</li>
        </ol>
      </div>

      <div className="mt-8 p-6 bg-yellow-100 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Join Us Today!</h2>
        <p className="text-gray-600 mt-2">
          Take control of your financial future with FinGrow. Sign up now and get started on a journey to smart financial management.
        </p>
        <NavLink to={"/Signup"} className="mt-4 px-6 py-2 no-underline bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

export default KnowMore;
