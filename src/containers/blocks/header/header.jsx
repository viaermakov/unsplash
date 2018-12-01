import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from 'src/components/blocks/header';


class HeaderContainer extends Component {

    static propTypes = {
        history: PropTypes.object,
        location: PropTypes.object
    }

    state = {
        query: ''
    }

    componentDidMount() {
        const { location: { pathname } } = this.props;

        if (pathname.indexOf('search') !== -1) {
            const val = pathname.slice(pathname.indexOf('search') + 7); //подумать
            this.setState({ query: val })
        }
    }

    handleGoToHome = () => {
        const { history, location: { pathname }  } = this.props;

        this.setState({ query: '' })

        if (pathname.indexOf('feed') === -1) {
            history.push('/feed');
        }
    }

    handleOnChange = ({ value }) => {
        this.setState({ query: value })
    }

    handleOnEnter = () => {
        const { history } = this.props;
        const { query } = this.state;

        history.push(`/search/${query}`);
    }

    render() {
        const { query } = this.state;

        return (
            <Header
                handlerGoToHome={this.handleGoToHome}
                handleOnChange={this.handleOnChange}
                handleOnEnter={this.handleOnEnter}
                value={query}
            />
        );
    }
}


export default withRouter(connect(null, null)(HeaderContainer));