import { searchActions } from 'src/constants/actions/search-feed';

export function fetchSearchedPhotos(query) {
    return {
        type: searchActions.FETCH_SEARCHED_PHOTOS_REQUEST,
        payload: { query }
    }
}

export function fetchSearchedPhotosSuccess(payload) {
    return {
        type: searchActions.FETCH_SEARCHED_PHOTOS_SUCCESS,
        payload
    }
}
export function fetchSearchedPhotosFailure(error) {
    return {
        type: searchActions.FETCH_SEARCHED_PHOTOS_FAILURE,
        payload: {
            error
        }
    }
}

export function fetchMoreSearchedPhotos(query, page) {
    return {
        type: searchActions.FETCH_MORE_SEARCHED_PHOTOS_REQUEST,
        payload: {
            query,
            page
        }
    }
}

export function fetchMoreSearchedPhotosSuccess(payload) {
    return {
        type: searchActions.FETCH_MORE_SEARCHED_PHOTOS_SUCCESS,
        payload
    }
}
export function fetchMoreSearchedPhotosFailure(error) {
    return {
        type: searchActions.FETCH_MORE_SEARCHED_PHOTOS_FAILURE,
        payload: {
            error
        }
    }
}