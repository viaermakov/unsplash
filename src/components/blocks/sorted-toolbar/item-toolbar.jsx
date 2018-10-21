import React from 'react';
import PropTypes from 'prop-types';

import './sorted-toolbar.scss';

export const ItemToolbar = ({ type, sortOrderBy }) => {
    
    const handlerOrderBy = () => {
        sortOrderBy(type);
    }

    return (
        <p className="toolbar__link" onClick={handlerOrderBy}>{type}</p>
    )
};

ItemToolbar.propTypes = {
    type: PropTypes.string,
    sortOrderBy: PropTypes.func
}
