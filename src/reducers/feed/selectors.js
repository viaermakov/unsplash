import { createSelector } from 'reselect'


const RANDOM_PHOTO = (state) => state.feed.get('currentPhoto');

export const getRandomPhoto = createSelector(
  [ RANDOM_PHOTO ],
  (photo) => photo
)