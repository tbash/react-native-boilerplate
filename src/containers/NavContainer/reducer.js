/*
 *
 * NavContainer reducer
 *
 */

import { NavigationExperimental } from 'react-native';
import { fromJS } from 'immutable';
import {
  NAV_PUSH,
  NAV_POP,
  NAV_JUMP_TO_KEY,
  NAV_JUMP_TO_INDEX,
  NAV_RESET,
} from './constants';

const { StateUtils: NavigationStateUtils } = NavigationExperimental;

const initialState = fromJS({
  index: 0,
  routes: [
    { key: 'First', title: 'First' }
  ]
});

function navContainerReducer(state = initialState, action) {
  switch (action.type) {
  case NAV_PUSH:
    const key = state.getIn(['routes', state.get('index')]).get('key');
    const routes = state.toJS();
    let nextRoutes;
    try {
      nextRoutes = NavigationStateUtils.jumpTo(routes, action.payload.key);
    } catch (e) {
      nextRoutes = NavigationStateUtils.push(routes, action.payload);
    }
    return state.merge(nextRoutes);
  case NAV_POP:
    if (state.get('index') === 0 || state.get('routes').count() === 1) {
      return state;
    } else {
      const scenes = NavigationStateUtils.pop(state.toJS());
      return state.merge(scenes);
    }
  case NAV_JUMP_TO_KEY:
    return state.merge(NavigationStateUtils.jumpTo(state, action.payload));
  case NAV_JUMP_TO_INDEX:
    return state.merge(NavigationStateUtils.jumpToIndex(state, action.payload));
  case NAV_RESET:
    return initialState;
  default:
    return state
  }
}

export default navContainerReducer;
