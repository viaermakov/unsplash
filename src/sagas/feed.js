import {
    fork,
    take,
    put,
    call
} from 'redux-saga/effects'

import {
    fetchAllPhotosApi
} from "src/services/api.feed";

import {
    fetchAllPhotosSuccess,
    fetchAllPhotosFailure,
    fetchOtherOrderPhotosSuccess,
    fetchOtherOrderPhotosFailure,
    fetchMorePhotosSuccess,
    fetchMorePhotosFailure
} from 'src/actions/feed';

import { feedActions } from 'src/constants/actions/feed';


function* fetchAllPhotos(payload) {
    const {
        response, error
    } = yield call(fetchAllPhotosApi, payload)

    if (response) {
        yield put(fetchAllPhotosSuccess(response))
    } else {
        yield put(fetchAllPhotosFailure(error))
    }
}

export function* watchLoadAllPhotos() {
    while (true) {
        const { payload } = yield take(feedActions.FETCH_PHOTOS_REQUEST);
        yield fork(fetchAllPhotos, payload);
    }
}

function* fetchOtherOrder(order) {
    const {
        response, error
    } = yield call(fetchAllPhotosApi, order)

    if (response) {
        yield put(fetchOtherOrderPhotosSuccess(response))
    } else {
        yield put(fetchOtherOrderPhotosFailure(error))
    }
}

export function* watchOtherOrder() {
    while (true) {
        const { payload } = yield take(feedActions.FETCH_OTHER_ORDER_REQUEST);
        yield fork(fetchOtherOrder, payload);
    }
}

function* fetchMorePhotos(order) {
    const {
        response, error
    } = yield call(fetchAllPhotosApi, order)

    if (response) {
        yield put(fetchMorePhotosSuccess(response))
    } else {
        yield put(fetchMorePhotosFailure(error))
    }
}

export function* watchMorePhotos() {
    while (true) {
        const { payload } = yield take(feedActions.FETCH_MORE_PHOTOS_REQUEST);
        yield fork(fetchMorePhotos, payload);
    }
}