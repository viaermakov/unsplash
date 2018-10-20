import React from 'react';
import PropTypes from 'prop-types';

import './item-photo.scss';

export const ItemPhoto = ({ url, user }) => (
    <div className="feed__item__content">
        <img className="feed__item__content__img" src={url} alt={user} />
    </div>
);

ItemPhoto.propTypes = {
    url: PropTypes.string,
    user: PropTypes.string
}