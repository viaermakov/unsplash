
import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import SwitchModal from 'src/routes/switch';

const Routes = () => (
    <BrowserRouter>
        <Route component={SwitchModal} />
    </BrowserRouter>
)

export default Routes;
