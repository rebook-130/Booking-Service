import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 1200 },
    { duration: '15m', target: 1200 },
    { duration: '10s', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  const url = 'http://localhost:3000/api/room/calendar';
  let payload = JSON.stringify({
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

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const roomId = Math.floor(Math.random() * (10000001 - 1) + 1);
// var url = `http://localhost:3001/api/rooms/${roomId}/photo`;
// var data = JSON.stringify({
//   image_url: `https://house-photos-sdc.s3-us-west-1.amazonaws.com/${Math.floor(Math.random() * (994 - 1) + 1)}.jpg`,
//   description: 'Hi from k6',
// });
// var params = {
//   headers: {
//     'Content-Type': 'application/json',
//     timeout: 180000,
//   },
// };
// check(http.post(url, data, params), {
//   'status is 201': (r) => r.status === 201,
// });
// sleep(1);
