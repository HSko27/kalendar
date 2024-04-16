import React from 'react';
import Event from './Event';

interface EventListProps {
  events: Event[];
  deleteEvent: (id: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, deleteEvent }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <Event key={event.id} event={event} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}

export default EventList;
