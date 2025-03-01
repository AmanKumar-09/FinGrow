import React from 'react';
import img3d from '../assets/img/img3d.gif';
import bodyimg2 from "../assets/img/bodyimg2.png";
import personalloan from "../assets/img/personalloan.jpg";

const Body = () => {
  return (
    <div className="px-32 mt-5">
      
      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="h-96 rounded-xl p-6 flex items-center justify-center shadow-lg">
          <img src={img3d} className="h-full w-full object-cover rounded-lg" alt="3D Illustration" />
        </div>
        <div className="rounded p-6 pt-16 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Empowering Your Financial Growth!</h1>
          <p className="text-gray-600 leading-relaxed">
            Take control of your financial future with smart investment insights, instant loan options,
            and expert financial planning. Whether you're looking to grow your wealth, manage your expenses, 
            or lend money to earn interest, our platform provides the best solutions tailored to your needs.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl mt-4 transition-all">
            Know Us
          </button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <div className="rounded p-6 pt-16 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Personalized Financial Planning Made Easy!</h1>
          <p className="text-gray-600 leading-relaxed">
            Financial success starts with a solid plan! Our platform helps you track your income, 
            manage expenses, and discover smart saving opportunities. Get personalized insights 
            on budgeting, debt management, and investment strategies that suit your lifestyle.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl mt-4 transition-all">
            Know Us
          </button>
        </div>
        <div className="h-96 rounded-lg p-6 flex items-center justify-center shadow-lg">
          <img src={bodyimg2} className="h-full w-full object-cover rounded-lg" alt="Financial Planning" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
        <div className="h-96 rounded-lg p-6 flex items-center justify-center shadow-lg">
          <img src={personalloan} className="h-full w-full object-cover rounded-lg" alt="Loan Offers" />
        </div>
        <div className="rounded p-6 pt-16 shadow-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Take and Give Loans</h1>
          <p className="text-gray-600 leading-relaxed">
            Need a loan? Our platform allows you to apply for loans easily based on your credit score. 
            If you have a good credit score, you can also offer loans to others with secure interest-based returns.
          </p>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl mt-4 transition-all">
            Know Us
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Body;
