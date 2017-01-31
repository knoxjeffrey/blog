import * as types from '../constants';

export default function(state = 0, action) {
  switch (action.type) {
  case types.UPDATE_SCROLL_POSITION:
    return action.payload
  }
  return state;
}
