
import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import GridViewContainer from 'src/containers/pages/feed';
import ProfileContainer from 'src/containers/pages/profile';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => { return <Redirect to='/feed' /> }} />
            <Route path='/feed' component={GridViewContainer} />
            <Route exact path='/profile/:id' component={ProfileContainer} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
