// src/Calendar.js
import React, { useState } from 'react';
import '../components/Calendar.scss';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay();
};

const Calendar = ({ year }) => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const handleNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth + 1) % 12);
  };

  const handlePreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth - 1 + 12) % 12);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        {/* <button onClick={handlePreviousMonth}>Previous</button> */}
        <h3>{months[currentMonth]} {year}</h3>
        {/* <button onClick={handleNextMonth}>Next</button> */}
      </div>
      <div className="days-of-week">
        {daysOfWeek.map(day => (
            <div key={day} className="day-name">{day}</div>
        ))}
      </div>
      <div className="days">
        {Array(getFirstDayOfMonth(year, currentMonth)).fill(null).map((_, i) => (
            <div key={i} className="day empty"></div>
        ))}
        {Array(getDaysInMonth(year, currentMonth)).fill(null).map((_, i) => (
            <div key={i} className="day">{i + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
