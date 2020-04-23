import {
  REQUEST_DAILY_STATS,
  RECEIVE_DAILY_STATS,
  REQUEST_WEEK_STATS,
  RECEIVE_WEEK_STATS,
} from '../constans/ActionTypes';

const initialState = {
  isFetching: false,
  dailyStats: [],
  weekStats: [],
};

function stats(state = initialState, action) {
  switch (action.type) {

    case REQUEST_DAILY_STATS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_DAILY_STATS:
      return Object.assign({}, state, {
        isFetching: false,
        dailyStats: action.dailyStats,
      });

    case REQUEST_WEEK_STATS:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_WEEK_STATS:
      return Object.assign({}, state, {
        isFetching: false,
        weekStats: action.weekStats,
      });

    default:
      return state
  }
}

export default stats;