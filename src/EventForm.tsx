import React, { useState, useEffect } from 'react';

interface EventFormProps {
  addEvent: (event: Event) => void;
  editEvent: any | null;
  editEventSubmit: (event: Event) => void;
}

const EventForm: React.FC<EventFormProps> = ({ addEvent, editEvent, editEventSubmit }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editEvent) {
      setName(editEvent.name);
      setDate(editEvent.date);
      setTime(editEvent.time);
      setDescription(editEvent.description);
    }
  }, [editEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !date.trim() || !time.trim() || !description.trim()) return;

    if (editEvent) {
      editEventSubmit({ ...editEvent, name, date, time, description });
    } else {
      addEvent({ id: Date.now(), name, date, time, description });
    }

    setName('');
    setDate('');
    setTime('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Název události" value={name} onChange={e => setName(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <input type="time" value={time} onChange={e => setTime(e.target.value)} />
      <textarea placeholder="Popis události" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">{editEvent ? 'Upravit událost' : 'Přidat událost'}</button>
    </form>
  );
};

export default EventForm;
