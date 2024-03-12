import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [isMobileFormVisible, setMobileFormVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', start: null, end: null });

  const handleSelect = ({ start, end }) => {
    if (window.innerWidth <= 600) {
      setNewEvent({ title: '', start, end });
      setMobileFormVisible(true);
    } else {
      const title = window.prompt('Event Title:');
      if (title) {
        setEvents((prevEvents) => [
          ...prevEvents,
          { title, start, end },
        ]);
      }
    }
  };

  const handleEventClick = (event) => {
    if (window.innerWidth <= 600) {
      const isConfirmed = window.confirm(`Do you want to delete the event "${event.title}"?`);
      if (isConfirmed) {
        setEvents((prevEvents) => prevEvents.filter((e) => e !== event));
      }
    } else {
      setEvents((prevEvents) => prevEvents.filter((e) => e !== event));
    }
  };

  const handleMobileFormSubmit = (e) => {
    e.preventDefault();
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setMobileFormVisible(false);
  };

  return (
    <div style={{ height: '800px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '20px' }}
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleEventClick}
        views={['month', 'week', 'day']}
        popup
        components={{
          toolbar: CustomToolbar,
        }}
      />
      {isMobileFormVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <form onSubmit={handleMobileFormSubmit} className="bg-white p-4 rounded-md">
            <label className="block mb-2 text-gray-700">Event Title:</label>
            <input
              type="text"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              className="w-full p-2 border rounded-md"
            />
            <button
              type="submit"
              className="mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              Add Event
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const CustomToolbar = (toolbar) => {
  const goToDayView = () => {
    toolbar.onView('day');
  };

  const goToWeekView = () => {
    toolbar.onView('week');
  };

  const goToMonthView = () => {
    toolbar.onView('month');
  };

  return (
    <div className="mb-3 flex justify-between items-center">
      <div>
        <button className="mr-2 px-3 py-2 bg-blue-500 text-white rounded-md" onClick={goToMonthView}>
          Month
        </button>
        <button className="mr-2 px-3 py-2 bg-blue-500 text-white rounded-md" onClick={goToWeekView}>
          Week
        </button>
        <button className="px-3 py-2 bg-blue-500 text-white rounded-md" onClick={goToDayView}>
          Day
        </button>
      </div>
      <div>
        <button
          className="px-3 py-2 bg-blue-500 text-white rounded-md"
          onClick={() => toolbar.onNavigate('TODAY')}
        >
          Today
        </button>
      </div>
    </div>
  );
};

export default EventCalendar;