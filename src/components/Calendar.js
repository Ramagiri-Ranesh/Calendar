import React, { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import EventDetails from './EventDetails';
import { eventsData } from '../data/eventsData.js';
import '../styles/Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    setCurrentDate(new Date(year, month + 1));
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="calendar-container">
      <CalendarHeader
        currentDate={currentDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <CalendarGrid
        currentDate={currentDate}
        events={eventsData}
        onDayClick={handleDayClick}
      />

      <EventDetails
        selectedDate={selectedDate}
        currentDate={currentDate}
        events={eventsData}
      />
    </div>
  );
};

export default Calendar;