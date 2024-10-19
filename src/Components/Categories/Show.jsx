import React from "react";
import pujan from "/pujan.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { MdFilterList } from "react-icons/md"; // Using Material UI icon library
import { FaEdit } from "react-icons/fa"; // Using edit icon
import { useState } from "react";

export default function Show() {
  const cardsData = Array(9).fill({
    title: "Kaal Sarp Yog Hawan",
    subtitle: "काल सर्प योग हवन",
    image: pujan,
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <div>
          <Link to="/">
            <FaArrowLeft className="h-8 w-8 md:h-10 md:w-10" />
          </Link>
        </div>
        <div>
          <h1 className="text-xl md:text-3xl font-mono font-bold text-center">
            Service Select
          </h1>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-4 space-y-4 md:space-y-0">
        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search"
            className="py-3 w-full md:w-96 border border-slate-300 rounded-xl"
          />
        </div>
        <div>
          <div className="relative inline-block">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="flex items-center bg-white border rounded-full px-4 py-2 shadow hover:shadow-lg focus:outline-none"
            >
              <span className="text-gray-500 mr-2">Add filter</span>
              <MdFilterList className="text-gray-500" size={20} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Puja Type 1
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Puja Type 2
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Puja Type 3
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center border shadow-lg shadow-slate-400 overflow-hidden rounded-2xl"
          >
            <img
              src={card.image}
              alt="Puja"
              className="w-full sm:w-1/3 h-40 sm:h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-center w-full">
              <h1 className="font-bold text-base sm:text-lg">{card.title}</h1>
              <p className="text-sm text-gray-500 mb-4">{card.subtitle}</p>

              {/* Add Hours and Price Inputs */}
              <div className="flex flex-col gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Add hours"
                  className="border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Add price"
                  className="border border-gray-300 rounded-md p-2"
                />
              </div>

              {/* Edit Button */}
              <button className="flex items-center text-sm bg-gray-100 text-red-500 px-4 py-1 rounded-md hover:bg-gray-200">
                <FaEdit className="mr-2" />
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="p-4 flex justify-center w-full">
        <Link
          to="/service"
          className="bg-red-500 text-white py-2 px-4 text-center rounded-sm w-full md:w-96"
        >
          Add to my services
        </Link>
      </div>
    </div>
  );
}
