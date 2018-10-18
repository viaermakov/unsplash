import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'src/components/blocks/logo';
import Tabs from 'src/components/blocks/tabs';
import Search from 'src/components/library/search';

import './header.scss';

export default class Header extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <header className="app-header">
                <Logo />
                <Search />
                <Tabs />
            </header>
        );
    }
}
