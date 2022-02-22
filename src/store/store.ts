import { createStore, applyMiddleware } from 'redux';
import { Reducers } from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(Reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
