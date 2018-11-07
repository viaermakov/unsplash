import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchChosenPhoto, fetchRelatedPhotos, closeModal } from 'src/actions/view-photo';
import { getChosenPhoto, getStatusesViewPhoto, getRelatedPhotos } from 'src/reducers/view-photo/selectors';

import Modal from 'src/components/blocks/modal';
import ModalViewPhoto from 'src/components/pages/view-photo';
import { Spinner } from 'src/components/library/spinner/spinner';


class ModalViewPhotoContainer extends Component {

    static propTypes = {
        history: PropTypes.object,
        actions: PropTypes.shape({
            onFetchChosenPhoto: PropTypes.func,
            onFetchRelatedPhotos: PropTypes.func
        }),
        match: PropTypes.object,
        location: PropTypes.object,
        status: PropTypes.shape({
            isFetching: PropTypes.bool,
            errorMessage: PropTypes.string
        }),
        relatedPhotos: PropTypes.object,
        chosenPhoto: PropTypes.object,
        isFull: PropTypes.bool
    }

    state = {
        isIncreased: false
    }

    componentDidMount() {
        const { actions: { onFetchChosenPhoto, onFetchRelatedPhotos }, match: { params }, isFull } = this.props;

        onFetchChosenPhoto(params.idPhoto);
        onFetchRelatedPhotos();

        if(!isFull) { 
            document.body.style.overflowY = "hidden"; 
        }
    }

    componentDidUpdate(prevProps) {
        const { actions: { onFetchChosenPhoto, onFetchRelatedPhotos }, match: { params } } = this.props;

        if (prevProps.match.params.idPhoto !== params.idPhoto) {
            onFetchChosenPhoto(params.idPhoto);
            onFetchRelatedPhotos();
        }
    }

    componentWillUnmount() {
        document.body.style.overflowY = "auto";
    }

    redirectToBack = () => {
        const { history, location } = this.props;

        if (location.state && location.state.previousPage === 'profile') {
            history.push(`/profile/${location.state.previousUser}`);
        }
        else if (location.state && location.state.previousPage === 'search') {
            history.push(`/search/${location.state.query}`);
        }
        else {
            history.push(`/feed`);
        }
    }

    handlerOnOpenModal = (id) => {
        const { history, location, isFull } = this.props;

        const historyState = {
            previousUser: !isFull || location.state.previousPage === 'profile' ? location.state.previousUser : null,
            previousPage: !isFull ? location.state.previousPage : null,
            modal: !isFull,
            query: location.state.previousPage === 'search' &&  location.state.query
        }

        history.push({
            state: historyState,
            pathname: `/photo/${id}`
        });

        document.getElementById('modal').scrollIntoView(true);
    }

    handlerOnClose = () => {
        const { actions: { onCloseModal } } = this.props;
        onCloseModal && onCloseModal();
        this.redirectToBack();
    }

    handlerIncreasePhoto = () => {
        this.setState((prevProps) => ({
            isIncreased: !prevProps.isIncreased
        }))
    }

    render() {
        const { status: { isFetching }, chosenPhoto, relatedPhotos, isFull } = this.props;
        const { isIncreased } = this.state;

        const type = isFull ? 'full' : 'default';

        return (
            <Modal type={type} handlerOnClose={this.handlerOnClose}>
                {
                    !isFetching && chosenPhoto
                        ? <ModalViewPhoto
                            isIncreased={isIncreased}
                            chosenPhoto={chosenPhoto}
                            relatedPhotos={relatedPhotos}
                            handlerOnOpenModal={this.handlerOnOpenModal}
                            handlerIncreasePhoto={this.handlerIncreasePhoto}
                        />
                        : <Spinner />
                }
            </Modal>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        chosenPhoto: getChosenPhoto(state),
        status: getStatusesViewPhoto(state),
        relatedPhotos: getRelatedPhotos(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchChosenPhoto: (id) => dispatch(fetchChosenPhoto(id)),
        onFetchRelatedPhotos: () => dispatch(fetchRelatedPhotos()),
        onCloseModal: () => dispatch(closeModal())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalViewPhotoContainer));