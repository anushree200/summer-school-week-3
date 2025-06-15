import React, { useState } from "react";
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
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-4">
        <EventRegistrationForm onSubmit={handleAddEvent} />
        <MyEventsPage events={registeredEvents} />
      </main>
      <Footer />
    </div>
  );
}