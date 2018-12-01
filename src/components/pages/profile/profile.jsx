
import React from 'react';
import PropTypes from 'prop-types';

import ProfileHeader from 'src/components/blocks/profile-header';
import ProfileGallery from 'src/components/blocks/profile-gallery';

import './profile.scss';

export const Profile = ({ id, userInfo, userPhotos, handlerOpenModal }) => (
    <div className="profile">
        <ProfileHeader 
            id={id}
            userInfo={userInfo}
        />
        <ProfileGallery 
            id={id}
            userPhotos={userPhotos} 
            handlerOpenModal={handlerOpenModal} 
        />
    </div>
);

Profile.propTypes = {
    id: PropTypes.string,
    userInfo: PropTypes.object,
    userPhotos: PropTypes.array,
    handlerOpenModal: PropTypes.func
}