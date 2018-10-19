import { feedActions } from 'src/constants/actions/feed';

export function fetchAllPhotos() {
    return {
        type: feedActions.FETCH_PHOTOS_REQUEST
    }
}
export function fetchAllPhotosSuccess(payload) {
    return {
        type: feedActions.FETCH_PHOTOS_SUCCESS,
        payload
    }
}
export function fetchAllPhotosFailure(error) {
    return {
        type: feedActions.FETCH_PHOTOS_FAILURE,
        payload: {
            error
        }
    }
}