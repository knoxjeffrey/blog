import * as types from '../../constants';

export function updateScrollPosition(position) {
  return {
    type: types.UPDATE_SCROLL_POSITION,
    payload: position
  }
}
