import {
    schema,
    normalize
} from 'normalizr'

import { normalizeData } from 'src/schemas';
import { allPhotosSchema } from 'src/schemas/feed';

import { getData } from './api';

export function fetchAllPhotosApi(page) {
    const params = {
        page
    };
    console.log(params);
    return getData({ url: '/photos', params })
        .then((response) => {
            const { data, error } = response;
            console.log(data);
            if (data) {
                const normalizedPhotos = normalizeData(data, allPhotosSchema);
                console.log(normalizedPhotos)
                return {
                    response: normalizedPhotos
                };
            }
            else {
                return {
                    error: error.message 
                }
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