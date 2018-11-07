import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchSearchedPhotos, fetchMoreSearchedPhotos } from 'src/actions/search-feed';
import { getSearchedPhotos, getSearchedLoadingStatus } from 'src/reducers/search-feed/selectors';

import SearchFeed from 'src/components/pages/search-feed';
import Feed from 'src/components/pages/feed';
import { Spinner } from 'src/components/library/spinner/spinner';


class SearchFeedContainer extends Component {

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
        page: 1
    }

    componentDidMount() {
        const { actions: { onFetchSearchedPhotos }, match: { params } } = this.props;

        onFetchSearchedPhotos(params.query);
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentDidUpdate(prevProps) {
        const { actions: { onFetchSearchedPhotos }, match: { params } } = this.props;

        if (prevProps.match.params.query !== params.query) {
            onFetchSearchedPhotos(params.query);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    handlerOpenModal = (id) => {
        const { history,  match: { params } } = this.props;

        const stateHistory = {
            modal: true,
            previousPage: "search",
            query: params.query
        }

        history.push({
            state: stateHistory,
            pathname: `/photo/${id}`
        });
    }

    onScroll = () => {
        const { actions: { onFetchMoreSearchedPhotos }, photos, status: { isFetching }, match: { params } } = this.props;
        const { page } = this.state;

        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)
            && photos.IDs.length > 0 && !isFetching) {
            this.setState((prevProps) => ({ page: prevProps.page += 1 }));
            onFetchMoreSearchedPhotos(params.query, page + 1)
        }
    }


    render() {
        const { photos, status: { isFetching }, match: { params } } = this.props;
        
        return (
            <React.Fragment>
                {
                    photos.IDs && photos.IDs.length > 0
                        ? <SearchFeed {...this.props} handlerOpenModal={this.handlerOpenModal} query={params.query} />
                        : <Spinner />
                }
                {
                    isFetching && photos.IDs && photos.IDs.length > 0
                    && <Spinner />
                }
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        photos: getSearchedPhotos(state),
        status: getSearchedLoadingStatus(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchSearchedPhotos: (query) => dispatch(fetchSearchedPhotos(query)),
        onFetchMoreSearchedPhotos: (query, page) => dispatch(fetchMoreSearchedPhotos(query, page))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchFeedContainer));