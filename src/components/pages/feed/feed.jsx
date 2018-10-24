
import React from 'react';
import PropTypes from 'prop-types';

import ItemPhoto from 'src/components/blocks/item-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './feed.scss';

export const Feed = ({ photos, handlerOpenModal }) => (
    <div className="feed">
        {
            photos && photos.length > 0 && photos.map((photo) => {
                return (
                    <Hover
                        id={photo.id}
                        className="feed__item"
                        hoverElement={<DescriptionPhoto photo={photo} />}
                        key={photo.id}
                        onClick={handlerOpenModal}
                    >
                        <ItemPhoto url={photo.url} user={photo.user} />
                    </Hover>
                );
            })
        }
    </div>
);

Feed.propTypes = {
    photos: PropTypes.array,
    handlerOpenModal: PropTypes.func
}