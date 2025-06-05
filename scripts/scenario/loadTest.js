import { check, sleep } from 'k6';
import { Trend, Counter } from 'k6/metrics';
import { getAbout } from '../module/about.js';
import { getLabwares, getFault, getSensorLevel, getSensorLevelSource, getSensorLevelWaste, getProtocols } from '../module/cellIntegration.js';
import { getLabware } from '../module/labware.js';
import { getTicketing } from '../module/protocolTicketing.js';
import { getProtocolTemplated, getProtocolUser, getProtocolAspirateFlow, getProtocolAspirateNozzle } from '../module/protocol.js';
import { getProtocolAspirateDelay, getProtocolDispenseFlow } from '../module/protocol.js';

const config = JSON.parse(open('../config/config.json'));
const baseUrl = config.baseUrl;

const apis = [
  { name: 'about', func: getAbout },
  { name: 'labwares', func: getLabwares },
  { name: 'sensor_level', func: getSensorLevel },
  { name: 'sensor_level_source', func: getSensorLevelSource },
  { name: 'sensor_level_waste', func: getSensorLevelWaste },
  { name: 'protocols', func: getProtocols },
  { name: 'labware', func: getLabware },
  { name: 'fault', func: getFault },
  { name: 'ticketing', func: getTicketing },
  { name: 'protocol_templated', func: getProtocolTemplated },
  { name: 'protocol_user', func: getProtocolUser },
  { name: 'protocol_aspirate_flow', func: getProtocolAspirateFlow },
  { name: 'protocol_aspirate_nozzle', func: getProtocolAspirateNozzle },
  { name: 'protocol_aspirate_delay', func: getProtocolAspirateDelay },
  { name: 'protocol_dispanse_flow', func: getProtocolDispenseFlow },
];

let responseSizeMetric = new Trend('response_size');

export const options = {
  tags: {
    scenario: 'load',
  },
  stages: [
    { duration: '15m', target: 1500 },
    { duration: '5m', target: 1500 },
    { duration: '5m', target: 1000 },
    { duration: '3m', target: 500 },
    { duration: '3m', target:  0 },
  ],
};

export default function () {

  const now = new Date();
  const offsetInHours = 7;
  const localTime = new Date(now.getTime() + offsetInHours * 3600000);
  const formattedTime =
    localTime.getHours().toString().padStart(2, '0') + ':' +
    localTime.getMinutes().toString().padStart(2, '0') + ':' +
    localTime.getSeconds().toString().padStart(2, '0');

    if (__VU === 1 && __ITER === 0) {
      console.log('');
      const header = ' Load Test ';
      const totalLength = 50;
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
        console.log(`Date Time:${formattedTime} - ${api.name} - response time: ${responseTime}ms`);
      }
      successApis.push(api.name);
    } else {
      if (__VU === 1 && __ITER === 0) {
        console.error(`Date Time:${formattedTime} - ${api.name} FAILED with status ${res.status} - response time: ${responseTime}ms`);
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
        'load test status is 200': () => true,
      });
    }
    if (Object.keys(errorChecks).length > 0) {
      check({}, errorChecks);
    }
  }

  sleep(1);
}