import React from 'react';
import { Link } from 'react-router-dom';

function Calendar() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentYear = new Date().getFullYear();

  const handleMonthClick = (monthIndex) => {
   //Przejscie do miesiaca(pokazanie wszystkich dni)
  };

  const renderMonthGrid = () => {
    return (
      <div className="calendar-grid grid grid-col-5 grid-row-3 flex gap-6 justify-center">
        {months.map((month, index) => (
          <button
            key={index}
            onClick={() => handleMonthClick(index)}
            className="month-button p-2 flex h-100 w-90 font-bold text-white rounded items-center justify-center"
          >
            {month}
          </button>
        ))}
      </div>
    );
  };
  return (
    <div>
      {renderMonthGrid()}
    </div>
  );
}

export default Calendar;