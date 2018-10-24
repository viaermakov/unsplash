import React from 'react';
import PropTypes from 'prop-types';

import './spinner.scss';


export const Spinner = ({ withBackdrop, message }) => (
    <div className={`a-spinner ${withBackdrop ? 'with-backdrop' : 'no-backdrop'}`}>
        <div className="loader">
            <svg className="circular" viewBox="25 25 50 50">
                <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth="3" strokeMiterlimit="10" />
            </svg>
        </div>
        {message && withBackdrop && <p className="loader__message">{message}</p>}
        {!withBackdrop && message && <p className="loader__message">{message}</p>}
    </div>
)

Spinner.propTypes = {
    withBackdrop: PropTypes.bool,
    message: PropTypes.string,
}