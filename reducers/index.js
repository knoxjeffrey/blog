import { combineReducers } from 'redux';

import NavActiveReducer from './reducer_nav_active'
import MainPageActiveReducer from './reducer_main_page_active'
import scrollPositionReducer from './reducer_scroll_position'

const rootReducer = combineReducers({
  navActive: NavActiveReducer,
  mainPageActive: MainPageActiveReducer,
  scrollPosition: scrollPositionReducer
});

export default rootReducer;
