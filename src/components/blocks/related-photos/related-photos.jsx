import React from 'react';
import PropTypes from 'prop-types';

import { RelatedPhoto } from './related-photo';
import Hover from 'src/components/blocks/hover-element';
import DescriptionPhoto from 'src/components/blocks/description-photo';

import './related-photos.scss';

export const RelatedPhotos = ({ relatedPhotos, handlerOnOpenModal }) => (
    <div className="modal-view__related__block-images">
        {
            relatedPhotos.IDs && relatedPhotos.IDs.length > 0 && relatedPhotos.IDs.map((id) => {
                return (
                    <Hover
                        id={relatedPhotos.byID[id].id}
                        className="modal-view__related__img"
                        hoverElement={<DescriptionPhoto photo={relatedPhotos.byID[id]} />}
                        key={relatedPhotos.byID[id].id}
                        onClick={handlerOnOpenModal}
                    >
                        <RelatedPhoto
                            {...relatedPhotos.byID[id]}
                        />
                    </Hover>
                )
            })
        }
    </div>
);

RelatedPhotos.propTypes = {
    relatedPhotos: PropTypes.object,
    handlerOnLoadImage: PropTypes.func,
    handlerOnOpenModal: PropTypes.func
}