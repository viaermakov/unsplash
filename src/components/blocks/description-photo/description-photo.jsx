import React from 'react';
import PropTypes from 'prop-types';

import './description-photo.scss';

export const DescriptionPhoto = ({ photo: { avatar, user, likes, description } }) => (
    <div className="description__info">
        <div className="description__info--header">
            <img className="description__info__avatar" src={avatar} alt={user}/>
            <section className="description__info__user">{user}</section>
        </div>
        <div className="description__info--footer">
            <section className="description__info__likes">{likes} &#x2661;</section>
            <section className="description__info__description">{description}</section>
        </div>
    </div>
)

DescriptionPhoto.propTypes = {
    photo: PropTypes.shape({
        avatar: PropTypes.string,
        user: PropTypes.string,
        likes: PropTypes.number,
        description: PropTypes.string,
        children: PropTypes.element
    })
}