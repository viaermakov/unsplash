import {
    fork,
    all
} from 'redux-saga/effects'

import { watchLoadAllPhotos, watchOtherOrder, watchMorePhotos } from './feed';
import { watchLoadChosenPhoto, watchLoadRelatedPhotos } from './view-photo';
import { watchLoadUser, watchLoadUserPhotos } from './profile';

export default function* rootSaga() {
    yield all([
        fork(watchLoadAllPhotos),
        fork(watchOtherOrder),
        fork(watchMorePhotos),
        fork(watchLoadChosenPhoto),
        fork(watchLoadRelatedPhotos),
        fork(watchLoadUser),
        fork(watchLoadUserPhotos),
    ])
}