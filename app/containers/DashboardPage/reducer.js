/*
 *
 * DashboardPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  UPDATE_FIELD,
  ADD_LEAD,
} from './constants';

const initialState = fromJS({
  leads: [
    { firstName: "Sam", lastName: "Wilkinson", email: "sam.w@gmail.com" },
    { firstName: "Norah", lastName: "Jones", email: "norahjones@best.com" },
    { firstName: "Robert", lastName: "Plant", email: "r.plant@gmail.com" },
    { firstName: "Matt", lastName: "Forester", email: "mat@gmail.com" },
    { firstName: "Annie", lastName: "Morris", email: "am@gmail.com" },
    { firstName: "Thomas", lastName: "Clay", email: "tdclay@yahoo.com" },
    { firstName: "Bonnie", lastName: "Vonderitz", email: "b.von@aol.com" },
    { firstName: "Loretta", lastName: "Lynn", email: "llynn@gmail.com" },
  ],
  clicks: 289,
  sends: 350,
  conversions: 89,
  earnings: 8348,
  firstName: '',
  lastName: '',
  email: '',
});

const initialFields = fromJS({
  firstName: '',
  lastName: '',
  email: '',
});


function dashboardPageReducer(state = initialState.merge(initialFields), action) {
  switch (action.type) {
    case UPDATE_FIELD:
      return state.set(action.field, action.value);
    case ADD_LEAD:
      return state.set('leads', (state.get('leads') || fromJS()).unshift(fromJS({
        firstName: state.get('firstName'),
        lastName: state.get('lastName'),
        email: state.get('email'),
        })
      ));
    default:
      return state;
  }
}

export default dashboardPageReducer;
