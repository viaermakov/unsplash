import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchPhoto } from 'src/actions'

import Feed from 'src/components/pages/feed';
import AppPage from 'src/components/blocks/app';

//import { getRandomPhoto } from 'src/reducers/app/selectors';


class FeedContainer extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <AppPage>
                <Feed {...this.props} />
            </AppPage>
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


export default connect(null, null)(FeedContainer);