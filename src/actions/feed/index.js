import { feedActions } from 'src/constants/actions/feed';

export function fetchAllPhotos(page) {
    return {
        type: feedActions.FETCH_PHOTOS_REQUEST,
        payload: {
            page
        }
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

export function fetchOtherOrder(order) {
    return {
        type: feedActions.FETCH_OTHER_ORDER_REQUEST,
        payload: {
            order
        }
    }
}

export function fetchOtherOrderPhotosSuccess(payload) {
    return {
        type: feedActions.FETCH_OTHER_ORDER_SUCCESS,
        payload
    }
}
export function fetchOtherOrderPhotosFailure(error) {
    return {
        type: feedActions.FETCH_OTHER_ORDER_FAILURE,
        payload: {
            error
        }
    }
}