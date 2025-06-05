import http from 'k6/http';

export function getLabware(baseUrl) {
    const res = http.get(`${baseUrl}/api/Labware`);
    return res;
}
// export function getLabwareId(baseUrl, id) {
//     const res = http.get(`${baseUrl}/api/Labware/${id}`);
//     return res;
// }
// export function getLabwareExportId(baseUrl, id) {
//     const res = http.get(`${baseUrl}/api/Labware/export/${id}`);
//     return res;
// }
export function getLabwareMotion(baseUrl) {
    const res = http.get(`${baseUrl}/api/labware/motion/state`);
    return res;
}
