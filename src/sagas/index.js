import {
    takeLatest
} from 'redux-saga';
import {
    take,
    put,
    call,
    fork,
    select,
    takeEvery,
    all,
    cancel
} from 'redux-saga/effects'

import {
    fetchRandomPhotoApi
} from "src/services";
import {
    fetchPhoto,
    fetchPhotoSuccess,
    fetchPhotoFailure,
    FETCH_PHOTO_REQUEST,
    FETCH_PHOTO_SUCCESS
}  from 'src/actions';


function* fetchRandomPhoto() {
 
    const {
        response
    } = yield call(fetchRandomPhotoApi)

    if (response) {
        yield put(fetchPhotoSuccess(response))
    } else {
        yield put(fetchPhotoFailure(error))
    }
}

function* watchLoadRandomPhoto() {
    try {
        while (true) {
            // yield put('FETCH_PHOTO_REQUEST');
            // console.log("object");
            // yield call(fetchRandomPhoto);
            yield take(FETCH_PHOTO_REQUEST);
            yield call(fetchRandomPhoto);
        }
    }
    catch(error) {
        console.error("error in saga", error)
    }
}

export default function* rootSaga() {
    yield fork(watchLoadRandomPhoto)
}