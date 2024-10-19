import React, { useState } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { LuDownload } from "react-icons/lu";
import { FaArrowRightToBracket } from "react-icons/fa6";

export default function Navbar() {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleLinkClick = () => {
    setIsNavigating(true);
  };

  return (
    <div
      className="fixed z-50 m-4 p-3 flex justify-between items-center rounded-lg bg-red-600 h-20 text-white"
      style={{ left: "1rem", right: "1rem" }}
    >
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="mr-6">
        {isNavigating ? (
          <FaArrowRightToBracket className="text-white" />
        ) : (
          <Link to="/register" onClick={handleLinkClick}>
            Don’t have an account?
          </Link>
        )}
      </div>
    </div>
  );
}
