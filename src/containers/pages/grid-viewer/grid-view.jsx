import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllPhotos } from 'src/actions/feed';
import { getAllPhotos, getPhotosLoadingStatus } from 'src/reducers/feed/selectors';

import Feed from 'src/components/pages/feed';
import AppPage from 'src/components/blocks/app';


class GridViewerContainer extends Component {

    state = {
        page: 1
    }

    componentDidMount() {
        const { actions: { onFetchAllPhotos } } = this.props;
        const { page } = this.state;

        onFetchAllPhotos(page);
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        // console.log(this.props.status);
        // console.log(this.props.status.isFetching);
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)
            && this.props.photos.length > 0 && !this.props.status.isFetching) {
            this.setState((prevProps) => ({ page: prevProps.page += 1 }));
            this.props.actions.onFetchAllPhotos(this.state.page + 1)
        }
    }

    render() {
        return (
            <AppPage>
                {/* <SortedHeader /> */}
                <Feed {...this.props} />
            </AppPage>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        photos: getAllPhotos(state),
        status: getPhotosLoadingStatus(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchAllPhotos: (page) => dispatch(fetchAllPhotos(page))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(GridViewerContainer);