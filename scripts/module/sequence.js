import http from 'k6/http';
config = JSON.parse(open('../config/config.json'));
const BASE_PATH = 'sequence';

export function getSequence(baseUrl, paramDto = null) {
    let url = `${baseUrl}/${BASE_PATH}`;

    if(paramDto !== null){
        url += `${paramDto.getParam()}`;
    }

    const response = http.get(url);
}

export function postSequenceRun(baseUrl, paramDto) {
    const payload = JSON.stringify(paramDto);

    const header = {
        headers: {
            'Content-Type': 'application/json'
        },
    };

    const response = http.post(`${baseUrl}/${BASE_PATH}/run`, payload, header);
}

export function putSequenceUpload(baseUrl, file) {
    const header = {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
    };


    const response = http.put(`${baseUrl}/${BASE_PATH}/upload`, file, headers);
}