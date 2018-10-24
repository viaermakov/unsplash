import { combineReducers } from 'redux';

import feedReducer from 'src/reducers/feed';
import viewPhotoReducer from 'src/reducers/view-photo';

export default combineReducers({
    feed: feedReducer,
    viewPhoto: viewPhotoReducer
});