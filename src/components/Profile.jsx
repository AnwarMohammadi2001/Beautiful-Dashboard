// src/components/Sidebar.jsx
import React from "react";
import { FiBell } from "react-icons/fi";

const messages = [
  {
    id: 1,
    name: "Alice",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "Hey! Can we discuss the project update?",
    date: "11 Feb",
  },
  {
    id: 2,
    name: "Bob",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "Sent you the files yesterday. Please check.",
    date: "12 Feb",
  },
  {
    id: 3,
    name: "Clara",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "Looking forward to our meeting next week!",
    date: "16 Feb",
  },
  {
    id: 3,
    name: "Zahra",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    message: "Looking forward to our meeting next week!",
    date: "16 Feb",
  },
  {
    id: 3,
    name: "Fatima",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    message: "Looking forward to our meeting next week!",
    date: "16 Feb",
  },
];

export default function Profile() {
  return (
    <section className=" text-white bg-neutral-800 flex flex-col">
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
      <div className="flex items-center justify-center">
        <button className="mb-6 bg-amber-500  transition py-2 px-5 rounded-full font-semibold">
          Upgrade Plane
        </button>
      </div>

      {/* Two sections: Total Review & Expenses */}
      <div className="flex justify-between mb-6 text-center">
        <div className="w-1/2 pr-3 border-r border-neutral-700">
          <h3 className="text-2xl font-bold">$340K</h3>
          <p className="text-sm text-neutral-400">Total Reviews</p>
        </div>
        <div className="w-1/2 pl-3">
          <h3 className="text-2xl font-bold">$4,350</h3>
          <p className="text-sm text-neutral-400">Expenses</p>
        </div>
      </div>

      {/* Messages section */}
      <div className="flex-1 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold">Messages</h3>
          <p>view all</p>
        </div>
        <ul className="space-y-4">
          {messages.map(({ id, name, image, message, date }) => (
            <li key={id} className="flex  justify-between space-x-3">
              <div className="flex items-center  space-x-3">
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
              </div>
              <p className="text-xs text-gray-500">{date}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
