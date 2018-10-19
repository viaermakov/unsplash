import { Map, List } from 'immutable';
import { feedActions } from 'src/constants/actions/feed';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    photos: List([])
})

export default function feedReducer(state = initialState, action) {
    switch (action.type) {
        case feedActions.FETCH_PHOTOS_REQUEST:
            return state
                .set('isFetching', true);
                
        case feedActions.FETCH_PHOTOS_SUCCESS:
            return state
                .set('isFetching', false)
                .set('photos', action.payload);

        case feedActions.FETCH_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        default:
            return state;
    }
}