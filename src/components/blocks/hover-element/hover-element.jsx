import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './hover-element.scss';

export const Hover = ({ className, hoverElement, children }) => (
    <div className={classNames(className, 'hover')}>
        <div className="hover__no-hover">{children}</div>
        <div className="hover__hover">{hoverElement}</div>
    </div>
)

Hover.propTypes = {
    className: PropTypes.string,
    hoverElement: PropTypes.object,
    children: PropTypes.element
}