import React from 'react';
import { useParams } from 'react-router-dom';

function CalendarDays() {
  const { month } = useParams();
  const monthNumber = new Date(Date.parse(month + " 1, 2024")).getMonth();
  const firstDayOfMonth = new Date(new Date().getFullYear(), monthNumber, 1);
  const lastDayOfMonth = new Date(new Date().getFullYear(), monthNumber + 1, 0);

  const daysOfMonth = [];
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    daysOfMonth.push(i);
  }

  const firstDayOfWeek = firstDayOfMonth.getDay();

  const emptyCells = new Array(firstDayOfWeek).fill(null);

  return (
    <div>
      <h2>{month}</h2>
      <div className="calendar-days-grid grid grid-cols-7 gap-2 text-white">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(dayOfWeek => (
          <div key={dayOfWeek} className="day-of-week">{dayOfWeek}</div>
        ))}
        {emptyCells.map((_, index) => (
          <div key={`empty-${index}`} className="empty-cell"></div>
        ))}
        {daysOfMonth.map((day, index) => (
          <div key={index} className="day">{day}</div>
        ))}
      </div>
    </div>
  );
}

export default CalendarDays;
