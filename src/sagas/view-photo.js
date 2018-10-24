import {
    fork,
    take,
    put,
    call,
    cancel
} from 'redux-saga/effects'

import {
    fetchChosenPhotoApi
} from "src/services/api.view-photo";

import {
    fetchChosenPhotoSuccess,
    fetchChosenPhotoFailure
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
        yield fork(fetchChosenPhoto, payload);
        // const action = yield take(viewPhotoActions.CLOSE_MODAL)
        // if (action.type === viewPhotoActions.CLOSE_MODAL) {
        //     yield cancel(task)
        // }
    }
}
