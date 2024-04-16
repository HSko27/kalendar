import React, { useState, useEffect } from 'react';
import './App.css';
import EventForm from './EventForm';
import EventList from './EventList';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  description: string;
}

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editEvent, setEditEvent] = useState<Event | null>(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]') as Event[];
    setEvents(storedEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
  }, [events]);

  const addEvent = (event: Event) => {
    setEvents([...events, { ...event, id: Date.now() }]);
  };

  const deleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const editEventHandler = (event: Event) => {
    setEditEvent(event);
  };

  const editEventSubmitHandler = (editedEvent: Event) => {
    const updatedEvents = events.map(event => (event.id === editedEvent.id ? editedEvent : event));
    setEvents(updatedEvents);
    setEditEvent(null);
  };

  return (
    <div className="App">
      <h1>Plánovač událostí</h1>
      <EventForm addEvent={addEvent} editEvent={editEvent} editEventSubmit={editEventSubmitHandler} />
      <EventList events={events} deleteEvent={deleteEvent} editEvent={editEventHandler} />
    </div>
  );
};

export default App;
