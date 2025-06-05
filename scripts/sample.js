import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 10, // Number of virtual users
  duration: '10s', // Test duration
};

export default function () {
  let res = http.get('https://test.k6.io'); // Replace with your target URL
  console.log(JSON.stringify(res, null, 2));

  check(res, {
    'is status 200': (r) => r.status === 200, // Ensure response is 200 OK
    'response time < 500ms': (r) => r.timings.duration < 500, // Ensure fast response
  });

  sleep(1); // Simulate user wait time before next request
}