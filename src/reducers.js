import { combineReducers } from 'redux-immutable';
import navContainer from './containers/NavContainer/reducer';

const createReducer = () => combineReducers({
	navContainer,
});

export default createReducer;
