//import { normalizeData } from 'src/schemas';
//import { chosenPhotoSchema } from 'src/schemas/view-photo';

import { getData } from './api';

export function fetchChosenPhotoApi({ id }) {
    return getData({ url: `/photos/${id}` })
        .then((response) => {         
            const { data } = response;
            const computedData = {
                id: data.id,
                url: data.urls.regular,
                avatar: data.user.profile_image.small,
                likes: data.likes,
                username: data.user.username,
                portfolio: data.user.portfolio_url,
                location:  data.location ? data.location.title : "",
                views: data.views,
                created: data.created_at
            }

            return { response: computedData};
        })
        .catch((error) => { error })
}
