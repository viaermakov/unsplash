
import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import GridViewContainer from 'src/containers/pages/feed';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" render={() => { return <Redirect to='/feed' /> }} />
            <Route path='/feed' component={GridViewContainer} />
        </Switch>
    </BrowserRouter>
)


export default Routes;
