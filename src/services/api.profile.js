import { getData } from './api';

export function fetchUserApi({ id }) {
    return getData({ url: `/users/${id}` })
        .then((response) => {

            const { data } = response;
            const userInfo = {
                id: data.id,
                avatar: data.profile_image.large,
                bio: data.bio || '',
                name: data.name,
                portfolio: data.portfolio_url || '',
                location: data.location ? data.location.title : 'Unknown',
                followers: data.followers_count,
                following: data.following_count
            }

            return {
                response: {
                    userInfo
                }
            };
        })
        .catch((error) => { error })
}

export function fetchUserPhotosApi({ id }) {
    return getData({ url: `/users/${id}/photos` })
        .then((response) => {
            const { data } = response;
           
            const photos = data.map((item) => {
                return {
                    id: item.id,
                    label: item.description || '',
                    likes: item.likes,
                    url: item.urls.regular
                }
            })

            return {
                response: photos
            };
        })
        .catch((error) => { error })
}