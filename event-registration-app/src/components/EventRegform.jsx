import React, { useState } from "react";
import Button from "./button";

export default function EventRegistrationForm({ onSubmit }) {
  const [eventName, setEventName] = useState("");
  const [attendeeName, setAttendeeName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !attendeeName || !email) {
      alert("Please fill all fields.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }
    onSubmit({ eventName, attendeeName, email });
    alert("Event registered successfully!");
    setEventName("");
    setAttendeeName("");
    setEmail("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
      <input
        className="w-full p-2 border mb-3"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-3"
        placeholder="Attendee Name"
        value={attendeeName}
        onChange={(e) => setAttendeeName(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-3"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button label="Submit" onClick={handleSubmit} />
    </form>
  );
}
