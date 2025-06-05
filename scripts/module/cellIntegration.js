import http from 'k6/http';

export function getLabwares(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/labwares`);
    return res;
}
export function getLabweresId(baseUrl, id) {
    const res = http.get(`${baseUrl}/api/v1/labweres/${id}`);
    return res;
}
export function getFault(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/fault`);
    return res;
}
export function getSensorLevel(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/sensors/levels`);
    return res;
}
export function getSensorLevelSource(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/sensors/levels/source`);
    return res;
}
export function getSensorLevelWaste(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/sensors/levels/waste`);
    return res;
}
export function getProtocols(baseUrl) {
    const res = http.get(`${baseUrl}/api/v1/protocols`);
    return res;
}
/*export function getProtocolId(baseUrl, id) {
    const res = http.get(`${baseUrl}/api/v1/protocol/${id}`);
    return res;
}
export function getProtocolIdParams(baseUrl, id) {
    const res = http.get(`${baseUrl}/api/v1/protocol/${id}/api/params`);
    return res;
}
export function getTikets(baseUrl, unique) {
    const res = http.get(`${baseUrl}/api/v1/tikets/${unique}/api/progres`);
    return res;
}*/