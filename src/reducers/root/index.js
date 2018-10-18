import { combineReducers } from 'redux';

import feedReducer from 'src/reducers/feed';

export default combineReducers({
    feed: feedReducer
});