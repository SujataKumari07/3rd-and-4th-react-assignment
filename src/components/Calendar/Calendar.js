import React, { useState } from 'react';
import './Calendar.css'; 

function Calendar() {

  const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
  };


  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

 
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);

   
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  
    const daysArray = [];

 
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push('');
    }

  
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    return { daysArray, daysOfWeek };
  };

 
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  const changeMonth = (delta) => {
    
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


