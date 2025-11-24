import React from 'react';
import { Clock } from 'lucide-react';
import { monthNames, formatDate } from '../utils/dateHelpers';

const EventDetails = ({ selectedDate, currentDate, events }) => {
  if (!selectedDate) return null;

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const dateStr = formatDate(new Date(year, month, selectedDate));
  const dayEvents = events.filter(event => event.date === dateStr);

  return (
    <div className="event-details">
      <h3>Events on {monthNames[month]} {selectedDate}, {year}</h3>
      {dayEvents.length === 0 ? (
        <p className="no-events">No events scheduled</p>
      ) : (
        <div className="event-list">
          {dayEvents.map(event => (
            <div key={event.id} className="event-card">
              <div 
                className="event-indicator" 
                style={{ backgroundColor: event.color }}
              ></div>
              <div className="event-info">
                <h4>{event.title}</h4>
                <div className="event-time">
                  <Clock size={14} />
                  <span>{event.time} ({event.duration} min)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventDetails;