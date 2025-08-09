import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Here you can add your sidebar, header, etc. */}

      {/* Render the main content passed as children */}
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;
