import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser, fetchUserPhotos } from 'src/actions/profile';
import { getUserPhotos, getStatusesUser, getInfoUser } from 'src/reducers/profile/selectors';

import { Spinner } from 'src/components/library/spinner/spinner';
import AppPage from 'src/components/blocks/app';
import Profile from 'src/components/pages/profile';


class ProfileContainer extends Component {

    static propTypes = {
        history: PropTypes.object,
        actions: PropTypes.shape({
            onFetchChosenPhoto: PropTypes.func,
            onFetchRelatedPhotos: PropTypes.func
        }),
        match: PropTypes.object,
        userInfo: PropTypes.object,
        userPhotos: PropTypes.object,
        statuses: PropTypes.object,
    }

    componentDidMount() {
        const { actions: { onFetchUser, onFetchUserPhotos }, match: { params } } = this.props;
        onFetchUser(params.id);
        onFetchUserPhotos(params.id);
    }

    componentDidUpdate(prevProps) {
        const { actions: { onFetchUser, onFetchUserPhotos }, match: { params } } = this.props;

        if (prevProps.match.params.id !== params.id) {
            onFetchUser(params.id);
            onFetchUserPhotos(params.id);
        }
    }

    handlerOpenModal = (id) => {
        const { history, match: { params } } = this.props;

        const stateHistory = {
            modal: true,
            previousPage: "profile",
            previousUser: params.id
        }

        history.push({
            state: stateHistory,
            pathname: `/photo/${id}`
        });
    }


    render() {
        const {
            userInfo,
            userPhotos,
            statuses: { isFetching },
            match: { params }
        } = this.props;

        return (
            <React.Fragment>
                {
                    !isFetching && userInfo
                        ? <Profile
                            userInfo={userInfo}
                            userPhotos={userPhotos}
                            id={params.id}
                            handlerOpenModal={this.handlerOpenModal}
                        />
                        : <Spinner />
                }
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        userInfo: getInfoUser(state),
        statuses: getStatusesUser(state),
        userPhotos: getUserPhotos(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchUser: (id) => dispatch(fetchUser(id)),
        onFetchUserPhotos: (id) => dispatch(fetchUserPhotos(id))
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileContainer));