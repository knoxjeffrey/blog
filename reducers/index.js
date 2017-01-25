import { combineReducers } from 'redux';

import NavActiveReducer from './reducer_nav_active'
import MainPageActiveReducer from './reducer_main_page_active'

const rootReducer = combineReducers({
  navActive: NavActiveReducer,
  mainPageActive: MainPageActiveReducer
});

export default rootReducer;
