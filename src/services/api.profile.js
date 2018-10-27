import { normalizeData } from 'src/schemas';
import { userPhotosSchema } from 'src/schemas/profile';

import { getData } from './api';

export function fetchUserApi({ id }) {
    return getData({ url: `/users/${id}` })
        .then((response) => {         
            const { data } = response;
            const computedData = {
                id: data.id,
                url: data.urls.regular,
                avatar: data.user.profile_image.small,
                likes: data.likes,
                username: data.user.username,
                portfolio: data.user.portfolio_url,
                location:  data.location ? data.location.title : "Unknown",
                views: data.views,
                exif: data.exif.model,
                created: data.created_at
            }

            return { response: computedData};
        })
        .catch((error) => { error })
}

export function fetchUserPhotosApi({user}) {
    return getData({ url: `/users/${user}/portfolio` })
        .then((response) => {         
            const { data } = response;
            const normalizedData = normalizeData(data, userPhotosSchema);
            
            return { 
                response: normalizedData 
            };
        })
        .catch((error) => { error })
}