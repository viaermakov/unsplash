import { createSelector } from 'reselect'

const SEARCHED_PHOTOS = (state) => state.search.get('searchedPhotos');

export const getSearchedPhotos = createSelector(
    [SEARCHED_PHOTOS],
    (photos) => photos.toJS()

)

const SEARCH_FEED = (state) => state.search;

export const getSearchedLoadingStatus = createSelector(
    [SEARCH_FEED],
    (feed) => {
        const currentFeed = feed.toJS();
        console.log(currentFeed);
        return{
            isFetching: currentFeed.isFetching,
            errorMessage: currentFeed.errorMessage,
        }
    }
)