import React from 'react';
import PropTypes from 'prop-types';

import './logo.scss';

export default class Layout extends React.Component {

    render() {
        return (
            <div className="logo">
                <p className="logo__label">React photos</p>
                <span className="logo__img"></span>
            </div>
        );
    }
}
