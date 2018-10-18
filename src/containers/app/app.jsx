import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPhoto } from 'src/actions'

import App from 'src/components/app/app';
import { getRandomPhoto } from 'src/reducers/app/selectors';


class AppContainer extends Component {

    componentDidMount() {
        const { actions: { onFetchPhoto } } = this.props;
        //onFetchPhoto();
    }

    render() {
        const { randomPhoto } = this.props

        return (
            <App {...this.props} />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        randomPhoto: getRandomPhoto(state),
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchPhoto: () => dispatch(fetchPhoto())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);