import { combineReducers } from 'redux';

import feedReducer from 'src/reducers/feed';
import viewPhotoReducer from 'src/reducers/view-photo';
import profileReducer from 'src/reducers/profile';

export default combineReducers({
    feed: feedReducer,
    viewPhoto: viewPhotoReducer,
    profile: profileReducer
});