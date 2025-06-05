import http from 'k6/http';

export function getProtocolTemplated(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/templated`);
    return res;
}

// export function getProtocolTemplatedContent(baseUrl, id) {
//     const res = http.get(`${baseUrl}/api/protocol/templated/content/${id}`);
//     return res;
// }

// export function getProtocolTemplatedContentParams(baseUrl, id){
//     const res = http.get(`${baseUrl}/api/protocol/templated/content-params/${id}`);
//     return res;
// }
export function getProtocolUser(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/user`);
    return res;
}
// export function getProtocolUserID(baseUrl, id) {
//     const res = http.get(`${baseUrl}/api/user/${id}`);
//     return res;
// }
// export function getProtocolUserExport(baseUrl, id) {
//     const res = http.get(`${baseUrl}/api/user/export/${id}`);
//     return res;
// }
// export function getProtocolDownload(baseUrl, name) {
//     const res = http.get(`${baseUrl}/api/download-log/${name}`);
//     return res;
// }
// export function getProtocolValidationAspirate(baseUrl, labwereId) {
//     const res = http.get(`${baseUrl}/api/aspirate-all/${labwereId}`);
//     return res;
// }
// export function getProtocolTilt(baseUrl, labwereId) {
//     const res = http.get(`${baseUrl}/api/tilt/${labwereId}`);
//     return res;
// }
export function getProtocolAspirateFlow(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/profile/aspirate-flow-rate`);
    return res;
}
export function getProtocolAspirateNozzle(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/profile/aspirate-nozzle-travel-rate`);
    return res;
}
export function getProtocolAspirateDelay(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/profile/aspirate-delay`);
    return res;
}
export function getProtocolDispenseFlow(baseUrl) {
    const res = http.get(`${baseUrl}/api/protocol/profile/dispense-flow-rate`);
    return res;
}
//can add check for checking res result here