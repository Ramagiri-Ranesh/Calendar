import { formatDate } from './dateHelpers';

export const getEventsForDate = (events, year, month, day) => {
  const dateStr = formatDate(new Date(year, month, day));
  return events.filter(event => event.date === dateStr);
};

export const checkEventConflicts = (dayEvents) => {
  if (dayEvents.length <= 1) return [];
  
  const conflicts = [];
  
  for (let i = 0; i < dayEvents.length; i++) {
    for (let j = i + 1; j < dayEvents.length; j++) {
      const event1 = dayEvents[i];
      const event2 = dayEvents[j];
      
      const [h1, m1] = event1.time.split(':').map(Number);
      const [h2, m2] = event2.time.split(':').map(Number);
      
      const start1 = h1 * 60 + m1;
      const end1 = start1 + event1.duration;
      const start2 = h2 * 60 + m2;
      const end2 = start2 + event2.duration;
      
      if ((start1 < end2 && end1 > start2)) {
        conflicts.push([event1.id, event2.id]);
      }
    }
  }
  
  return conflicts;
};