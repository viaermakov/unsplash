import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './search.scss'

export default class Search extends Component {

    handleOnKeyPress = (event) => {
        if (event.key === 'Enter') {
            // event.preventDefault();
            this.handleOnEnter(event);
        }
    }

    handleOnChange = (event) => {
        const { id, onChange } = this.props;
        const { value } = event.target;

        onChange && onChange({id, value});
    }

    handleOnEnter = (event) => {
        const { id, onEnter } = this.props;
        const { value } = event.target;

       onEnter && onEnter(id, value);
    }

    render(){
        const { id, type, placeholder, disabled, value, className } = this.props;

        return(
            <input
                className={ classNames(className, 'search-input') }
                id={ id ? id : null }
                value={ value ? value : '' }
                placeholder={ placeholder || 'Найти...' }
                onChange={ this.handleOnChange }
                onKeyPress={ this.handleOnKeyPress }
            />
        );
    }
}
