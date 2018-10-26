import {
    fork,
    take,
    put,
    call,
    cancel
} from 'redux-saga/effects'

import {
    fetchChosenPhotoApi,
    fetchRelatedPhotosApi
} from "src/services/api.view-photo";

import {
    fetchChosenPhotoSuccess,
    fetchChosenPhotoFailure,
    fetchRelatedPhotosSuccess,
    fetchRelatedPhotosFailure
} from 'src/actions/view-photo';

import { viewPhotoActions } from 'src/constants/actions/view-photo';


function* fetchChosenPhoto(payload) {
    const {
        response, error
    } = yield call(fetchChosenPhotoApi, payload)

    if (response) {
        yield put(fetchChosenPhotoSuccess(response))
    } else {
        yield put(fetchChosenPhotoFailure(error))
    }
}

export function* watchLoadChosenPhoto() {
    while (true) {
        const { payload } = yield take(viewPhotoActions.FETCH_CHOSEN_PHOTO_REQUEST);
        const task = yield fork(fetchChosenPhoto, payload);

        // const action = yield take(viewPhotoActions.CLOSE_MODAL)
        // if (action.type === viewPhotoActions.CLOSE_MODAL) {
        //     yield cancel(task)
        // }
    }
}

function* fetchRelatedPhotos() {
    const {
        response, error
    } = yield call(fetchRelatedPhotosApi)

    if (response) {
        yield put(fetchRelatedPhotosSuccess(response))
    } else {
        yield put(fetchRelatedPhotosFailure(error))
    }
}

export function* watchLoadRelatedPhotos() {
    while (true) {
        yield take(viewPhotoActions.FETCH_RELATED_PHOTOS_REQUEST);
        const task = yield fork(fetchRelatedPhotos);

        // const action = yield take(viewPhotoActions.CLOSE_MODAL)
        // if (action.type === viewPhotoActions.CLOSE_MODAL) {
        //     yield cancel(task)
        // }
    }
}