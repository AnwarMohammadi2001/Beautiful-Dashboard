// src/pages/Dashboard.jsx
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Home from "./Home";
import Users from "./Users";
import Settings from "./Settings";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Home");

  const renderComponent = () => {
    switch (activeItem) {
      case "Users":
        return <Users />;
      case "Settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
      <main className="flex-1 bg-gray-50">{renderComponent()}</main>
    </div>
  );
}
