import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './search.scss'

export const Search = ({ id, className, onChange, onEnter, value, placeholder, disabled }) => {
    const handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleOnEnter(event);
        }
    }

    const handleOnChange = (event) => {
        const { value } = event.target;
        onChange && onChange({ id, value });
    }

    const handleOnEnter = (event) => {
        const { value } = event.target;
        onEnter && onEnter(id, value);
    }

    return (
        <input
            className={classNames(className, "search-input")}
            id={id}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={handleOnChange}
            onKeyPress={handleOnKeyPress}
        />
    )
}


Search.propTypes = {
    id: PropTypes.string, 
    className: PropTypes.string,
    value: PropTypes.string, 
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func, 
    onEnter: PropTypes.func,
}

Search.defautProps = {
    id: "default",
    value: "",
    placeholder: "Find...",
    onChange: () => {},
    onKeyPress: () => {}
}