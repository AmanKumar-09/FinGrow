


// import React from 'react';
// import img3d from '../assets/img/img3d.gif';
// import bodyimg2 from "../assets/img/bodyimg2.png";
// import phoneimage from "../assets/img/phoneimage.png";
// import { NavLink } from 'react-router-dom';

// const Body = () => {
//   return (
//     <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 space-y-24">
      
      
//       {/* Section 1 */}
// <div className="flex flex-col md:flex-row items-center gap-16 ">
//   <div className="md:w-1/2 flex justify-start w-full"> 
//     <img src={img3d} className="w-96 h-96 rounded-md object-cover" alt="3D Illustration" />
//   </div>
//   <div className="md:w-1/2 md:text-left space-y-4">
//     <h1 className="text-4xl font-bold text-gray-900 leading-snug">
//       Empowering Your Financial Growth!
//     </h1>
//     <p className="text-gray-600 text-lg">
//       Take control of your financial future with smart investment insights, instant loan options,
//       and expert financial planning. Our platform provides the best solutions tailored to your needs.
//     </p>
//     <NavLink to={"/KnowMore"} className="inline-block no-underline bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
//       Know Us
//     </NavLink>
//   </div>
// </div>



//       {/* Section 2 */}
//       <div className="flex flex-col md:flex-row-reverse items-center gap-16 ">
//         <div className="md:w-1/2 flex justify-end">
//           <img src={bodyimg2} className="w-96 h-96 rounded-md object-cover" alt="Financial Planning" />
//         </div>
//         <div className="md:w-1/2  md:text-left space-y-4">
//           <h1 className="text-4xl font-bold text-gray-900 leading-snug">
//             Personalized Financial Planning Made Easy!
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Financial success starts with a solid plan! Our platform helps you track your income, 
//             manage expenses, and discover smart saving opportunities.
//           </p>
//           <NavLink to={"/FinancialFreedom"} className="inline-block no-underline bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
//             Know Us
//           </NavLink>
//         </div>
//       </div>

//       {/* Section 3 */}
//       <div className="flex flex-col md:flex-row items-center gap-16 ">
//         <div className="md:w-1/2 flex justify-left">
//           <img src={phoneimage} className="w-96 h-[550px] rounded-md object-cover " alt="Loan Offers" />
//         </div>
//         <div className="md:w-1/2  md:text-left space-y-4">
//           <h1 className="text-4xl font-bold text-gray-900 leading-snug">
//             Getting Started with a Personalized Financial Plan
//           </h1>
//           <ol className="mt-6 space-y-6 text-left">
//             <li className="flex items-start gap-4">
//               <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">1</span>
//               <p className="font-semibold text-gray-900 text-lg">Let us know your financials</p>
//             </li>
//             <li className="flex items-start gap-4">
//               <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">2</span>
//               <p className="font-semibold text-gray-900 text-lg">Define your key life goals</p>
//             </li>
//             <li className="flex items-start gap-4">
//               <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">3</span>
//               <p className="font-semibold text-gray-900 text-lg">Get a plan to achieve your life goals</p>
//             </li>
//             <li className="flex items-start gap-4">
//               <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">4</span>
//               <div>
//                 <p className="font-semibold text-gray-900 text-lg">Act & course correct when needed</p>
//                 <p className="text-gray-600 text-md">
//                   Personalized advice & course corrections to achieve your goals.
//                 </p>
//               </div>
//             </li>
//           </ol>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Body;














import React from 'react';
import { motion } from 'framer-motion';
import img3d from '../assets/img/img3d.gif';
import bodyimg2 from "../assets/img/bodyimg2.png";
import phoneimage from "../assets/img/phoneimage.png";
import { NavLink } from 'react-router-dom';

const Body = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 space-y-24">
      {/* Section 1 */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-16"
        whileHover={{ x: -10, scale: 1.05, transition: { duration: 0.3 } }}
      >
        <div className="md:w-1/2 flex justify-start w-full"> 
          <img src={img3d} className="w-96 h-96 rounded-md object-cover" alt="3D Illustration" />
        </div>
        <div className="md:w-1/2 md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">Empowering Your Financial Growth!</h1>
          <p className="text-gray-600 text-lg">
            Take control of your financial future with smart investment insights, instant loan options, and expert financial planning.
          </p>
          <NavLink to={"/KnowMore"} className="inline-block no-underline bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
            Know Us
          </NavLink>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div 
        className="flex flex-col md:flex-row-reverse items-center gap-16"
        whileHover={{ x: 10, scale: 1.05, transition: { duration: 0.3 } }}
      >
        <div className="md:w-1/2 flex justify-end">
          <img src={bodyimg2} className="w-96 h-96 rounded-md object-cover" alt="Financial Planning" />
        </div>
        <div className="md:w-1/2 md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">Personalized Financial Planning Made Easy!</h1>
          <p className="text-gray-600 text-lg">Financial success starts with a solid plan! Track your income, manage expenses, and discover smart saving opportunities.</p>
          <NavLink to={"/FinancialFreedom"} className="inline-block no-underline bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-2 rounded-2xl text-lg transition-all">
            Know Us
          </NavLink>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div 
        className="flex flex-col md:flex-row items-center gap-16"
        whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
      >
        <div className="md:w-1/2 flex justify-left">
          <img src={phoneimage} className="w-96 h-[550px] rounded-md object-cover" alt="Loan Offers" />
        </div>
        <div className="md:w-1/2 md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 leading-snug">Getting Started with a Personalized Financial Plan</h1>
          <ol className="mt-6 space-y-6 text-left">
            {["Let us know your financials", "Define your key life goals", "Get a plan to achieve your life goals", "Act & course correct when needed"].map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full font-semibold">{index + 1}</span>
                <p className="font-semibold text-gray-900 text-lg">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </div>
  );
};

export default Body;