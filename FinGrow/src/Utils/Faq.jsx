import { useState } from "react";

const faqs = [
  { question: "What is your return policy?", answer: "You can return items within 30 days of purchase with a valid receipt." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer worldwide shipping. Additional charges may apply." },
  { question: "How can I track my order?", answer: "Once your order is shipped, you'll receive a tracking number via email." },
  { question: "Do you provide customer support?", answer: "Yes, our support team is available 24/7 via email and chat." },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      
      <div className="w-[80vw]">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-2">
              <button 
                className="w-full text-left flex justify-between items-center text-md font-medium py-2"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
