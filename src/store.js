import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import createReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export const configureStore = (initialState = {}) => {
  const middlewares = [
    sagaMiddleware,
    logger,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
