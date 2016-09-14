import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { ActionConst } from 'react-native-router-flux';

const routeInitialState = fromJS({
  scene: {},
});

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case ActionConst.FOCUS:
      return state.merge({
        scene: action.scene,
      });
    default:
      return state;
  }
}

import app from './containers/App/reducer';

export const createReducer = () => {
  return combineReducers({
    routes: routeReducer,
    app,
  });
}

export default createReducer;
