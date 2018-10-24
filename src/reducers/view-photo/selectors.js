import { createSelector } from 'reselect'

const CHOSEN_PHOTO = (state) => state.viewPhoto.get('currentPhoto');

export const getChosenPhoto = createSelector(
    [CHOSEN_PHOTO],
    (photo) => photo ? photo.toJS() : null
)

const STATUSES = (state) => state.viewPhoto;

export const getStatusesViewPhoto = createSelector(
    [STATUSES],
    (viewPhoto) => ({
        isFetching: viewPhoto.isFetching,
        errorMessage: viewPhoto.errorMessage
    })
)
