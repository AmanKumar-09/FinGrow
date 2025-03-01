import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Chatbot from "./ChatBot.jsx";

function Insurance() {
  const [phone, setPhone] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  
  // ✅ Ensure reCAPTCHA is initialized once
  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
        size: "invisible", // Use "normal" if you want a visible reCAPTCHA
        callback: (response) => {
          console.log("reCAPTCHA Solved:", response);
        },
        "expired-callback": () => {
          console.log("reCAPTCHA Expired, Reset Required");
        },
      });
      window.recaptchaVerifier.render();
    }
  }, []);

  const sendOtp = async () => {
    if (!phone.startsWith("+")) {
      alert("Please enter a valid phone number including the country code (e.g., +91 for India, +1 for USA)");
      return;
    }
    
    try {
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      console.log("OTP Sent:", confirmation);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="min-w-[300px] text-center">
        {/* ✅ Ensure user inputs international phone number */}
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={(value) => setPhone("+" + value)}
          inputStyle={{ width: "100%", padding: "10px" }}
        />

        <button onClick={sendOtp} className="bg-blue-700 rounded-md p-2 mt-4">
          Send OTP
        </button>

        {/* ✅ Ensure reCAPTCHA div exists */}
        <div id="recaptcha"></div>

        <div className="w-full">
          <input className="w-full mt-4 p-2 rounded-xl bg-gray-100 border border-gray-300" placeholder="Enter OTP" type="number" />
        </div>

        <button className="bg-green-700 rounded-md p-2 mt-4">
          Verify OTP
        </button>
      </div>
      <Chatbot/>
    </div>
  );
}

export default Insurance;
