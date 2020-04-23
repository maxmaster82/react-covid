import { combineReducers } from 'redux'
import countries from './countries';
import stats from './stats';

export default combineReducers({
  countries,
  stats,
})