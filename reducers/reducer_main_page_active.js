import * as types from '../constants';

export default function(state = false, action) {
  switch (action.type) {
  case types.SHOW_MAIN_PAGE:
    return true
  }
  return state;
}
