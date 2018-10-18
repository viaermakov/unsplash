import {
    applyMiddleware,
    compose,
    createStore
} from 'redux';

//import thunk from 'redux-thunk';
import createSagaMiddleware, { END} from 'redux-saga';

import {
    createLogger
} from 'redux-logger';

import rootReducer from 'src/reducers/root';
import rootSaga from 'src/sagas';


export default function configureStore() {
    const logger = createLogger();
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(
                sagaMiddleware,
                logger
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (fn) => fn
        )
    );

    store.runSaga = sagaMiddleware.run;

    return store;
}