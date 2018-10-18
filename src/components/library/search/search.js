import React, { Component } from 'react';
import PropTypes from 'prop-types';

//import classNames from 'classnames';

import './search.scss'

export default class Search extends Component {

    state = {
        value: ''
    }

    handlerOnKeyPress(event){
        // on Enter
        if (event.key === 'Enter') {
            // event.preventDefault();
            this.handlerOnEnter(event);
        }
    }

    handlerOnChange(event){
        const { id, onChange } = this.props;
        const { value } = event.target;

        this.setState({ value })
        onChange && onChange(id, value);
    }

    handlerOnEnter(event){
        const { id, onEnter } = this.props;
        const { value } = event.target;

        onEnter && onEnter(id, value);
    }

    render(){
        //const classes = this.getComponentClassNames();
        const { id, type, placeholder, disabled } = this.props;
        const { value } = this.state;

        return(
            <input
                //className={ classes.component }
                id={ id ? id : null }
                value={ value ? value : '' }
                placeholder={ placeholder || '' }
                onChange={ this.handlerOnChange }
                onKeyPress={ this.handlerOnKeyPress }
            />
        );
    }
}
