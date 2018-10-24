
import React from 'react';

import { Route, Switch } from 'react-router-dom';

import ModalViewPhotoContainer from 'src/containers/pages/view-photo';

const FeedRoutes = () => (
    <Switch>
        <Route exact path='/feed/:id' component={ModalViewPhotoContainer} />
    </Switch>
)


export default FeedRoutes;
