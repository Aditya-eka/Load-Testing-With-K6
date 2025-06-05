import http from 'k6/http';

export function getAnalysis(baseUrl) {
    const res = http.get(`${baseUrl}/api/analysis/protocol-error`);
    return res;
}