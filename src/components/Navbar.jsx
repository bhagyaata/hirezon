// src/components/Navbar.jsx
import React from "react";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold">HireZon</div>
      <div className="space-x-4">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">Jobs</button>
        <button className="hover:text-gray-300">About</button>
        <button
          onClick={onLoginClick}
          className="bg-white text-blue-700 px-4 py-1 rounded hover:bg-gray-100"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
