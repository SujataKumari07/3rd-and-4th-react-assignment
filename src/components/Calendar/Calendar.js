import React, { useState } from 'react';
import './Calendar.css'; // Import CSS file for styling

function Calendar() {
  // Function to get current date
  const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  // Function to get number of days in the current month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to generate an array of days in the current month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

    // Array to hold the names of days
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Fill array with day numbers from 1 to daysInMonth
    const daysArray = [];

    // Fill empty slots at the beginning for days prior to the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push('');
    }

    // Fill array with day numbers
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return { daysArray, daysOfWeek };
  };

  // State variables for current year and month
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const changeMonth = (delta) => {
    // Change current month by delta (delta can be positive or negative)
    let newMonth = currentMonth + delta;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11; // December of previous year
      newYear--;
    } else if (newMonth > 11) {
      newMonth = 0; // January of next year
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Function to get the current day
  const getCurrentDay = () => {
    return new Date().getDate();
  };

  return (
    <div className="calendar">
      <div className="calendar-nav">
        <button onClick={() => changeMonth(-1)}>Previous</button>
        <h2>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
        <button onClick={() => changeMonth(1)}>Next</button>
      </div>
      <div className="calendar-content">
        <div className="days-names">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <div key={index} className="day-name">{day}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {/* Generate grid of days */}
          {generateDaysArray(currentYear, currentMonth).daysArray.map((day, index) => (
            <div key={index} className={`calendar-day ${day === '' ? 'empty' : ''} ${day === getCurrentDay() && currentMonth === new Date().getMonth() ? 'current-day' : ''}`}>
              {day !== '' && <span className="day-number">{day}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;


