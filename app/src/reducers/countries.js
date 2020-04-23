import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  SEARCH_COUNTRY,
} from '../constans/ActionTypes';

const initialState = {
  isFetching: false,
  filteredCountries: [],
  allCountries: [],
};

function countries(state = initialState, action) {
  switch (action.type) {

    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: true,
      });

    case RECEIVE_COUNTRIES:
      return Object.assign({}, state, {
        isFetching: false,
        allCountries: action.countries,
        filteredCountries: action.countries,
      });

    case SEARCH_COUNTRY:
      const nameExp = new RegExp(action.country, 'i');
      let newState = Object.assign({}, state);
      let filteredCountries = state.allCountries.filter(country => {
        return nameExp.test(country.Country);
      });
      newState.filteredCountries = filteredCountries;
      return newState;
    default:
      return state
  }
}

export default countries;