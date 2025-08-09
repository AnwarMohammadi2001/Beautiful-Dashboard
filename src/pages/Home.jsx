import React from "react";
import { SignInButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 px-4">
      <h1 className="text-4xl font-extrabold mb-2 text-gray-900">
        Welcome to My Dashboard
      </h1>
      <p className="mb-8 text-gray-600 max-w-md text-center">
        Please log in to access your personalized dashboard and manage your
        account.
      </p>

      <SignInButton mode="modal" redirectUrl="/dashboard">
        <button
          aria-label="Sign in to dashboard"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Log In
        </button>
      </SignInButton>
    </div>
  );
}
