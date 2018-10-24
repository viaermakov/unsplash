
import React from 'react';
import PropTypes from 'prop-types';

import './view-photo.scss';

export const ModalViewPhoto = ({ id, url, likes, username, portfolio, location, views, avatar }) => (
    <div className="modal-view">
        <header className="modal-view__header">
            <section className="modal-view__header__user">
                <img className="modal-view__header__avatar" src={avatar} alt={username} />
                <section >{username}</section>
            </section>
            <section className="modal-view__header__desc">{views}</section>
        </header>
        <div className="modal-view__content">
            <img className="modal-view__content__img" src={url} alt={username} />
        </div>
        <div className="modal-view__stat">
            <section className="modal-view__footer__location">Location: {location} </section>
            <section className="modal-view__footer__likes">Likes: {likes}</section>
        </div>
        <div className="modal-view__related">
            <p className="modal-view__related__label">Related photo</p>
            <div className="modal-view__related__block-images">
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />                
                <img className="modal-view__related__img" src="https://images.unsplash.com/photo-1495934270965-eca97329fde8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d7a9b8b06ac52a38318dca6f910740a&auto=format&fit=crop&w=1950&q=80" alt="" />
            </div>
        </div>
    </div>
);

ModalViewPhoto.propTypes = {
}