// src/components/Navbar.jsx
import React, { useState } from "react";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also add logic here to toggle actual theme (e.g., add/remove a class on body)
  };

  return (
    <nav className={`flex items-center justify-between py-1 `}>
      <div className="flex items-center gap-x-10">
        {/* Site Name */}
        <div className="text-2xl text-gray-400 font-bold">Dashboard</div>

        {/* Search bar */}
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search..."
            className={`w-[350px] pl-10 pr-4 py-2 rounded-full bg-neutral-800 focus:outline-none `}
          />
          <FiSearch
            className={`absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none `}
          />
        </div>
      </div>

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        aria-label="Toggle Dark Mode"
        className="ml-4 p-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? (
          <FiSun className="text-yellow-400 w-6 h-6" />
        ) : (
          <FiMoon className="text-blue-600 w-6 h-6" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
