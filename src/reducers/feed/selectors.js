import { createSelector } from 'reselect'

const PHOTOS = (state) => state.feed.get('photos');

export const getAllPhotos = createSelector(
    [PHOTOS],
    (photos) => photos
)