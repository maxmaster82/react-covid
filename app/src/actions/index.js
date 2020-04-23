import fetch from 'cross-fetch'
import * as types from '../constans/ActionTypes';
import moment from 'moment';

function requestCountries() {
  return {
    type: types.REQUEST_COUNTRIES,
  }
}

function receiveCountries(countries) {
  return {
    type: types.RECEIVE_COUNTRIES,
    countries,
  }
}

export function searchCountry(country) {
  return {
    type: types.SEARCH_COUNTRY,
    country
  }
}

export function fetchCountries() {
  return dispatch => {
    dispatch(requestCountries());
    return fetch(`/api/countries`)
      .then(response => response.json())
      .then(countries => dispatch(receiveCountries(countries)))
  }
}

function requestDailyStats() {
  return {
    type: types.REQUEST_DAILY_STATS
  }
}

function requestWeekStats() {
  return {
    type: types.REQUEST_WEEK_STATS
  }
}

function receiveDailyStats(dailyStats) {
  return {
    type: types.RECEIVE_DAILY_STATS,
    dailyStats
  }
}

function receiveWeekStats(weekStats) {
  return {
    type: types.RECEIVE_WEEK_STATS,
    weekStats
  }
}

export function fetchDailyStats(slug) {
  return dispatch => {
    dispatch(requestDailyStats());
    return fetch(`https://api.covid19api.com/live/country/${slug}/status/confirmed`)
      .then(response => response.json())
      .then(dailyStats => dispatch(receiveDailyStats(dailyStats)))
  }
}

export function fetchWeekStats(slug) {
  const today = moment();
  const from_date = today.startOf('week').format('YYYY-MM-DD[T00:00:00Z]');
  const to_date = today.endOf('week').format('YYYY-MM-DD[T00:00:00Z]');

  return dispatch => {
    dispatch(requestWeekStats());
    return fetch(`https://api.covid19api.com/country/${slug}/status/confirmed?from=${from_date}&to=${to_date}`)
      .then(response => response.json())
      .then(weekStats => dispatch(receiveWeekStats(weekStats)))
  }
}

