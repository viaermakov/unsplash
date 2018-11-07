import { createSelector } from 'reselect'

const PHOTOS = (state) => state.feed.get('photos', {});

export const getAllPhotos = createSelector(
    [PHOTOS],
    (photos) => photos.toJS()

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