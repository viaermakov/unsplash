import { createSelector } from 'reselect'

const PHOTOS = (state) => state.feed.get('photos');

export const getAllPhotos = createSelector(
    [PHOTOS],
    (photos) => {
        const currentPhotos = photos.toJS();
        return currentPhotos && currentPhotos.IDs
            ? currentPhotos.IDs.map(id => currentPhotos.byID[id])
            : [];
    }
)

const FEED = (state) => state.feed;

export const getPhotosLoadingStatus = createSelector(
    [FEED],
    (feed) => {
        const currentFeed = feed.toJS();
        return{
            isFetching: currentFeed.isFetching,
            errorMessage: currentFeed.errorMessage,
        }
    }
)