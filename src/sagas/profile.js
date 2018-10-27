import {
    fork,
    take,
    put,
    call,
    cancel
} from 'redux-saga/effects'

import {
    fetchUserApi,
    fetchUserPhotosApi
} from "src/services/api.profile";

import {
    fetchUserSuccess,
    fetchUserFailure,
    fetchUserPhotosSuccess,
    fetchUserPhotosFailure
} from 'src/actions/view-photo';

import { profileActions } from 'src/constants/actions/profile';


function* fetchUser(payload) {
    const {
        response, error
    } = yield call(fetchUserApi, payload)

    if (response) {
        yield put(fetchUserSuccess(response))
    } else {
        yield put(fetchUserFailure(error))
    }
}

export function* watchLoadUser() {
    while (true) {
        const { payload } = yield take(profileActions.FETCH_USER_REQUEST);
        const task = yield fork(fetchUser, payload);
    }
}

function* fetchUserPhotos() {
    const {
        response, error
    } = yield call(fetchUserPhotosApi)

    if (response) {
        yield put(fetchUserPhotosSuccess(response))
    } else {
        yield put(fetchUserPhotosFailure(error))
    }
}

export function* watchLoadUserPhotos() {
    while (true) {
        yield take(profileActions.FETCH_USER_PHOTOS_REQUEST);
        const task = yield fork(fetchUserPhotos);
    }
}