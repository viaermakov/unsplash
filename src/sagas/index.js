import {
    fork,
    all
} from 'redux-saga/effects'

import { watchLoadAllPhotos, watchOtherOrder } from './feed';

export default function* rootSaga() {
    yield all([
        fork(watchLoadAllPhotos),
        fork(watchOtherOrder),
    ])
}