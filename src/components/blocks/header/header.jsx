import React from 'react';

import Logo from 'src/components/blocks/logo';
import Tabs from 'src/components/blocks/tabs';
import Search from 'src/components/library/search';

import './header.scss';

export const Header = () => (
    <header className="app-header" >
        <Logo />
        <Search />
        <Tabs />
    </header>
)
