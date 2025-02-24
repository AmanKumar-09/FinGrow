import React from "react";

const link = [
  {
    line1: "AisaTechDaily",
    line2: "Only around 3% of the Indian population actively invests in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "A survey revealed that 75% of Indians do not have an emergency fund",
  },
  {
    line1: "AisaTechDaily",
    line2: "69% of Indian households struggle with financial insecurity and lack sufficient savings.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Less than 20% of working Indians invest in financial assets like mutual funds or stocks",
  },
  {
    line1: "AisaTechDaily",
    line2: "Only about 2% of Indian investors engage in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "Data indicates that over 95% of Indian traders incur losses in the stock market",
  },
  {
    line1: "AisaTechDaily",
    line2: "58% of Indians who utilized instant loan apps in the past two years were charged annual interest rates exceeding 25%",
  },
  {
    line1: "AisaTechDaily",
    line2: "RBI is concerned about the rapid rise in unsecured lending for consumption.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Thousands of Indian investors lost nearly $100 million in Falcon Invoice Discounting's Ponzi scheme.",
  },
  {
    line1: "AisaTechDaily",
    line2: "SEBI is tackling finance influencers giving misleading investment advice on social media.",
  },
  {
    line1: "AisaTechDaily",
    line2: "Indian banks face rising defaults from over-leveraged retail borrowers, affecting top lenders.",
  },
];

function News() {
  return (
    <div className="flex flex-col items-center justify-center py-10 ">
      <div className="mb-8 font-bold text-3xl text-gray-800">FinGrow in News</div>

      {/* Scrollable Wrapper */}
      <div
        className="w-[80vw] overflow-x-auto scrollbar-hide relative pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex gap-6 w-max px-4">
          {link.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white w-64 h-36 p-4 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <p className="text-sm font-semibold text-gray-700">{item.line1}</p>
              <p className="text-[14px] text-gray-600 mt-2">{item.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
