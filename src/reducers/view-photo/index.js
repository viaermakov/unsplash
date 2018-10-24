import { Map, List, fromJS } from 'immutable';
import { viewPhotoActions } from 'src/constants/actions/view-photo';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    currentPhoto: null
})

export default function viewPhotoReducer(state = initialState, action) {
    switch (action.type) {
        case viewPhotoActions.FETCH_CHOSEN_PHOTO_REQUEST:
            return state
                .set('isFetching', true)

        case viewPhotoActions.FETCH_CHOSEN_PHOTO_SUCCESS: {
            return state
                .set('isFetching', false)
                .set('currentPhoto', fromJS(action.payload));
        }

        case viewPhotoActions.FETCH_CHOSEN_PHOTO_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        case viewPhotoActions.CLOSE_MODAL:
        console.log("object");
            return state
                .set('currentPhoto', null)


        default:
            return state;
    }
}