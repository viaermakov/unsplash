import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'src/components/blocks/logo';
import Tabs from 'src/components/blocks/tabs';
import Search from 'src/components/library/search';

import './header.scss';

export const Header = ({ handlerGoToHome }) => (
    <header className="app-header" >
        <Logo handlerGoToHome={handlerGoToHome} />
        <Search />
        <Tabs />
    </header>
)

Header.propTypes = {
    handlerGoToHome: PropTypes.func
}