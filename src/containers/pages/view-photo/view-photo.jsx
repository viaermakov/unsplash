import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchChosenPhoto, closeModal } from 'src/actions/view-photo';
import { getChosenPhoto, getStatusesViewPhoto } from 'src/reducers/view-photo/selectors';

import Modal from 'src/components/blocks/modal';
import ModalViewPhoto from 'src/components/pages/view-photo';
import { Spinner } from 'src/components/library/spinner/spinner';


class ModalViewPhotoContainer extends Component {

    static propTypes = {
        history: PropTypes.object
    }

    componentDidMount() {
        const { actions: { onFetchChosenPhoto }, match: { params } } = this.props;
        onFetchChosenPhoto(params.id);

        document.body.style.overflowY = "hidden";
    }

    componentWillUnmount() {
        document.body.style.overflowY = "auto";
    }

    handlerOnClose = () => {
        const { history, actions: { onCloseModal } } = this.props;
        onCloseModal && onCloseModal();
        history.goBack();
    }

    render() {
        const { status: { isFetching }, chosenPhoto } = this.props;
        return (
            <Modal handlerOnClose={this.handlerOnClose}>
                {
                    !isFetching && chosenPhoto
                        ? <ModalViewPhoto {...chosenPhoto} />
                        : <Spinner />
                }
            </Modal>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        chosenPhoto: getChosenPhoto(state),
        status: getStatusesViewPhoto(state)
    }
}


const mapDispatchToProps = (dispatch) => ({
    actions: {
        onFetchChosenPhoto: (id) => dispatch(fetchChosenPhoto(id)),
        onCloseModal: () => dispatch(closeModal())
    }
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModalViewPhotoContainer));