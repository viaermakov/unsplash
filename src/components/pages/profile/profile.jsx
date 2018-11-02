
import React from 'react';
import PropTypes from 'prop-types';


import ItemPhoto from 'src/components/blocks/item-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './profile.scss';

export const Profile = ({ id, userInfo, userPhotos, handlerOpenModal }) => (
    <div className="profile">
        <div className="profile__header">
            <section className="user-info">
                <div className="user-info__avatar">
                    <img className="user-info__avatar__img" src={userInfo.avatar} alt={userInfo.name} />
                </div>
                <div className="user-info__desc">
                    <p className="user-info__desc__login" >{id}</p>
                    <div className="user-info__desc__socia">
                        <p className="user-info__desc__socia--clmn">Followers:<b> {userInfo.followers}</b></p>
                        <p className="user-info__desc__socia--clmn">Following: <b> {userInfo.following}</b></p>
                    </div>
                    <div className="user-info__desc__about">
                        <section className="user-info__desc__about__name">
                            <p>{userInfo.name}</p>
                            <p>{userInfo.location}</p>
                        </section>
                        <section>
                            <p>{userInfo.bio}</p>
                        </section>
                    </div>
                </div>
            </section>
        </div>
        <div className="profile__gallery">
            {

                userPhotos && userPhotos.length > 0 && userPhotos.map((item) => {
                    return (
                        <Hover
                            id={item.id}
                            className="profile__gallery__item"
                            hoverElement={<DescriptionPhoto photo={item} />}
                            key={item.id}
                            onClick={handlerOpenModal}
                        >
                            <ItemPhoto url={item.url} user={id} />
                        </Hover>
                    )
                })
            }

        </div>
    </div>
);

Profile.propTypes = {
    id: PropTypes.string,
    userInfo: PropTypes.object,
    userPhotos: PropTypes.array,
    handlerOpenModal: PropTypes.func
}