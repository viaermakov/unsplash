import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';


import FeedContainer from 'src/containers/pages/feed';
import ProfileContainer from 'src/containers/pages/profile';
import ModalViewPhotoContainer from 'src/containers/pages/view-photo';


class ModalSwitch extends Component {

    static propTypes = {
        location: PropTypes.object,
    }

    previousLocation = this.props.location;

    componentDidUpdate(nextProps) {
        let { location } = this.props;
        if (nextProps.history.action !== "POP" &&
            (!location.state || !location.state && !location.state.modal)) {
            this.previousLocation = location;
        }
    }

    render() {
        const { location } = this.props;

        const isModal = !!(
            location.state &&
            location.state.modal &&
            this.previousLocation !== location
        );

        const previousPage = location.state && location.state.previousPage ? location.state.previousPage : null;

        return (
            <div>
                <Switch location={isModal ? this.previousLocation : location}>
                    <Route exact path="/" render={() => { return <Redirect to='/feed' /> }} />
                    <Route path="/feed" component={FeedContainer} />
                    <Route path="/profile/:id" component={ProfileContainer} />
                    <Route path="/photo/:idPhoto" component={ModalViewPhotoContainer} />

                    {isModal && previousPage === "feed" && <Route path="/feed" component={FeedContainer} />}
                    {isModal && previousPage === "profile" && <Route path="/profile/:id" component={ProfileContainer} />}
                </Switch>
                {isModal && <Route path="/photo/:idPhoto" component={ModalViewPhotoContainer} />}
            </div>
        );
    }
}
export default withRouter(ModalSwitch);