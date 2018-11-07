import { normalizeData } from 'src/schemas';
import { allPhotosSchema } from 'src/schemas/feed';

import { getData } from './api';

export function fetchSearchedPhotosApi({ query, page }) {
    const params = { query, page };
    return getData({ url: `/search/photos`, params})
        .then((response) => {
            const { data } = response;
            const normalizedPhotos = normalizeData(data.results, allPhotosSchema);

            return {
                response: normalizedPhotos
            };
        })
        .catch((error) => { error })
}
