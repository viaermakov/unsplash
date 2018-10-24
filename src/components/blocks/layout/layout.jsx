import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

export const Layout = ({ children, type, onClick }) => {
    return (
        <div className={`layout-${type}`} onClick={onClick}>
            {children}
        </div>
    )
}

Layout.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node
}