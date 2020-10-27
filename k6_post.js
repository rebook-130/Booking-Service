import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1200 },
    { duration: '15m', target: 1200 },
    { duration: '10s', target: 0 },
  ],
};
// ATM the roomID and userID are hardcoded this will change in a later update
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
export default function () {
  const url = 'http://localhost:3000/api/room/calendar';
  const payload = JSON.stringify({
    roomID: '10000000',
    userID: '10000000',
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
