import { normalizeData } from 'src/schemas';
import { allPhotosSchema } from 'src/schemas/feed';

import { getData } from './api';

export function fetchAllPhotosApi({ page, order }) {
    const params = {
        page,
        order_by: `${order}`
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
