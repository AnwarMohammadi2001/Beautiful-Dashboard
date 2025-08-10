// src/components/Sidebar.jsx
import { LogOut } from "lucide-react";
import React, { useState } from "react";
import { BiLayer } from "react-icons/bi";
import {
  FaHome,
  FaEnvelope,
  FaUser,
  FaCog,
  FaCalendarAlt,
  FaTasks,
} from "react-icons/fa";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Message", icon: <FaEnvelope /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Calendar", icon: <FaCalendarAlt /> },
    { name: "Tasks", icon: <FaTasks /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <aside
      className={`bg-neutral-800 flex flex-col relative justify-between shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-24 items-center"
      }`}
    >
      {/* Top section with toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-x-1">
          <BiLayer size={34} className="text-amber-500" />
          {isOpen && (
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
          )}
        </div>
        {/* <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-amber-500 bg-amber-50 p-1 rounded-full transition absolute -right-3"
        >
          {isOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </button> */}
      </div>

      {/* Menu items */}
      <div className="w-full">
        <ul className="mt-6 flex-1 justify-center ">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`relative group flex items-center justify-center gap-3 mb-3 cursor-pointer transition-colors px-4 py-2 duration-200 ${
                activeItem === item.name
                  ? "text-amber-500"
                  : "hover:text-amber-500 text-gray-400"
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              {/* Left border as separate element */}
              <div
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full transition-all duration-300 ${
                  activeItem === item.name
                    ? "bg-amber-500 rounded-r-full"
                    : "bg-transparent"
                }`}
              ></div>

              <span className="text-2xl">{item.icon}</span>
              {/* {isOpen && <span>{item.name}</span>} */}

              {/* Tooltip */}
              {!isOpen && (
                <span className="absolute left-full ml-1 whitespace-nowrap px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div
        className="relative group flex items-center gap-x-1 text-gray-400 hover:text-amber-500 cursor-pointer p-4 transition"
        onClick={() => console.log("Logout clicked")}
      >
        <LogOut className="text-2xl" />
        {isOpen && <span>Logout</span>}

        {/* Tooltip */}
        {!isOpen && (
          <span className="absolute left-full ml-2 whitespace-nowrap px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition">
            Logout
          </span>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
