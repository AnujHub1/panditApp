import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Using Font Awesome for the checkmark icon
import { Link } from "react-router-dom";

export default function ServicesUpdated() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white relative">
      {/* Background Decorations */}
      <div className="absolute left-0 top-0 w-40 h-40 md:w-80 md:h-80 bg-[url('/path-to-left-pattern.png')] bg-no-repeat bg-cover"></div>
      <div className="absolute right-0 bottom-0 w-40 h-40 md:w-80 md:h-80 bg-[url('/path-to-right-pattern.png')] bg-no-repeat bg-cover"></div>

      {/* Content */}
      <div className="z-10 flex flex-col justify-center items-center space-y-6 p-4">
        {/* Checkmark Icon */}
        <FaCheckCircle className="text-green-500 text-5xl" />

        {/* Success Message */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Your services have been updated!
        </h1>

        {/* Button */}
        <Link
          to="/show"
          className="px-6 py-3 bg-white border border-gray-400 rounded-md text-gray-700 hover:bg-gray-50 transition"
        >
          Go to my services
        </Link>
      </div>
    </div>
  );
}
