// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ activeItem, setActiveItem }) => {
  const menuItems = ["Home", "Users", "Settings"];

  return (
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={`p-2 mb-2 rounded cursor-pointer transition ${
              activeItem === item
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
