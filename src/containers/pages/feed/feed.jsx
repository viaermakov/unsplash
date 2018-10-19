import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllPhotos } from 'src/actions/feed';
import { getAllPhotos } from 'src/reducers/feed/selectors';

import Feed from 'src/components/pages/feed';
import AppPage from 'src/components/blocks/app';




class FeedContainer extends Component {

    componentDidMount() {
        const { actions: { onFetchAllPhotos } } = this.props;
        //onFetchAllPhotos(); 
    }

    render() {
        return (
            <AppPage>
                <Feed {...this.props} />
            </AppPage>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        photos: getAllPhotos(state),
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchAllPhotos: () => dispatch(fetchAllPhotos())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);