import React from 'react';
import PropTypes from 'prop-types';

import { RelatedPhoto } from './related-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './related-photos.scss';

export const RelatedPhotos = ({ relatedPhotos, handlerOnOpenModal }) => (
    <div className="modal-view__related__block-images">
        {
            relatedPhotos.map((item) => {
                return (
                    <Hover
                        id={item.id}
                        className="modal-view__related__img"
                        hoverElement={<DescriptionPhoto photo={item} />}
                        key={item.id}
                        onClick={handlerOnOpenModal}
                    >
                        <RelatedPhoto
                            {...item}
                        />
                    </Hover>
                )
            })
        }
    </div>
);

RelatedPhotos.propTypes = {
    relatedPhotos: PropTypes.array,
    handlerOnLoadImage: PropTypes.func,
    handlerOnOpenModal: PropTypes.func
}