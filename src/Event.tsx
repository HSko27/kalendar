import React from 'react';

interface EventProps {
  event: any;
  deleteEvent: (id: number) => void;
  editEvent: (event: Event) => void;
}

const Event: React.FC<EventProps> = ({ event, deleteEvent, editEvent }) => {
  return (
    <div className="event">
      <h3>{event.name}</h3>
      <p>Datum: {event.date}</p>
      <p>Čas: {event.time}</p>
      <p>Popis: {event.description}</p>
      <button onClick={() => deleteEvent(event.id)}>Smazat</button>
      <button onClick={() => editEvent(event)}>Upravit</button>
    </div>
  );
};

export default Event;
