import React from 'react';
import PropTypes from 'prop-types';

import './tabs.scss';

export default class Layout extends React.Component {

    render() {
        return (
            <ul className="tabs" type="none">
                <li className="tabs__item">Пример 1</li>
                <li className="tabs__item">Пример 2</li>
                <li className="tabs__item">Пример 3</li>
            </ul>
        );
    }
}
