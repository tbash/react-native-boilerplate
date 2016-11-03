import { createSelector } from 'reselect';

/**
 * Direct selector to the form state domain
 */
const selectNavContainerDomain = () => state => state.get('navContainer');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Form
 */

const selectNavContainer = () => createSelector(
  selectNavContainerDomain(),
  (substate) => substate.toJS()
);

export default selectNavContainer;
export {
  selectNavContainerDomain,
};
