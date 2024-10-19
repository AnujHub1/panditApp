import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import left from "/left.png"; // Left-side image
import right from "/right.png"; // Right-side image

export default function OTP() {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const mobile = searchParams.get("mobile"); // Retrieve mobile number from URL

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement OTP verification logic here
    console.log("Entered OTP:", otp);
    // Redirect to dashboard or further steps on successful OTP validation
  };

  return (
    <div className="flex justify-between items-center min-h-screen bg-gray-100">
      {/* Left Image Section */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={left}
          alt="Left side visual"
          className="h-full w-full object-cover"
        />
      </div>

      {/* OTP Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Verify OTP</h1>
        <p className="text-gray-700 mb-4">We sent an OTP to {mobile}</p>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* OTP Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">
              Enter OTP
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Image Section */}
      <div className="hidden lg:block w-1/2 h-full flex justify-center items-center">
        <img
          src={right}
          alt="Right side visual"
          className="h-[300px] w-[300px] object-contain"
        />
      </div>
    </div>
  );
}
