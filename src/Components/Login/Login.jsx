import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import left from "/left.png"; // Left-side image
import right from "/right.png"; // Right-side image

export default function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to OTP page with mobile number
    navigate(`/otp?mobile=${mobile}`);
  };

  return (
    <div className="flex justify-between items-center min-h-screen ">
      {/* Left Image Section */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src={left}
          alt="Left side visual"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Login Form Section */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-6">
        <h1 className="text-3xl font-bold text-black mb-6">Log In</h1>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Mobile Number Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">
              Enter Mobile no.
            </label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
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
