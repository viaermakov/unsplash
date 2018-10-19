import {
    takeLatest
} from 'redux-saga';
import {
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


function* fetchAllPhotos() {
 
    const {
        data, error
    } = yield call(fetchAllPhotosApi)

    if (data) {
        yield put(fetchAllPhotosSuccess(data))
    } else {
        yield put(fetchAllPhotosFailure(error))
    }
}

export function* watchLoadAllPhotos() {
    try {
        while (true) {
            yield take(feedActions.FETCH_PHOTOS_REQUEST);
            yield call(fetchAllPhotos);
        }
    }
    catch(error) {
        console.error("error in saga", error)
    }
}