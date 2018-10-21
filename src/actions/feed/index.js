import { feedActions } from 'src/constants/actions/feed';

export function fetchAllPhotos(page, typeOrder) {
    return {
        type: feedActions.FETCH_PHOTOS_REQUEST,
        payload: {
            page,
            typeOrder
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

export function fetchOtherOrder(typeOrder) {
    return {
        type: feedActions.FETCH_OTHER_ORDER_REQUEST,
        payload: {
            typeOrder
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