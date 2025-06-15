import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Event Manager</h1>
      <div className="space-x-4">
        <a href="#" className="hover:underline pr-4">Home</a>
        <a href="#" className="hover:underline">My Events</a>
        <a href="#" className="hover:underline">Register</a>
      </div>
    </nav>
  );
}
