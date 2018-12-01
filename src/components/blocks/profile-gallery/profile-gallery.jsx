import React from 'react'
import PropTypes from 'prop-types'


import ItemPhoto from 'src/components/blocks/item-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './profile-gallery.scss';

export const ProfileGallery = ({ id, userPhotos, handlerOpenModal }) => (
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
)

ProfileGallery.propTypes = {
    id: PropTypes.string,
    userPhotos: PropTypes.array,
    handlerOpenModal: PropTypes.func
}