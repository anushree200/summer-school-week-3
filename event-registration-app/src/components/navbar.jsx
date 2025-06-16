import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Event Manager</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline pr-4">Home</Link>
        <Link to="/my-events" className="hover:underline">My Events</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
}

