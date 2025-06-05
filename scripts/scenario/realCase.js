import { check, sleep } from 'k6';
import { Trend } from 'k6/metrics';
import { getServicingMotor1, getServicingMotor2, getServicingMotor3, getServicingMotor4,getServicingMotor5} from '../module/servicing.js';
import { getServicingMotor6, getServicingMotor7, getServicingMotor8, getServicingMotor9,getServicingMotor10,getServicingMotor11} from '../module/servicing.js';
import { getServicingPeristaltic1, getServicingPeristaltic2,getServicingPeristaltic3,getServicingPeristaltic4,getServicingPeristaltic5} from '../module/servicing.js';
import {getServicingPump1, getServicingPump2} from '../module/servicing.js';

const config = JSON.parse(open('../config/config.json'));
const baseUrl = config.baseUrl;

const apis = [
  { name: 'servicing_motor1', func: getServicingMotor1 },{ name: 'servicing_motor2', func: getServicingMotor2 },
  { name: 'servicing_motor3', func: getServicingMotor3 },{ name: 'servicing_motor4', func: getServicingMotor4 },
  { name: 'servicing_motor5', func: getServicingMotor5 },{ name: 'servicing_motor6', func: getServicingMotor6 },
  { name: 'servicing_motor7', func: getServicingMotor7 },{ name: 'servicing_motor8', func: getServicingMotor8 },
  { name: 'servicing_motor9', func: getServicingMotor9 },{ name: 'servicing_motor10', func: getServicingMotor10 },
  { name: 'servicing_motor11', func: getServicingMotor11 },
  { name: 'servicing_peristaltic1', func: getServicingPeristaltic1},{ name: 'servicing_peristaltic2', func: getServicingPeristaltic2 },
  { name: 'servicing_peristaltic3', func: getServicingPeristaltic3},{ name: 'servicing_peristaltic4', func: getServicingPeristaltic4},
  { name: 'servicing_peristaltic5', func: getServicingPeristaltic5},
  { name: 'servicing_pump1', func: getServicingPump1},{ name: 'servicing_pump2', func: getServicingPump2},
];

let responseSizeMetric = new Trend('response_size');

export const options = {
  tags: {
    scenario: 'realCase',
  },
  stages: [
    { duration: '10m', target: 1000 },
    { duration: '2m', target: 1000 },
    { duration: '8m', target: 0 },
  ],
};

export default function () {

    if (__VU === 1 && __ITER === 0) {
      console.log('');
      const header = ' Real Case ';
      const totalLength = 56;
      const remainingLength = totalLength - header.length;
      const sideLength = Math.floor(remainingLength / 2);
      const left = '='.repeat(sideLength);
      const right = '='.repeat(remainingLength - sideLength);
      console.log(`${left}${header}${right}`);
    }

  let successApis = [];
  let errorChecks = {};

  apis.forEach((api) => {
    let res = api.func(baseUrl);
    let responseSize = res.body ? res.body.length : 0;
    responseSizeMetric.add(responseSize);

    let responseTime = res.timings && res.timings.duration ? res.timings.duration : 'N/A';
    if (res.status === 200) {
      if (__VU === 1 && __ITER === 0) {
        console.log(`${api.name} - response time: ${responseTime}ms`);
      }
      successApis.push(api.name);
    } else {
      if (__VU === 1 && __ITER === 0) {
        console.error(`${api.name} FAILED with status ${res.status} - response time: ${responseTime}ms`);
      }
      errorChecks[`${api.name} - status is ${res.status}`] = () => false;
    }
  });

  if (__VU === 1 && __ITER === 0) {
    const totalLength = 50;
    console.log('='.repeat(totalLength));
  }

  if (__VU === 1 && __ITER === 0) {
    if (successApis.length > 0) {
      check({}, {
        'Real Case status is 200': () => true,
      });
    }
    if (Object.keys(errorChecks).length > 0) {
      check({}, errorChecks);
    }
  }

  sleep(1);
}