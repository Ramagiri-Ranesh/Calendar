import React from 'react';
import { AlertCircle } from 'lucide-react';

const CalendarDay = ({ day, isToday, events, conflicts, onDayClick }) => {
  if (!day) {
    return <div className="calendar-day empty"></div>;
  }

  return (
    <div
      className={`calendar-day ${isToday ? 'today' : ''}`}
      onClick={() => onDayClick(day)}
    >
      <div className="day-number">{day}</div>
      <div className="events-container">
        {events.slice(0, 3).map(event => {
          const isConflicting = conflicts.some(pair => pair.includes(event.id));
          return (
            <div
              key={event.id}
              className={`event-pill ${isConflicting ? 'conflict' : ''}`}
              style={{ backgroundColor: event.color }}
              title={`${event.title} - ${event.time}`}
            >
              <span className="event-title">{event.title}</span>
              {isConflicting && <AlertCircle size={12} />}
            </div>
          );
        })}
        {events.length > 3 && (
          <div className="more-events">+{events.length - 3} more</div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;