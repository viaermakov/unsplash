import { profileActions } from 'src/constants/actions/profile';

export function fetchUser(id) {
    return {
        type: profileActions.FETCH_USER_REQUEST,
        payload: {
            id
        }
    }
}

export function fetchUserSuccess(payload) {
    return {
        type: profileActions.FETCH_USER_SUCCESS,
        payload
    }
}
export function fetchUserFailure(error) {
    return {
        type: profileActions.FETCH_USER_FAILURE,
        payload: {
            error
        }
    }
}

export function fetchUserPhotos(id) {
    return {
        type: profileActions.FETCH_USER_PHOTOS_REQUEST,
        payload: {
            id
        }
    }
}

export function fetchUserPhotosSuccess(payload) {
    return {
        type: profileActions.FETCH_USER_PHOTOS_SUCCESS,
        payload
    }
}
export function fetchUserPhotosFailure(error) {
    return {
        type: profileActions.FETCH_USER_PHOTOS_FAILURE,
        payload: {
            error
        }
    }
}

