import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '15s', target: 100 },
    { duration: '10s', target: 1200 },
    { duration: '10m', target: 1200 },
    { duration: '2m', target: 1200 },
    { duration: '10s', target: 0 },
  ],
};

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const monthSelector = randomInt(0, 11);
export default function () {
  const url = 'http://localhost:3000/api/room/calendar';
  const payload = JSON.stringify({
    // roomID and userID are hardcoded, will change in a later update,
    // this is to control my testing and Not contaminate my entire DB
    roomID: '10000000',
    userID: '10000000',
    monthIn: `${month[monthSelector]}`,
    monthOut: `${month[monthSelector]}`,
    dayIn: `${randomInt(1, 15)}`,
    dayOut: `${randomInt(15, 31)}`,
    guests: `${randomInt(1, 5)}`,
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
      timeout: 180000,
    },
  };
  http.post(url, payload, params);
  sleep(1);
}
