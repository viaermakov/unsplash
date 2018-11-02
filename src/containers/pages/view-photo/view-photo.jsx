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
        relatedPhotos: PropTypes.array,
        chosenPhoto: PropTypes.object
    }

    state = {
        isIncreased: false
    }

    componentDidMount() {
        const { actions: { onFetchChosenPhoto, onFetchRelatedPhotos }, match: { params } } = this.props;

        onFetchChosenPhoto(params.idPhoto);
        onFetchRelatedPhotos();

        document.body.style.overflowY = "hidden";
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

        if (location.state && location.state.previousPage === "profile") {
            history.push( `/profile/${location.state.previousUser}`);
        }
        else {
            history.push(`/feed`);
        }
    }

    handlerOnOpenModal = (id) => {
        const { history,  location } = this.props;

        const historyState = {
                previousUser: location.state.previousPage === "profile" && location.state.previousUser,
                previousPage: location.state.previousPage, 
                modal: true
        }

        history.push({
            state: historyState,
            pathname: `/photo/${id}`
        });

        document.getElementById("modal").scrollIntoView(true);
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
        const { status: { isFetching }, chosenPhoto, relatedPhotos } = this.props;
        const { isIncreased } = this.state;

        return (
            <Modal handlerOnClose={this.handlerOnClose}>
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