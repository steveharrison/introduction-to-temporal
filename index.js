import { Temporal } from 'temporal-polyfill'

/* Example 1: Noon on a particular date */

const date = Temporal.PlainDate.from('2020-05-14');
const noonOnDate = date.toPlainDateTime(Temporal.PlainTime.from({ hour: 12 }));

console.log('Example 1', {
  expected: '2020-05-14T12:00:00',
  actual: noonOnDate.toString()
}, '\n');

/* Example 2: Date Fragments */

const birthday = Temporal.PlainMonthDay.from('12-15');
const birthdayIn2030 = birthday.toPlainDate({ year: 2030 });

console.log('Example 2', {
  expected: '2030-12-15',
  actual: birthdayIn2030.toString()
}, '\n');

/* Example 3: Math + Timezone support */

const departure = Temporal.ZonedDateTime.from('2020-03-08T11:55:00+08:00[Asia/Hong_Kong]');
const flightTime = Temporal.Duration.from({ minutes: 775 });
const arrival = departure.add(flightTime).withTimeZone('America/Los_Angeles');

console.log('Example 3', {
  expected: '2020-03-08T09:50:00-07:00[America/Los_Angeles]',
  actual: arrival.toString()
}, '\n');

// Calculate the flight time from the two dates

const calculatedFlightTime = departure.until(arrival);
console.log('Flight time', {
  expected: 'PT12H55M', // ISO 8601 notation for durations; 12h 55min = 775 min
  actual: calculatedFlightTime.toString()
}, '\n');

/* Example: What time is it in LA right now? */

const localDateTime = Temporal.Now.zonedDateTime({ timezone: 'Australia/Sydney' });
const remoteDateTime = localDateTime.withTimeZone('America/Los_Angeles');

console.log('Time in LA right now: ', remoteDateTime.toString(), '\n');
