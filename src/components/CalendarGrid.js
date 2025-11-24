import React from 'react';
import CalendarDay from './CalendarDay';
import { daysOfWeek, isToday, getFirstDayOfMonth, getDaysInMonth } from '../utils/dateHelpers';
import { getEventsForDate, checkEventConflicts } from '../utils/eventHelpers';

const CalendarGrid = ({ currentDate, events, onDayClick }) => {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);

  const renderDays = () => {
    const days = [];
    
    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<CalendarDay key={`empty-${i}`} />);
    }
    
    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
      const dayEvents = getEventsForDate(events, year, month, day);
      const conflicts = checkEventConflicts(dayEvents);
      
      days.push(
        <CalendarDay
          key={day}
          day={day}
          isToday={isToday(day, month, year)}
          events={dayEvents}
          conflicts={conflicts}
          onDayClick={onDayClick}
        />
      );
    }
    
    return days;
  };

  return (
    <div className="calendar-grid">
      {daysOfWeek.map(day => (
        <div key={day} className="weekday-header">
          {day}
        </div>
      ))}
      {renderDays()}
    </div>
  );
};

export default CalendarGrid;