import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// import { fetchChosenPhoto, fetchRelatedPhotos, closeModal } from 'src/actions/profile';
// import { getChosenPhoto, getStatusesViewPhoto, getRelatedPhotos } from 'src/reducers/profile/selectors';

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
        
    }

    componentDidMount() {
        //const { actions: { onFetchChosenPhoto, onFetchRelatedPhotos }, match: { params } } = this.props;


    }

    componentDidUpdate(prevProps) {
        
    }

    componentWillUnmount() {
       
    }

    render() {
        return (
            <AppPage>
                    <Profile />
                </AppPage>
            
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         chosenPhoto: getChosenPhoto(state),
//         status: getStatusesViewPhoto(state),
//         relatedPhotos: getRelatedPhotos(state)
//     }
// }


// const mapDispatchToProps = (dispatch) => ({
//     actions: {
//         onFetchChosenPhoto: (id) => dispatch(fetchChosenPhoto(id)),
//         onFetchRelatedPhotos: () => dispatch(fetchRelatedPhotos()),
//         onCloseModal: () => dispatch(closeModal())
//     }
// })


export default withRouter(connect(null, null)(ProfileContainer));