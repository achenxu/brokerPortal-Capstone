
import { fromJS } from 'immutable';
import navigationReducer from '../reducer';

describe('navigationReducer', () => {
  it('returns the initial state', () => {
    expect(navigationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
