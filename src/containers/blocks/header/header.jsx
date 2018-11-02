import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from 'src/components/blocks/header';


class HeaderContainer extends Component {

    componentDidMount() {

    }

    handlerGoToHome = () => {
        const { history, match: { params, url } } = this.props;

        if (url.indexOf("feed") === -1) {
            history.push(`/feed`);
        }
    }

    render() {
        return (
            <Header {...this.props} handlerGoToHome={this.handlerGoToHome} />
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         randomPhoto: getRandomPhoto(state),
//     }
// }


// const mapDispatchToProps = (dispatch) => ({
//     actions: {
//         onFetchPhoto: () => dispatch(fetchPhoto())
//     }
// })


export default withRouter(connect(null, null)(HeaderContainer));