
export const FETCH_PHOTO_REQUEST = "FETCH_PHOTO_REQUEST";
export const FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS";
export const FETCH_PHOTO_FAILURE = "FETCH_PHOTO_FAILURE";

export function fetchPhoto(payload) {
    console.log("fetch photo");
    return {
        type: FETCH_PHOTO_REQUEST
    }
}
export function fetchPhotoSuccess(payload) {
    console.log("YEEEEEESS", payload);
    return {
        type: FETCH_PHOTO_SUCCESS,
        payload
    }
}
export function fetchPhotoFailure(error) {
    return {
        type: FETCH_PHOTO_SUCCESS,
        payload: {
            error
        }
    }
}