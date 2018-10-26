import React from 'react';
import PropTypes from 'prop-types';


export const RelatedPhoto = ({ url, user }) => (
    <img className="modal-view__related__img" src={url} alt={user} />
);

RelatedPhoto.propTypes = {
    url: PropTypes.string,
    user: PropTypes.string
}