import React from 'react';
import PropTypes from 'prop-types';

import { ItemToolbar } from './item-toolbar';

import './sorted-toolbar.scss';

export const SortedToolbar = ({ sortOrderBy }) => {
    return (
        <div className="toolbar">
            <ItemToolbar type="latest" sortOrderBy={sortOrderBy} />
            <ItemToolbar type="popular" sortOrderBy={sortOrderBy} />
            <ItemToolbar type="oldest" sortOrderBy={sortOrderBy} />
        </div>
    )
};

SortedToolbar.propTypes = {
    sortOrderBy: PropTypes.func
}
