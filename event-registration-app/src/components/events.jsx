import React from "react";

export default function MyEventsPage({ events }) {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">My Registered Events</h2>
      {events.length === 0 ? (
        <p className="text-gray-500">No events registered yet.</p>
      ) : (
        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-4 border rounded shadow-sm bg-gray-50"
            >
              <h3 className="text-xl font-bold">{event.eventName}</h3>
              <p>Name: {event.attendeeName}</p>
              <p>Email: {event.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
