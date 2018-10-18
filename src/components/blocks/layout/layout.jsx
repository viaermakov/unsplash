import React from 'react';
import PropTypes from 'prop-types';

import './layout.scss';

export default class Layout extends React.Component {

    static propTypes = {
        type: PropTypes.string,
        children: PropTypes.element
    }

    render() {
        const { children, type } = this.props;

        return (
            <div className={`layout-${type}`}>
                {children}
            </div>
        );
    }
}
