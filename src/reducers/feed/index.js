import { Map, List, fromJS } from 'immutable';
import { feedActions } from 'src/constants/actions/feed';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    photos: Map({
        IDs: List([]),
        byID: Map({})
    })
})

export default function feedReducer(state = initialState, action) {
    switch (action.type) {
        case feedActions.FETCH_PHOTOS_REQUEST:
            return state
                .set('isFetching', true);

        case feedActions.FETCH_PHOTOS_SUCCESS: {           
            const IDs = state.getIn(['photos', 'IDs']);
            const byID = state.getIn(['photos', 'byID']);

            return state
                .set('isFetching', false)
                .setIn(['photos', 'IDs'], IDs.concat(action.payload.IDs))
                .setIn(['photos', 'byID'], byID.merge(action.payload.byID));
        }
        case feedActions.FETCH_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        default:
            return state;
    }
}