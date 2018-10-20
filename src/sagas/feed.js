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
}  from 'src/actions/feed';

import { feedActions } from 'src/constants/actions/feed';


function* fetchAllPhotos(payload) {
 console.log(payload);
    const {
        response, error
    } = yield call(fetchAllPhotosApi, payload)
    console.log(response)
    if (response) {
        yield put(fetchAllPhotosSuccess(response))
    } else {
        yield put(fetchAllPhotosFailure(error))
    }
}

export function* watchLoadAllPhotos() {
    try {
        while (true) {
            const { payload } = yield take(feedActions.FETCH_PHOTOS_REQUEST);
            yield fork(fetchAllPhotos, payload);
        }
    }
    catch(error) {
        console.error("error in saga", error)
    }
}