import { createSelector } from 'reselect';

/**
 * Direct selector to the navigation state domain
 */
const selectNavigationDomain = () => (state) => state.get('navigation');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Navigation
 */

const makeSelectNavigation = () => createSelector(
  selectNavigationDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNavigation;
export {
  selectNavigationDomain,
};
