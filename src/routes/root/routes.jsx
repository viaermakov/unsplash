
import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import FeedContainer from 'src/containers/pages/feed';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => { return <Redirect to='/feed' /> }} />
            <Route path='/feed' component={FeedContainer} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
