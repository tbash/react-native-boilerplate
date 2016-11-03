import navContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('navContainerReducer', () => {
  it('returns the initial state', () => {
    expect(navContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
