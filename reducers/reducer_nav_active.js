import * as types from '../constants';

export default function(state = false, action) {
  switch (action.type) {
  case types.TOGGLE_NAV:
    return state === false ? true : false
  case types.TURN_OFF_NAV:
    if(state === true) { return false }
  }
  return state;
}
