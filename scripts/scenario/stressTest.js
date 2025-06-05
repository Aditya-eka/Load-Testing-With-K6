import { check, sleep } from 'k6';
import { Trend, Counter } from 'k6/metrics';
import { getServicingMotor, getServicingPeristaltic, getServicingMotorSetting, getServicingMotorStatus } from '../module/servicing.js';
import { getServicingAspiratorSingle, getServicingAspiratorValves, getServicingStirrer, getServicingPeristalticSetting } from '../module/servicing.js';
import { getServicingPeristalticSettingRpm, getServicingPeristalticStatus, getServicingPumpStatus, getServicingValveStatus } from '../module/servicing.js';
import { getServicingDelidder, getServicingClean, getServicingPresenceStatus, getServicingPv, getServicingContainerStatus } from '../module/servicing.js';
import { getServicingContainertype, getServicingCalibrationRobotAspirator, getServicingCalibrationRobotAspiratorExtended } from '../module/servicing.js';
import { getServicingCalibrationRobotDispenser, getServicingCalibrationRobotSecondaryDispenser, getServicingCalibrationAspirator } from '../module/servicing.js';
import { getServicingCalibrationAspiratorSingle, getServicingCalibrationDelidder, getServicingCalibrationDispenser } from '../module/servicing.js';
import { getServicingCalibrationPlate, getServicingCalibrationTrough, getServicingCalibrationCleanStation } from '../module/servicing.js';

const config = JSON.parse(open('../config/config.json'));
const baseUrl = config.baseUrl;

const apis = [
  { name: 'servicing_motor', func: getServicingMotor },
  { name: 'servicing_peristaltic', func: getServicingPeristaltic },
  { name: 'servicing_motor_setting', func: getServicingMotorSetting },
  { name: 'servicing_motor_status', func: getServicingMotorStatus },
  { name: 'servicing_aspirator_single', func: getServicingAspiratorSingle },
  { name: 'servicing_aspirator_valves', func: getServicingAspiratorValves },
  { name: 'servicing_strirrer', func: getServicingStirrer },
  { name: 'servicing_paristaltic_setting', func: getServicingPeristalticSetting },
  { name: 'servicing_paristaltic_setting_rpm', func: getServicingPeristalticSettingRpm },
  { name: 'servicing_paristaltic_status', func: getServicingPeristalticStatus },
  { name: 'servicing_pump_status', func: getServicingPumpStatus },
  { name: 'servicing_valve_status', func: getServicingValveStatus },
  { name: 'servicing_delidder', func: getServicingDelidder },
  { name: 'servicing_clean', func: getServicingClean },
  { name: 'servicing_presence_status', func: getServicingPresenceStatus },
  { name: 'servicing_pv', func: getServicingPv },
  { name: 'servicing_container_status', func: getServicingContainerStatus },
  { name: 'servicing_container_type', func: getServicingContainertype },
  { name: 'servicing_calibration_robot_aspirator', func: getServicingCalibrationRobotAspirator },
  { name: 'servicing_calibration_robot_aspirator_extended', func: getServicingCalibrationRobotAspiratorExtended },
  { name: 'servicing_calibration_robot_dispenser', func: getServicingCalibrationRobotDispenser },
  { name: 'servicing_calibration_robot_secondary_dispenser', func: getServicingCalibrationRobotSecondaryDispenser },
  { name: 'servicing_calibration_aspirator', func: getServicingCalibrationAspirator },
  { name: 'servicing_calibration_aspirator_single', func: getServicingCalibrationAspiratorSingle },
  { name: 'servicing_calibration_delidder', func: getServicingCalibrationDelidder },
  { name: 'servicing_calibration_dispenser', func: getServicingCalibrationDispenser },
  { name: 'servicing_calibration_plate', func: getServicingCalibrationPlate },
  { name: 'servicing_calibration_trough', func: getServicingCalibrationTrough },
  { name: 'servicing_calibration_clean_station', func: getServicingCalibrationCleanStation },
];
let responseSizeMetric = new Trend('response_size');
export const options = {
  tags: {
    scenario: 'stress',
  },
  stages: [
    { duration: '10m', target: 3000 },
    { duration: '2m', target: 3000 },
    { duration: '5m', target: 0 },
  ],
};

export default function () {

    if (__VU === 1 && __ITER === 0) {
      console.log('');
      const header = ' Stress Test ';
      const totalLength = 54;
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
        'Stress Test status is 200': () => true,
      });
    }
    if (Object.keys(errorChecks).length > 0) {
      check({}, errorChecks);
    }
  }

  sleep(1);
}