/*
 *
 * DashboardPage actions
 *
 */

import {
  UPDATE_FIELD,
  ADD_LEAD,
} from './constants';

export function updateField(field, value) {
  return {
    type: UPDATE_FIELD,
    field,
    value,
  };
}

export function addLead() {
  return {
    type: ADD_LEAD,
  };
}
