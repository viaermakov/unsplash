import { createSelector } from 'reselect'

const USER_INFO = (state) => state.profile.get('userInfo');

export const getInfoUser = createSelector(
    [USER_INFO],
    (user) => user ? user.toJS() : null
)

const STATUSES = (state) => state.profile;

export const getStatusesUser = createSelector(
    [STATUSES],
    (userData) => {
        const user = userData.toJS();
        return {
            isFetching: user.isFetching,
            errorMessage: user.errorMessage
        }
    }
)

const USER_PHOTOS = (state) => state.profile.get('photos');

export const getRelatedPhotos = createSelector(
    [USER_PHOTOS],
    (photos) => {
        const currentPhotos = photos.toJS();
        return currentPhotos && currentPhotos.IDs
            ? currentPhotos.IDs.map(id => currentPhotos.byID[id])
            : [];
    }
)