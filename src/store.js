import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import createReducer from './reducers'

const sagaMiddleware = createSagaMiddleware();

export const configureStore = (initialState = {}) => {
  const middlewares = [
    sagaMiddleware,
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
