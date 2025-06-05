import { check, sleep } from 'k6';
import { Trend, Counter } from 'k6/metrics';
import {
  getServicingAspiratorZ, getServicingAspiratorZSingle, getServicingDelidderZ, getServicingDispenserZ, getServicingDispenserZSecondary,
  getServicingPlateStageX, getServicingPlateStageY, getServicingPlateStageTilt, getServicingTroughProbeZ, getServicingTroughProbeR, getServicingTroughStirrer,
  getServicingPrimaryDispenser, getServicingSecondaryDispenser, getServicingCleanSource1, getServicingCleanSource2, getServicingCleanSource3,
  getServicingAspiratorPump, getServicingWastePump
} from '../module/servicing.js';

const config = JSON.parse(open('../config/config.json'));
const baseUrl = config.baseUrl;

const apis = [
  { name: 'servicing_motor1', func: getServicingAspiratorZ },
  { name: 'servicing_motor2', func: getServicingAspiratorZSingle },
  { name: 'servicing_motor3', func: getServicingDelidderZ },
  { name: 'servicing_motor4', func: getServicingDispenserZ },
  { name: 'servicing_motor5', func: getServicingDispenserZSecondary },
  { name: 'servicing_motor6', func: getServicingPlateStageX },
  { name: 'servicing_motor7', func: getServicingPlateStageY },
  { name: 'servicing_motor8', func: getServicingPlateStageTilt },
  { name: 'servicing_motor9', func: getServicingTroughProbeZ },
  { name: 'servicing_motor10', func: getServicingTroughProbeR },
  { name: 'servicing_motor11', func: getServicingTroughStirrer },
  { name: 'servicing_peristaltic1', func: getServicingPrimaryDispenser },
  { name: 'servicing_peristaltic2', func: getServicingSecondaryDispenser },
  { name: 'servicing_peristaltic3', func: getServicingCleanSource1 },
  { name: 'servicing_peristaltic4', func: getServicingCleanSource2 },
  { name: 'servicing_peristaltic5', func: getServicingCleanSource3 },
  { name: 'servicing_pump1', func: getServicingAspiratorPump },
  { name: 'servicing_pump2', func: getServicingWastePump },
];

let responseSizeMetric = new Trend('response_size');
let responseTimeMetric = new Trend('response_time');
let responseTimeMetrics = {};
let diagnosisMetrics = {};
let diagnosisResponseTimeMetrics = {};

apis.forEach((api) => {
  responseTimeMetrics[api.name] = new Trend(`response_time_${api.name}`);

  diagnosisMetrics[api.name] = {
    serverBottleneck: new Counter(`diagnosis_server_bottleneck_${api.name}`),
    networkDelay: new Counter(`diagnosis_network_delay_${api.name}`),
    slowReceiving: new Counter(`diagnosis_slow_receiving_${api.name}`),
  };

  diagnosisResponseTimeMetrics[api.name] = {
    serverBottleneck: new Trend(`diagnosis_server_bottleneck_response_time_${api.name}`),
    networkDelay: new Trend(`diagnosis_network_delay_response_time_${api.name}`),
    slowReceiving: new Trend(`diagnosis_slow_receiving_response_time_${api.name}`),
  };
});

const startVUs = __ENV.START_VUS ? parseInt(__ENV.START_VUS) : 100;
const endVUs = __ENV.END_VUS ? parseInt(__ENV.END_VUS) : startVUs + 100;

export const options = {
  tags: { scenario: 'capacity' },
  stages: [
    { duration: '0s', target: startVUs },
    { duration: '1m', target: endVUs },
  ],
  thresholds: {
    response_time: ['max < 3000'],
  },
};

export default function () {
  if (__VU === 1 && __ITER === 0) {
    console.log('');
    const header = ' Capacity Test ';
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
    if (responseTime !== 'N/A') {
      responseTimeMetric.add(responseTime);
      responseTimeMetrics[api.name].add(responseTime);

      if (responseTime >= 3000) {
        let networkTime = (res.timings.connecting || 0) + (res.timings.blocked || 0) + (res.timings.looking_up || 0);
        let serverTime = res.timings.waiting || 0;
        let receiveTime = res.timings.receiving || 0;

        let diagnosis = [];

        if (serverTime > 0.9 * responseTime) {
          diagnosis.push("Server-side bottleneck");
          diagnosisMetrics[api.name].serverBottleneck.add(1);
          diagnosisResponseTimeMetrics[api.name].serverBottleneck.add(responseTime);
        }
        if (networkTime > 300) {
          diagnosis.push("Network delay");
          diagnosisMetrics[api.name].networkDelay.add(1);
          diagnosisResponseTimeMetrics[api.name].networkDelay.add(responseTime);
        }
        if (receiveTime > 300) {
          diagnosis.push("Slow receiving");
          diagnosisMetrics[api.name].slowReceiving.add(1);
          diagnosisResponseTimeMetrics[api.name].slowReceiving.add(responseTime);
        }

        console.error(
          `${api.name} | Iter=${__ITER} | VU=${__VU} | Total=${responseTime.toFixed(2)}ms | Server=${serverTime.toFixed(2)}ms | Network=${networkTime.toFixed(2)}ms | Receive=${receiveTime.toFixed(2)}ms | Diagnosis=${diagnosis.join(',') || 'OK'}`
        );
      }
    }

    if (res.status === 200) {
      if (__VU === 1 && __ITER === 0) {
        console.log(`${api.name} - response time = ${responseTime !== 'N/A' ? responseTime.toFixed(2) : 'N/A'} ms`);
      }
      successApis.push(api.name);
    } else {
      if (__VU === 1 && __ITER === 0) {
        console.error(`${api.name} FAILED with status ${res.status} - response time = ${responseTime !== 'N/A' ? responseTime.toFixed(2) : 'N/A'} ms`);
      }
      errorChecks[`${api.name} - status is ${res.status}`] = () => false;
    }
  });

  if (__VU === 1 && __ITER === 0) {
    console.log('='.repeat(50));
  }

  if (successApis.length > 0) {
    check({}, {
      'Capacity Test Status is 200': () => true,
    });
  }
  if (Object.keys(errorChecks).length > 0) {
    check({}, errorChecks);
  }

  sleep(1);
}
