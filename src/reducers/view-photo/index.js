import { Map, List, fromJS } from 'immutable';
import { viewPhotoActions } from 'src/constants/actions/view-photo';

const initialState = Map({
    isFetching: false,
    errorMessage: null,
    currentPhoto: null,
    relatedPhotos: Map()
})

export default function viewPhotoReducer(state = initialState, action) {
    switch (action.type) {
        case viewPhotoActions.FETCH_CHOSEN_PHOTO_REQUEST:
            return state
                .set('isFetching', true)
                .set('currentPhoto', null);

        case viewPhotoActions.FETCH_CHOSEN_PHOTO_SUCCESS: {
            return state
                .set('isFetching', false)
                .set('currentPhoto', fromJS(action.payload));
        }

        case viewPhotoActions.FETCH_CHOSEN_PHOTO_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        case viewPhotoActions.FETCH_RELATED_PHOTOS_REQUEST:
            return state
                .set('isFetching', true)

        case viewPhotoActions.FETCH_RELATED_PHOTOS_SUCCESS: {
            return state
                .set('isFetching', false)
                .set('relatedPhotos', fromJS(action.payload));
        }

        case viewPhotoActions.FETCH_RELATED_PHOTOS_FAILURE:
            return state
                .set('isFetching', false)
                .set('errorMessage', action.payload);

        case viewPhotoActions.CLOSE_MODAL:
            return state
                .set('currentPhoto', null)


        default:
            return state;
    }
}