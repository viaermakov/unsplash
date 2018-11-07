import {
    fork,
    take,
    put,
    call,
    cancel
} from 'redux-saga/effects'

import {
    fetchSearchedPhotosApi
} from "src/services/api.search-feed";

import {
    fetchSearchedPhotosSuccess,
    fetchSearchedPhotosFailure,
    fetchMoreSearchedPhotosSuccess,
    fetchMoreSearchedPhotosFailure,
} from 'src/actions/search-feed';

import { searchActions } from 'src/constants/actions/search-feed';


function* fetchSearchedPhotos(payload) {
    const {
        response, error
    } = yield call(fetchSearchedPhotosApi, payload)

    if (response) {
        yield put(fetchSearchedPhotosSuccess(response))
    } else {
        yield put(fetchSearchedPhotosFailure(error))
    }
}

export function* watchSearchPhotos() {
    while (true) {
        const { payload } = yield take(searchActions.FETCH_SEARCHED_PHOTOS_REQUEST);
        const task = yield fork(fetchSearchedPhotos, payload);
    }
}

function* fetchMoreSearchedPhotos(payload) {
    const {
        response, error
    } = yield call(fetchSearchedPhotosApi, payload)

    if (response) {
        yield put(fetchMoreSearchedPhotosSuccess(response))
    } else {
        yield put(fetchMoreSearchedPhotosFailure(error))
    }
}

export function* watchMoreSearchPhotos() {
    while (true) {
        const { payload } = yield take(searchActions.FETCH_MORE_SEARCHED_PHOTOS_REQUEST);
        const task = yield fork(fetchMoreSearchedPhotos, payload);
    }
}