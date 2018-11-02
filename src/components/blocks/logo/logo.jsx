import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss';

export const Logo = ({ handlerGoToHome }) => (
    <div className="logo" onClick={handlerGoToHome}>
    <section className="logo__wrapper">
        <p className="logo__label">React photos</p>
        <span className="logo__img"></span>
        </section>
    </div>
);

Logo.propTypes = {
    handlerGoToHome: PropTypes.func
}

