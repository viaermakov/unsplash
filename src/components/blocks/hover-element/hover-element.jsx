import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './hover-element.scss';

export const Hover = ({ id, className, hoverElement, onClick, children }) => {
    const handlerOpenModal = () => {
        onClick && onClick(id);
    }
    return (
        <div className={classNames(className, 'hover')} onClick={handlerOpenModal}>
            <div className="hover__no-hover">{children}</div>
            <div className="hover__hover">{hoverElement}</div>
        </div>
    )
}

Hover.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    hoverElement: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.element
}