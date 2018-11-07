
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './view-photo.scss';
import RelatedPhotos from 'src/components/blocks/related-photos';

export const ModalViewPhoto = ({ isIncreased, chosenPhoto, relatedPhotos, handlerOnOpenModal, handlerIncreasePhoto }) => {
    const increasedClass = classNames(
        !isIncreased ? 'modal-view__content--scope' : '',
        'modal-view__content'
    );

    return (
        <div className="modal-view">
            <header className="modal-view__header">
                <section className="modal-view__header__user">
                    <img className="modal-view__header__avatar" src={chosenPhoto.avatar} alt={chosenPhoto.username} />
                    <section><Link className="modal-view__header__login" to={`/profile/${chosenPhoto.username}`}>{chosenPhoto.username}</Link></section>
                </section>
                <section className="modal-view__header__desc">
                    <span className="modal-view__header__desc__icon"></span>
                    <p>{chosenPhoto.views}</p>
                </section>
            </header>
            <div className={increasedClass} onClick={handlerIncreasePhoto}>
                <img className="modal-view__content__img" src={chosenPhoto.url} alt={chosenPhoto.username} />
            </div>
            <div className="modal-view__stat">
                <section className="modal-view__stat__location">
                    <span className="modal-view__stat__location__icon"></span>
                    <p>Location: {chosenPhoto.location} </p>
                </section>
                <section className="modal-view__stat__likes">
                    <span className="modal-view__stat__likes__icon"></span>
                    <p>{chosenPhoto.likes} </p>
                </section>
            </div>
            <div className="modal-view__related">
                <p className="modal-view__related__label">Related photo</p>
                {
                    <RelatedPhotos
                        relatedPhotos={relatedPhotos}
                        handlerOnOpenModal={handlerOnOpenModal}
                    />
                }
            </div>
            <div className="modal-view__footer">
                <section className="modal-view__footer__photograph">
                    <span className="modal-view__footer__photograph__icon"></span>
                    <p>{chosenPhoto.exif} </p>
                </section>
            </div>
        </div>
    )
};

ModalViewPhoto.propTypes = {
    isIncreased: PropTypes.bool,
    chosenPhoto: PropTypes.object,
    relatedPhotos: PropTypes.object,
    handlerOnOpenModal: PropTypes.func,
    handlerIncreasePhoto: PropTypes.func
}