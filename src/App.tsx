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

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events') || '[]') as Event[];
    if (storedEvents) {
      setEvents(storedEvents);
    }
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

  return (
    <div className="App">
      <h1>Plánovač událostí</h1>
      <EventForm addEvent={addEvent} />
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
}

export default App;
