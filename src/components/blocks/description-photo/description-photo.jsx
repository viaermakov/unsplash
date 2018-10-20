import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './description-photo.scss';

export const DescriptionPhoto = ({ photo: { avatar, user, likes, description } }) => (
    <div className="feed__item__info">
        <div className="feed__item__info--header">
            <img className="feed__item__info__avatar" src={avatar} alt={user}/>
            <section className="feed__item__info__user">{user}</section>
        </div>
        <div className="feed__item__info--footer">
            <section className="feed__item__info__likes">{likes} &#x2661;</section>
            <section className="feed__item__info__description">{description}</section>
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