import axios from 'axios';
import {
    API_ROOT,
    PUBLIC_KEY
} from 'src/constants/server/config';


export function getData({ url, params, headers}) {
    return axios({
            url: `${API_ROOT}${url}`,
            timeout: 10000,
            method: 'get',
            params: {
                ...params
            },
            headers: {
                'Authorization': `Client-ID ${PUBLIC_KEY}`,
                ...headers
            },
            responseType: 'json'
        })
}

export function postData({ url, headers, data}) {
    return axios({
            url: `${API_ROOT}${$url}`,
            timeout: 10000,
            method: 'post',
            headers: {
                'Authorization': `Client-ID ${PUBLIC_KEY}`,
                ...headers
            },
            responseType: 'json',
            data: { ...data }
        })
}