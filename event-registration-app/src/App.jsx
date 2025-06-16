import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import EventRegistrationForm from "./components/EventRegform";
import MyEventsPage from "./components/events";
import "./index.css";

export default function App() {
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const handleAddEvent = (eventData) => {
    setRegisteredEvents((prevEvents) => [...prevEvents, eventData]);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route
              path="/"
              element={
                <EventRegistrationForm onSubmit={handleAddEvent} />
              }
            />
            <Route
              path="/register"
              element={
                <EventRegistrationForm onSubmit={handleAddEvent} />
              }
            />
            <Route
              path="/my-events"
              element={
                <MyEventsPage events={registeredEvents} />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
