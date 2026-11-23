import { WeddingEvent } from './constants';

/**
 * Formats a date string into an iCalendar compliant UTC timestamp format: YYYYMMDDTHHMMSSZ
 */
function formatDateToIcs(dateString: string): string {
  const date = new Date(dateString);
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

/**
 * Creates and downloads an .ics file for a given wedding event
 */
export function downloadIcsFile(event: WeddingEvent) {
  const startUtc = formatDateToIcs(event.startDateIso);
  const endUtc = formatDateToIcs(event.endDateIso);
  const nowUtc = formatDateToIcs(new Date().toISOString());

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Faizan and Muskan Wedding//Islamic Wedding Invitation//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:wedding-${event.id}-${Date.now()}@faizanwed.com`,
    `DTSTAMP:${nowUtc}`,
    `DTSTART:${startUtc}`,
    `DTEND:${endUtc}`,
    `SUMMARY:${event.title} - Mohammad Faizan & Muskan`,
    `DESCRIPTION:${event.description}\\nDate: ${event.dateText}\\nTime: ${event.timeText}\\nVenue: ${event.venueName}, ${event.venueAddress}`,
    `LOCATION:${event.venueName}, ${event.venueAddress}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:Reminder: ${event.title} of Mohammad Faizan & Muskan tomorrow`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute('download', `${event.id}-faizan-muskan.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Generates a direct Google Calendar event creation URL
 */
export function getGoogleCalendarUrl(event: WeddingEvent): string {
  const startUtc = formatDateToIcs(event.startDateIso);
  const endUtc = formatDateToIcs(event.endDateIso);
  const title = encodeURIComponent(`${event.title} - Mohammad Faizan & Muskan`);
  const details = encodeURIComponent(
    `You are cordially invited to celebrate the ${event.title} of Mohammad Faizan & Muskan.\n\nDate: ${event.dateText}\nTime: ${event.timeText}\nVenue: ${event.venueName}, ${event.venueAddress}\n\nYour presence and duas are warmly requested!`
  );
  const location = encodeURIComponent(`${event.venueName}, ${event.venueAddress}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startUtc}/${endUtc}&details=${details}&location=${location}`;
}
