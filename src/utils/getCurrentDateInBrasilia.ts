import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export function getCurrentDateInBrasilia() {
  const now = new Date();
  const timeZone = 'America/Sao_Paulo';
  const zonedDate = toZonedTime(now, timeZone);

  return format(zonedDate, 'dd-MM-yyyy');
}
