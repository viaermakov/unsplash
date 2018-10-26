import {
    fork,
    all
} from 'redux-saga/effects'

import { watchLoadAllPhotos, watchOtherOrder } from './feed';
import { watchLoadChosenPhoto, watchLoadRelatedPhotos } from './view-photo';

export default function* rootSaga() {
    yield all([
        fork(watchLoadAllPhotos),
        fork(watchOtherOrder),
        fork(watchLoadChosenPhoto),
        fork(watchLoadRelatedPhotos)
    ])
}