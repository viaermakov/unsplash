import { createSelector } from 'reselect'

const USER_INFO = (state) => state.profile.get('userInfo');

export const getInfoUser = createSelector(
    [USER_INFO],
    (user) => user && user.toJS()
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

const USER_PHOTOS = (state) => state.profile.get('photos', []);

export const getUserPhotos = createSelector(
    [USER_PHOTOS],
    (photos) => photos.toJS() 
)