import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Sidebar</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard" className="text-blue-600">
                Dashboard Home
              </a>
            </li>
            <li className="mb-2">
              <a href="/dashboard/settings" className="text-gray-700">
                Settings
              </a>
            </li>
            {/* Add more sidebar links here */}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
