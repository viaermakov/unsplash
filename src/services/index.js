import axios from 'axios';
import {
    URL,
    PUBLIC_KEY
} from 'src/constants/config';

import {
    schema,
    normalize
} from 'normalizr'

export function fetchRandomPhotoApi() {
    return axios({
            url: `${URL}/photos/random`,
            timeout: 10000,
            method: 'get',
            headers: {
                'Authorization': `Client-ID ${PUBLIC_KEY}`
            },
            responseType: 'json'
        })
        .then((response) => {
            const { data } = response;
            console.log(data);
            if (data) {
                const response = {
                    response: {
                        id: data.id,
                        url: data.urls.full,
                        title: data.location ? data.location.title : 'Неизвестно'
                    }
                };
                return response;
            }
        })
}

// const photoSchema = new schema.Entity('photo', {}, {
//     items: (entity) => {
//         return {
//             id: entity.id,
//             url: entity.urls.full,
//             title: entity.location.title,
//         }
//     }
//   })