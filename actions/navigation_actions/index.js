import * as types from '../../constants';

export function toggleNav() {
  return {
    type: types.TOGGLE_NAV
  }
}

export function turnOffNav() {
  return {
    type: types.TURN_OFF_NAV
  }
}
