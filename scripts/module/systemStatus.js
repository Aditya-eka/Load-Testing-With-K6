import http from 'k6/http';

export function getAutomation(baseUrl) {
    const res = http.get(`${baseUrl}/api/status/automation/secondary-pre-dispense`);
    return res;
}
export function getMode(baseUrl) {
    const res = http.get(`${baseUrl}/api/status/mode`);
    return res;
}
export function getAction(baseUrl) {
    const res = http.get(`${baseUrl}/api/status/mode/actions`);
    return res;
}