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

        onFetchChosenPhoto(params.id);
        onFetchRelatedPhotos();

        document.body.style.overflowY = "hidden";
    }

    componentDidUpdate(prevProps) {
        const { actions: { onFetchChosenPhoto, onFetchRelatedPhotos }, match: { params } } = this.props;

        if (prevProps.match.params.id !== params.id) {
            onFetchChosenPhoto(params.id);
            onFetchRelatedPhotos();

        }
    }

    componentWillUnmount() {
        document.body.style.overflowY = "auto";
    }

    handlerOnOpenModal = (id) => {
        const { history } = this.props;
        history.push(`/feed/${id}`);

        document.getElementById("modal").scrollIntoView(true);
    }

    handlerOnClose = () => {
        const { history, actions: { onCloseModal } } = this.props;
        onCloseModal && onCloseModal();
        history.push('/feed');
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