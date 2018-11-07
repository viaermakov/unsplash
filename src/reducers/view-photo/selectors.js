import { createSelector } from 'reselect'

const CHOSEN_PHOTO = (state) => state.viewPhoto.get('currentPhoto');

export const getChosenPhoto = createSelector(
    [CHOSEN_PHOTO],
    (photo) => photo ? photo.toJS() : null
)

const STATUSES = (state) => state.viewPhoto;

export const getStatusesViewPhoto = createSelector(
    [STATUSES],
    (viewPhoto) => {
        const view = viewPhoto.toJS();
        return {
            isFetching: view.isFetching,
            errorMessage: view.errorMessage
        }
    }
)

const RELATED_PHOTOS = (state) => state.viewPhoto.get('relatedPhotos', null);

export const getRelatedPhotos = createSelector(
    [RELATED_PHOTOS],
    (photos) =>  photos.toJS()
)