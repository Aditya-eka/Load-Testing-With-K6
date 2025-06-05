import http from 'k6/http';

export function getTicketing(baseUrl) {
    const res = http.get(`${baseUrl}/api/ticketing/progress`);
    return res;
}
// export function getTicketing(baseUrl, unique) {
//     const res = http.get(`${baseUrl}/api/ticketing/progres/${unique}`);
//     return res;
// }