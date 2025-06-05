import http from 'k6/http';

export function getAbout(baseUrl){
    const res = http.get(`${baseUrl}/about`);
    return res;
}
