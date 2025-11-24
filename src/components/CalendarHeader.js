import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { monthNames } from '../utils/dateHelpers';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <div className="calendar-header">
      <h1>My Calendar</h1>
      <div className="month-navigation">
        <button onClick={onPrevMonth} className="nav-button">
          <ChevronLeft size={20} />
        </button>
        <span className="current-month">
          {monthNames[month]} {year}
        </span>
        <button onClick={onNextMonth} className="nav-button">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;