import { Map, List, fromJS } from 'immutable';
import { searchActions } from 'src/constants/actions/search-feed';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    searchedPhotos: Map({
        IDs: List(),
        byID: Map()
    })
})

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case searchActions.FETCH_SEARCHED_PHOTOS_REQUEST:
            return state
                .set('isFetching', true)
        .set('searchedPhotos', Map());

        case searchActions.FETCH_SEARCHED_PHOTOS_SUCCESS: 
            return state
                .set('isFetching', false)
                .set('searchedPhotos', fromJS(action.payload))

        case searchActions.FETCH_SEARCHED_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        case searchActions.FETCH_MORE_SEARCHED_PHOTOS_REQUEST:
            return state
                .set('isFetching', true)

        case searchActions.FETCH_MORE_SEARCHED_PHOTOS_SUCCESS: {
            const IDs = state.getIn(['searchedPhotos', 'IDs']);
            const byID = state.getIn(['searchedPhotos', 'byID']);

            return state
                .set('isFetching', false)
                .setIn(['searchedPhotos', 'IDs'], IDs.concat(fromJS(action.payload.IDs)))
                .setIn(['searchedPhotos', 'byID'], byID.merge(fromJS(action.payload.byID)));
        }

        case searchActions.FETCH_MORE_SEARCHED_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        default:
            return state;
    }
}