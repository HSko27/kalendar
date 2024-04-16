import React from 'react';

interface EventProps {
  event: Event;
  deleteEvent: (id: number) => void;
}

const Event: React.FC<EventProps> = ({ event, deleteEvent }) => {
  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p>Datum: {event.date}</p>
      <p>Čas: {event.time}</p>
      <p>Popis: {event.description}</p>
      <button onClick={() => deleteEvent(event.id)}>Smazat</button>
    </div>
  );
}

export default Event;
