
import React from 'react';
import PropTypes from 'prop-types';

import Feed from 'src/components/pages/feed';
import { Spinner } from 'src/components/library/spinner/spinner';

import './search-feed.scss';

export const SearchFeed = ({ photos, query, handlerOpenModal }) => (
    <React.Fragment>
        <h3 className="search__label">Search {query}</h3>
        {
            photos.IDs && photos.IDs.length > 0
                ? <Feed photos={photos} handlerOpenModal={handlerOpenModal} />
                : <Spinner />
        }
    </React.Fragment>
);

SearchFeed.propTypes = {
    query: PropTypes.string,
    photos: PropTypes.object,
    handlerOpenModal: PropTypes.func
}