import {
    fork,
} from 'redux-saga/effects'

import { watchLoadAllPhotos } from './feed';

export default function* rootSaga() {
    yield fork(watchLoadAllPhotos)
}