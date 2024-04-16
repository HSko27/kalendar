import React from 'react';
import Event from './Event';

interface EventListProps {
  events: Event[];
  deleteEvent: (id: any) => any;
  editEvent: (event: Event) => void;
}

const EventList: React.FC<EventListProps> = ({ events, deleteEvent, editEvent }) => {
  return (
    <div className="event-list">
      {events.map(event => (
        <Event key={event.id} event={event} deleteEvent={deleteEvent} editEvent={editEvent} />
      ))}
    </div>
  );
};

export default EventList;
