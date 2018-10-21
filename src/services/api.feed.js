import { normalizeData } from 'src/schemas';
import { allPhotosSchema } from 'src/schemas/feed';

import { getData } from './api';

export function fetchAllPhotosApi({ page, typeOrder }) {
    const params = {
        page,
        order_by: `${typeOrder}`
    };

    return getData({ url: `/photos`, params })
        .then((response) => {
            const { data } = response;
            const normalizedPhotos = normalizeData(data, allPhotosSchema);

            return {
                response: normalizedPhotos
            };
        })
        .catch((error) => { error })
}
