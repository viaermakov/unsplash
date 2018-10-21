import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllPhotos, fetchOtherOrder } from 'src/actions/feed';
import { getAllPhotos, getPhotosLoadingStatus } from 'src/reducers/feed/selectors';

import SortedHeader from 'src/components/blocks/sorted-toolbar';
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
        const { actions: { onFetchAllPhotos } } = this.props;

        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)
            && this.props.photos.length > 0 && !this.props.status.isFetching) {
            this.setState((prevProps) => ({ page: prevProps.page += 1 }));
            onFetchAllPhotos(this.state.page + 1)
        }
    }

    sortOrderBy = (type) => {
        const { actions: { onFetchOtherOrder } } = this.props;
        onFetchOtherOrder(type);
    }

    render() {
        return (
            <AppPage>
                <SortedHeader sortOrderBy={this.sortOrderBy} />
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
        onFetchAllPhotos: (page) => dispatch(fetchAllPhotos(page)),
        onFetchOtherOrder: (order) => dispatch(fetchOtherOrder(order))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(GridViewerContainer);