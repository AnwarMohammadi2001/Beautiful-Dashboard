// src/components/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";

export default function Home() {
  return (
    <div className="bg-zinc-900 h-screen flex">
      {/* First section: 70% width */}
      <section className="w-[75%] p-6 border-r border-zinc-700 text-white">
        <Navbar />
        <div className="grid grid-cols-2 gap-5 mt-7">
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800 "></div>
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800 "></div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800"></div>
          <div className="w-full h-[320px]  rounded-2xl bg-neutral-800"></div>
        </div>
      </section>

      {/* Second section: 30% width */}
      <section className="w-[25%] p-6 text-white bg-neutral-800">
        <Profile />
      </section>
    </div>
  );
}
