import React from 'react'
import PropTypes from 'prop-types';

import './profile-header.scss';

export const ProfileHeader = ({ id, userInfo }) => (
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
)

ProfileHeader.propTypes = {
    id: PropTypes.string,
    userInfo: PropTypes.object
}
