// src/components/Sidebar.jsx
import React from "react";
import { FiBell } from "react-icons/fi";

const messages = [
  {
    id: 1,
    name: "Alice",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "Hey! Can we discuss the project update?",
  },
  {
    id: 2,
    name: "Bob",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "Sent you the files yesterday. Please check.",
  },
  {
    id: 3,
    name: "Clara",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Looking forward to our meeting next week!",
  },
];

export default function Profile() {
  return (
    <section className=" text-white bg-neutral-800 flex flex-col h-screen">
      {/* Top bar: notification, select, profile */}
      <div className="flex justify-between  items-center w-full">
        {/* Notification icon */}
        <div>
          <button
            aria-label="Notifications"
            className="relative p-2 rounded-full hover:bg-neutral-700"
          >
            <FiBell className="w-6 h-6" />
            {/* Optional: notification badge */}
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full" />
          </button>
        </div>

        {/* Select dropdown */}
        <div>
          <select
            className="bg-neutral-700 text-white rounded-md py-1 px-3 focus:outline-none"
            defaultValue="standard"
          >
            <option value="standard">Standard</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
          </select>
        </div>

        {/* User profile image */}
      </div>

      {/* User position */}
      <div className="mb-4 text-center flex flex-col mt-10 items-center">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover"
        />
        <p className="text-lg font-semibold py-1">Tyron Wilson</p>
        <p className="text-xs text-neutral-300">Developer</p>
      </div>

      {/* Button */}
      <button className="mb-6 bg-blue-600 hover:bg-blue-700 transition py-2 rounded-md font-semibold">
        Action Button
      </button>

      {/* Two sections: Total Review & Expenses */}
      <div className="flex justify-between mb-6 text-center">
        <div className="w-1/2 pr-3 border-r border-neutral-700">
          <h3 className="text-lg font-bold">120</h3>
          <p className="text-sm text-neutral-400">Total Reviews</p>
        </div>
        <div className="w-1/2 pl-3">
          <h3 className="text-lg font-bold">$4,350</h3>
          <p className="text-sm text-neutral-400">Expenses</p>
        </div>
      </div>

      {/* Messages section */}
      <div className="flex-1 overflow-auto">
        <h3 className="text-xl font-semibold mb-4">Messages</h3>
        <ul className="space-y-4">
          {messages.map(({ id, name, image, message }) => (
            <li key={id} className="flex items-center space-x-3">
              <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-neutral-400 truncate max-w-[150px]">
                  {message}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
