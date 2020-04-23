import React, { Component } from 'react';
import CountryListItem from '../components/CountryListItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCountries } from '../actions'
import Grid from '@material-ui/core/Grid';


class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCountries())
  }

  render() {
    const { filteredCountries } = this.props;

    return (
      <Grid container spacing={1} alignItems="stretch">
        {filteredCountries.map(country => (
          <Grid item xs={3} key={country.ISO2}>
            <CountryListItem country={country} key={`item-${country.ISO2}`}/>
          </Grid>
        ))}
      </Grid>
    );
  }
}

Home.propTypes = {
  filteredCountries: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { filteredCountries, isFetching } = state.countries;

  return {
    filteredCountries,
    isFetching,
  }
}

export default connect(mapStateToProps)(Home)
