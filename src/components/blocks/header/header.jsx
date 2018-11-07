import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'src/components/blocks/logo';
import Tabs from 'src/components/blocks/tabs';
import Search from 'src/components/library/search';

import './header.scss';

export const Header = ({ value, handlerGoToHome, handleOnChange, handleOnEnter }) => (
    <header className="app-header" >
        <Logo handlerGoToHome={handlerGoToHome} />
        <Search 
            id="search" 
            onChange={handleOnChange} 
            onEnter={handleOnEnter}
            value={value}
        />
        <Tabs />
    </header>
)

Header.propTypes = {
    value: PropTypes.string,
    handlerGoToHome: PropTypes.func,
    handleOnChange: PropTypes.func,
    handleOnEnter: PropTypes.func
}