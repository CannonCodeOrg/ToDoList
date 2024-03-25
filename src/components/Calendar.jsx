import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
function Calendar() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthClick = (monthIndex) => {
    setSelectedMonth(monthIndex);
  };

  return (
    <div>
      <div className="calendar-grid grid grid-cols-5 grid-rows-3 gap-2 justify-center">
        {months.map((month, index) => (
          <Link
            key={index}
            to={`./CalendarDays/${month}`}
            className="month-button p-1 bg-slate-800 w-35 h-35 rounded-md text-white font-bold flex items-center justify-center hover:text-teal-500 duration-300 hover:shadow-teal-600 border-2 hover:border-teal-600 border-transparent"
          >
            {month}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
