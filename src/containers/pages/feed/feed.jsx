import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchAllPhotos, fetchOtherOrder, fetchMorePhotos } from 'src/actions/feed';
import { getAllPhotos, getPhotosLoadingStatus } from 'src/reducers/feed/selectors';

import SortedHeader from 'src/components/blocks/sorted-toolbar';
import Feed from 'src/components/pages/feed';
import AppPage from 'src/components/blocks/app';
import { Spinner } from 'src/components/library/spinner/spinner';


class FeedContainer extends Component {

    static propTypes = {
        photos: PropTypes.shape({
            IDs: PropTypes.array,
            byID: PropTypes.object
        }),
        status: PropTypes.shape({
            isFetching: PropTypes.bool,
            error: PropTypes.string
        }),
        history: PropTypes.object,
        actions: PropTypes.object
    }

    state = {
        page: 1,
        typeOrder: "latest"
    }

    componentDidMount() {
        const { actions: { onFetchAllPhotos } } = this.props;
        const { page, typeOrder } = this.state;
        onFetchAllPhotos(page, typeOrder);

        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    handlerOpenModal = (id) => {
        const { history } = this.props;

        history.push({
            state: {
                modal: true,
                previousPage: "feed"
            },
            pathname: `/photo/${id}`
        });
    }

    onScroll = () => {
        const { actions: { onFetchMorePhotos }, photos, status: { isFetching } } = this.props;
        const { page, typeOrder } = this.state;

        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)
            && photos.length > 0 && !isFetching) {
            this.setState((prevProps) => ({ page: prevProps.page += 1 }));
            onFetchMorePhotos(page + 1, typeOrder)
        }
    }

    sortOrderBy = (type) => {
        const { actions: { onFetchOtherOrder } } = this.props;

        this.setState({ typeOrder: type })
        onFetchOtherOrder(type);
    }

    render() {
        const { photos, status: { isFetching } } = this.props;

        return (
            <React.Fragment>
                <SortedHeader sortOrderBy={this.sortOrderBy} />
                {
                    photos && photos.IDs.length > 0
                        ? <Feed {...this.props} handlerOpenModal={this.handlerOpenModal} />
                        : <Spinner />
                }
                {
                    isFetching && photos.IDs.length > 0
                    && <Spinner />
                }
            </React.Fragment>
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
        onFetchAllPhotos: (page, typeOrder) => dispatch(fetchAllPhotos(page, typeOrder)),
        onFetchMorePhotos: (page, typeOrder) => dispatch(fetchMorePhotos(page, typeOrder)),
        onFetchOtherOrder: (typeOrder) => dispatch(fetchOtherOrder(typeOrder))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FeedContainer));