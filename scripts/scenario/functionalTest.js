import { check, sleep, fail } from 'k6';
import { Trend } from 'k6/metrics';
import { getLabwareMotion } from '../module/labware.js';
import { getAnalysis } from '../module/systemAnalysis.js';
import { getAutomation, getMode, getAction } from '../module/systemStatus.js';

const config = JSON.parse(open('../config/config.json'));
const baseUrl = config.baseUrl;

const apis = [
  { name: 'motion_state', func: getLabwareMotion },
  { name: 'analysis', func: getAnalysis },
  { name: 'automation', func: getAutomation },
  { name: 'mode', func: getMode },
  { name: 'action', func: getAction },
];

const maxVU = 1000;
let responseSizeMetric = new Trend('response_size');

export const options = {
  tags: {
    scenario: 'functional',
  },
  stages: [
    { duration: '5m', target: maxVU },
  ],
  thresholds: {
    response_time: ['max < 3000'],
  },
};

export default function () {
  if (__VU === 1 && __ITER === 0) {
    console.log('');
    const header = ' Functional Test ';
    const totalLength = 50;
    const remainingLength = totalLength - header.length;
    const sideLength = Math.floor(remainingLength / 2);
    const left = '='.repeat(sideLength);
    const right = '='.repeat(remainingLength - sideLength);
    console.log(`${left}${header}${right}`);
  }

  let successApis = [];
  let errorChecks = {};
  let thresholdViolated = false;

  apis.forEach((api) => {
    let res = api.func(baseUrl);
    let responseSize = res.body ? res.body.length : 0;
    responseSizeMetric.add(responseSize);

    let responseTime = res.timings && res.timings.duration ? res.timings.duration : 'N/A';

    if (responseTime !== 'N/A' && responseTime >= 3000) {
      thresholdViolated = true;
      fail(`Response time for ${api.name} (${responseTime}ms) exceeds threshold (3000ms) at iteration ${__ITER}`);
    }

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

  if (__VU === maxVU) {
    console.log(`Iterasi ${__ITER} pada VU terakhir (${maxVU}): ${thresholdViolated ? 'Error terdeteksi' : 'Tidak ada error yang terdeteksi'}`);
  }

  if (__VU === 1 && __ITER === 0) {
    console.log('='.repeat(50));
  }

  if (__VU === 1 && __ITER === 0) {
    if (successApis.length > 0) {
      check({}, {
        'functional test status is 200': () => true,
      });
    }
    if (Object.keys(errorChecks).length > 0) {
      check({}, errorChecks);
    }
  }

  sleep(1);
}
