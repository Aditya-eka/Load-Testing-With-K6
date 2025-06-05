import http from 'k6/http';
config = JSON.parse(open('../config/config.json'));
const BASE_PATH = 'sequence/plan';

export function getSequencePlan(baseUrl) {
    const response = http.get(`${baseUrl}/${BASE_PATH}`);
}

export function getSequencePlanMeta(baseUrl, name) {
    const response = http.get(`${baseUrl}/${BASE_PATH}/meta/${name}`);
}

export function getSequencePlanStates(baseUrl) {
    const response = http.get(`${baseUrl}/${BASE_PATH}/states`);
}

export function getSequencePlanDownloadLog(baseUrl, name){
    const response = http.get(`${baseUrl}/${BASE_PATH}/download-log/${name}`);
}

export function postSequencePlanRun(baseUrl, name) {
    const payload = JSON.stringify({
        name: `${name}`,
    });

    const header = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = http.post(`${baseUrl}/${BASE_PATH}/run`, payload, header);
}

export function postSequencePlanRunCancel(baseUrl, name){
    const response = http.post(`${baseUrl}/${BASE_PATH}/run/cancel/${name}`);
}

export function putSequencePlanMetaByName(baseUrl, name, paramDto) {
    const payload = JSON.stringify(paramDto);

    const header = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = http.put(`${baseUrl}/${BASE_PATH}/meta/${name}`, payload, header);
}

export function putSequencePlanMeta(baseUrl, paramDto) {
    const payload = JSON.stringify(paramDto);

    const header = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = http.put(`${baseUrl}/${BASE_PATH}/meta/`, payload, header);
}

export function deleteSequencePlanMeta(baseUrl, name){
    const response = http.del(`${baseUrl}/${BASE_PATH}/meta/${name}`);
}
