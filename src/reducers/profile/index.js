import { Map, List, fromJS } from 'immutable';
import { profileActions } from 'src/constants/actions/profile';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    userInfo: null,
    photos: List()
})

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case profileActions.FETCH_USER_REQUEST:
            return state
                .set('isFetching', true)
                .set('currentPhoto', null);

        case profileActions.FETCH_USER_SUCCESS: {
            return state
                .set('isFetching', false)
                .set('userInfo', fromJS(action.payload.userInfo));
        }

        case profileActions.FETCH_USER_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        case profileActions.FETCH_USER_PHOTOS_REQUEST:
            return state
                .set('isFetching', true)

        case profileActions.FETCH_USER_PHOTOS_SUCCESS: {
            return state
                .set('isFetching', false)
                .set('photos', fromJS(action.payload));
        }

        case profileActions.FETCH_USER_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        default:
            return state;
    }
}