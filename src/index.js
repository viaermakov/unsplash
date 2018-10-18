import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from 'src/store/configureStore';

import Routes from 'src/routes/root';
import rootSaga from 'src/sagas';

const store = configureStore();

store.runSaga(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('root')
);

