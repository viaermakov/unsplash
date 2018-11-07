import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';

import AppPage from 'src/components/blocks/app';
import FeedContainer from 'src/containers/pages/feed';
import ProfileContainer from 'src/containers/pages/profile';
import ModalViewPhotoContainer from 'src/containers/pages/view-photo';
import SearchFeedContainer from 'src/containers/pages/search-feed';


class ModalSwitch extends Component {

    static propTypes = {
        location: PropTypes.object,
        history: PropTypes.object
    }

    previousLocation = this.props.location;

    componentDidUpdate(prevProps) {
        let { location, history } = this.props;
        if (history.action !== "POP" &&
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
        
        return (
            <AppPage>
                <div>
                    <Switch location={isModal ? this.previousLocation : location}>
                        <Route exact path="/" render={() => { return <Redirect to='/feed' /> }} />
                        <Route path="/feed" component={FeedContainer} />
                        <Route path="/profile/:id" component={ProfileContainer} />
                        <Route path="/search/:query" component={SearchFeedContainer} />
                        {!isModal && <Route path="/photo/:idPhoto" render={() => <ModalViewPhotoContainer isFull={true} />} />}
                    </Switch>
                    {isModal && <Route path="/photo/:idPhoto" component={ModalViewPhotoContainer} />}
                </div>
            </AppPage>
        );
    }
}
export default withRouter(ModalSwitch);