
import React from 'react';
import PropTypes from 'prop-types';

import ItemPhoto from 'src/components/blocks/item-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './feed.scss';

export const Feed = ({ photos, handlerOpenModal }) => (
    <div className="feed">
        {
            photos && photos.IDs.length > 0 && photos.IDs.map((id) => {
                return (
                    <Hover
                        id={photos.byID[id].id}
                        className="feed__item"
                        hoverElement={<DescriptionPhoto photo={photos.byID[id]} />}
                        key={photos.byID[id].id}
                        onClick={handlerOpenModal}
                    >
                        <ItemPhoto url={photos.byID[id].url} user={photos.byID[id].user} />
                    </Hover>
                );
            })
        }
    </div>
);

Feed.propTypes = {
    photos: PropTypes.object,
    handlerOpenModal: PropTypes.func
}