import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '30s', target: 1500 }, // below normal load
    { duration: '2m', target: 1500 },
    { duration: '1m', target: 400 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  http.get('http://localhost:3000/api/room/calendar/?roomID=10000000');
  sleep(1);
}
