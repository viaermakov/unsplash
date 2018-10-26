import { viewPhotoActions } from 'src/constants/actions/view-photo';

export function fetchChosenPhoto(id) {
    return {
        type: viewPhotoActions.FETCH_CHOSEN_PHOTO_REQUEST,
        payload: {
            id
        }
    }
}

export function fetchChosenPhotoSuccess(payload) {
    return {
        type: viewPhotoActions.FETCH_CHOSEN_PHOTO_SUCCESS,
        payload
    }
}
export function fetchChosenPhotoFailure(error) {
    return {
        type: viewPhotoActions.FETCH_CHOSEN_PHOTO_FAILURE,
        payload: {
            error
        }
    }
}

export function fetchRelatedPhotos() {
    return {
        type: viewPhotoActions.FETCH_RELATED_PHOTOS_REQUEST
    }
}

export function fetchRelatedPhotosSuccess(payload) {
    return {
        type: viewPhotoActions.FETCH_RELATED_PHOTOS_SUCCESS,
        payload
    }
}
export function fetchRelatedPhotosFailure(error) {
    return {
        type: viewPhotoActions.FETCH_RELATED_PHOTOS_FAILURE,
        payload: {
            error
        }
    }
}

export function closeModal() {
    return {
        type: viewPhotoActions.CLOSE_MODAL,
    }
}

