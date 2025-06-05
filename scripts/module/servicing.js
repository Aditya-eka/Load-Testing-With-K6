import http from 'k6/http';

export function getServicingMotor(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric`);
    return res;
}
export function getServicingAspiratorZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=aspiratorZ`);
    return res;
}
export function getServicingAspiratorZSingle(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=aspiratorZSingle`);
    return res;
}
export function getServicingDelidderZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=delidderZ`);
    return res;
}
export function getServicingDispenserZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=dispenserZ`);
    return res;
}
export function getServicingDispenserZSecondary(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=dispenserZSecondary`);
    return res;
}
export function getServicingPlateStageX(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=plateStageX`);
    return res;
}
export function getServicingPlateStageY(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=plateStageY`);
    return res;
}
export function getServicingPlateStageTilt(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=plateStageTilt`);
    return res;
}
export function getServicingTroughProbeZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=troughProbeZ`);
    return res;
}
export function getServicingTroughProbeR(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=troughProbeR`);
    return res;
}
export function getServicingTroughStirrer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/metric?Kind=troughStirrer`);
    return res;
}
export function getServicingPeristaltic(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric`);
    return res;
}
export function getServicingPrimaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric?Kind=primaryDispenser`);
    return res;
}
export function getServicingSecondaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric?Kind=secondaryDispenser`);
    return res;
}
export function getServicingCleanSource1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric?Kind=cleanSource1`);
    return res;
}
export function getServicingCleanSource2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric?Kind=cleanSource2`);
    return res;
}
export function getServicingCleanSource3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Peristaltic/metric?Kind=cleanSource3`);
    return res;
}
export function getServicingPump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Pump/metric`);
    return res;
}
export function getServicingAspiratorPump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Pump/metric?Kind=aspiratorPump`);
    return res;
}
export function getServicingWastePump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/Pump/metric?Kind=wastePump`);
    return res;
}
export function getServicingMotorSetting(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting`);
    return res;
}
export function getServicingMotorSettingAspiratorZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=aspiratorZ`);
    return res;
}
export function getServicingMotorSettingAspiratorZSingle(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=aspiratorZSingle`);
    return res;
}
export function getServicingMotorSettingDelidderZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=delidderZ`);
    return res;
}
export function getServicingMotorSettingDispenserZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=dispenserZ`);
    return res;
}
export function getServicingMotorSettingDispenserZSecondary(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=dispenserZSecondary`);
    return res;
}
export function getServicingMotorSettingPlateStageX(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=plateStageX`);
    return res;
}
export function getServicingMotorSettingPlateStageY(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=plateStageY`);
    return res;
}
export function getServicingMotorSettingPlateStageTilt(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=plateStageTilt`);
    return res;
}
export function getServicingMotorSettingTroughProbeZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=troughProbeZ`);
    return res;
}
export function getServicingMotorSettingProughProbeR(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=troughProbeR`);
    return res;
}
export function getServicingMotorSettingTroughStirrer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/setting?Kind=troughStirrer`);
    return res;
}
export function getServicingMotorStatus(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status`);
    return res;
}
export function getServicingMotorStatusAspiratorZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=aspiratorZ`);
    return res;
}
export function getServicingMotorStatusAspiratorZSingle(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=aspiratorZSingle`);
    return res;
}
export function getServicingMotorStatusDelidderZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=delidderZ`);
    return res;
}
export function getServicingMotorStatusDispenserZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=dispenserZ`);
    return res;
}
export function getServicingMotorStatusDispenserZSecondary(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=dispenserZSecondary`);
    return res;
}
export function getServicingMotorStatusPlateStageX(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=plateStageX`);
    return res;
}
export function getServicingMotorStatusPlateStageY(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=plateStageY`);
    return res;
}
export function getServicingMotorStatusPlateStageTilt(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=plateStageTilt`);
    return res;
}
export function getServicingMotorStatusTroughProbeZ(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=troughProbeZ`);
    return res;
}
export function getServicingMotorStatusProughProbeR(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=troughProbeR`);
    return res;
}
export function getServicingMotorStatusTroughStirrer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/motor/status?Kind=troughStirrer`);
    return res;
}
export function getServicingAspiratorSingle(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/aspirator/single-head/status`);
    return res;
}
export function getServicingAspiratorValves(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/aspirator/valves/status`);
    return res;
}
export function getServicingStirrer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/stirrer/status`);
    return res;
}
export function getServicingPeristalticSetting(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting`);
    return res;
}
export function getServicingPeristalticSettingPrimaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting?Kind=primaryDispenser`);
    return res;
}
export function getServicingPeristalticSettingSecondaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting?Kind=secondaryDispenser`);
    return res;
}
export function getServicingPeristalticSettingCleanSource1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting?Kind=cleanSource1`);
    return res;
}
export function getServicingPeristalticSettingCleanSource2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting?Kind=cleanSource2`);
    return res;
}
export function getServicingPeristalticSettingCleanSource3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting?Kind=cleanSource3`);
    return res;
}
export function getServicingPeristalticSettingRpm(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm`);
    return res;
}
export function getServicingPeristalticSettingRpmPrimaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm?Kind=primaryDispenser`);
    return res;
}
export function getServicingPeristalticSettingsettingRpmSecondaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm?Kind=secondaryDispenser`);
    return res;
}
export function getServicingPeristalticSettingRpmCleanSource1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm?Kind=cleanSource1`);
    return res;
}
export function getServicingPeristalticSettingRpmCleanSource2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm?Kind=cleanSource2`);
    return res;
}
export function getServicingPeristalticSettingRpmCleanSource3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/setting/rpm?Kind=cleanSource3`);
    return res;
}
export function getServicingPeristalticStatus(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status`);
    return res;
}
export function getServicingPeristalticStatusPrimaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status?Kind=primaryDispenser`);
    return res;
}
export function getServicingPeristalticStatusSecondaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status?Kind=secondaryDispenser`);
    return res;
}
export function getServicingPeristalticStatusCleanSource1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status?Kind=cleanSource1`);
    return res;
}
export function getServicingPeristalticStatusCleanSource2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status?Kind=cleanSource2`);
    return res;
}
export function getServicingPeristalticStatusCleanSource3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/peristaltic/status?Kind=cleanSource3`);
    return res;
}
export function getServicingPumpStatus(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pump/status`);
    return res;
}
export function getServicingPumpStatusApiratorPump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pump/status?Kind=aspiratorPump`);
    return res;
}
export function getServicingPumpStatusWastePump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pump/status?Kind=wastePump`);
    return res;
}
// export function getServicingValveStatus(baseUrl) {
//     const res = http.get(`${baseUrl}/api/servicing/valve/status`);
//     return res;
// }
export function getServicingValveStatusApiratorPump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/valve/status?Kind=aspiratorPump`);
    return res;
}
export function getServicingValveStatusWastePump(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/valve/status?Kind=wastePump`);
    return res;
}
export function getServicingDelidder(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/delidder/pv/status`);
    return res;
}
export function getServicingClean(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/clean-station/source/status`);
    return res;
}
export function getServicingPresenceStatus(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/presence/status`);
    return res;
}
export function getServicingPresenceStatusPlateSensing(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/presence/status?Kind=plateSensing`);
    return res;
}
export function getServicingPresenceStatusFrontTroughSensing(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/presence/status?Kind=frontTroughSensing`);
    return res;
}
export function getServicingPresenceStatusRearTroughSensing(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/presence/status?Kind=rearTroughSensing`);
    return res;
}
export function getServicingPresenceStatusAspiratorHeadLimitSensing(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/presence/status?Kind=aspiratorHeadLimitSensing`);
    return res;
}
export function getServicingPv(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pv/status`);
    return res;
}
export function getServicingPvStatusDelidderVacuum(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pv/status?Kind=delidderVacuum`);
    return res;
}
export function getServicingPvStatusDelidderReservoirVacuum(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pv/status?Kind=delidderReservoirVacuum`);
    return res;
}
export function getServicingPvStatusDelidderPressure(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/pv/status?Kind=delidderPressure`);
    return res;
}
export function getServicingContainerStatus(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status`);
    return res;
}
export function getServicingContainerStatusContainer1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status?Kind=container1`);
    return res;
}
export function getServicingContainerStatusContainer2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status?Kind=container2`);
    return res;
}
export function getServicingContainerStatusContainer3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status?Kind=container3`);
    return res;
}
export function getServicingContainerStatusPbsContainer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status?Kind=pbsContainer`);
    return res;
}
export function getServicingContainerStatusWasteContainer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/status?Kind=wasteContainer`);
    return res;
}
export function getServicingContainertype(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type`);
    return res;
}
export function getServicingContainerTypeContainer1(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type?Kind=container1`);
    return res;
}
export function getServicingContainerTypeContainer2(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type?Kind=container2`);
    return res;
}
export function getServicingContainerTypeContainer3(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type?Kind=container3`);
    return res;
}
export function getServicingContainerTypePbsContainer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type?Kind=pbsContainer`);
    return res;
}
export function getServicingContainerTypeWasteContainer(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/container/type?Kind=wasteContainer`);
    return res;
}
export function getServicingCalibrationRobotAspirator(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/robot-hand/aspirator`);
    return res;
}
export function getServicingCalibrationRobotAspiratorExtended(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/robot-hand/aspirator-extended`);
    return res;
}
export function getServicingCalibrationRobotDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/robot-hand/dispenser`);
    return res;
}
export function getServicingCalibrationRobotSecondaryDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/robot-hand/secondary-dispenser`);
    return res;
}
export function getServicingCalibrationAspirator(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/aspirator`);
    return res;
}
export function getServicingCalibrationAspiratorSingle(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/aspirator-single-head`);
    return res;
}
export function getServicingCalibrationDelidder(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/delidder`);
    return res;
}
export function getServicingCalibrationDispenser(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/dispenser`);
    return res;
}
export function getServicingCalibrationPlate(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/plate-stage`);
    return res;
}
export function getServicingCalibrationTrough(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/trough-station`);
    return res;
}
export function getServicingCalibrationCleanStation(baseUrl) {
    const res = http.get(`${baseUrl}/api/servicing/calibration/clean-station`);
    return res;
}