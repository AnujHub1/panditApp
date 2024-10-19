import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // FontAwesome edit icon
import profileImagePlaceholder from "/Profile.png"; // Default profile image
import { FaArrowLeft } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function UserRegister() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    profileImage: profileImagePlaceholder, // Default image
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a local URL for preview
      setFormData({ ...formData, profileImage: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending the data to the backend
    console.log("Form Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-36">
      {/* Header Section */}
      <div className="w-full flex justify-start px-4 mx-4 md:px-6 md:mx-6">
        <Link to="/">
          <FaArrowLeft className="h-[40px] w-[30px]" />
        </Link>
      </div>
      {/* Form Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg mt-10">
        <h2 className="text-center text-3xl font-bold mb-6">Profile Details</h2>

        {/* Profile Image with Edit Icon */}
        <div className="relative mb-6">
          <img
            src={formData.profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto "
          />

          {/* Edit Icon (absolute positioning on top of the image) */}
          <label
            htmlFor="profileImageInput"
            className=" bg-gray-800 p-1 rounded-full cursor-pointer top-0 right-48  absolute"
          >
            <FaEdit className="text-white " />
          </label>

          {/* Hidden file input */}
          <input
            id="profileImageInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter contact number"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center flex justify-between ">
            <button
              type="submit"
              className="w-full m-2 bg-blue-600 text-white py-2 rounded-md hover:bg-red-700"
            >
              Edit
            </button>
            <button
              type="submit"
              className="w-full bg-red-600 m-2 text-white py-2 rounded-md hover:bg-red-700"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
