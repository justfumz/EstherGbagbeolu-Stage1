'use strict';
const day = document.querySelector('.current-day');
const time = document.querySelector('.current-time');
const date = new Date();

//Array that contains the days of the week
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//Since the "getDay()" command returns a number,
//we can directly get the index of the number from our array
const currentDay = weekday[date.getDay()];
day.textContent = currentDay;

const currentTime = date.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
});
time.textContent = currentTime;
