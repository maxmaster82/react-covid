import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchDailyStats, fetchWeekStats } from '../actions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import { Chart } from 'react-charts';

const styles = () => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


class Country extends Component {

  componentDidMount() {
    const slug = this.props.match.params.slug;
    const { dispatch } = this.props;
    dispatch(fetchDailyStats(slug));
    dispatch(fetchWeekStats(slug));
  }

  render() {
    let { classes, dailyStats, weekStats } = this.props;

    dailyStats = dailyStats.length > 0 ? dailyStats[dailyStats.length - 1] : null;

    const data = [
      {
        label: 'Confirmed',
        data: weekStats.length > 0 ? weekStats.slice(weekStats.length - 7, weekStats.length).map((item, index)  => {
          return [index + 1, item.Cases]
        }): []
      },
    ];
    
    const axes = [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ];

    return (
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`/flags/${dailyStats && dailyStats.CountryCode}.svg`}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom>
                  {dailyStats && dailyStats.Country}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={2}>
          {dailyStats ?
            <div>
              <p>Active: {dailyStats.Active}</p>
              <p>Confirmed: {dailyStats.Confirmed}</p>
              <p>Deaths: {dailyStats.Deaths}</p>
              <p>Recovered: {dailyStats.Recovered}</p>
            </div> : null}

        </Grid>
        <Grid item xs={6}>
          <div style={{ width: '400px', height: '300px' }}>
            <Chart data={data} axes={axes} />
          </div>
        </Grid>

      </Grid>
    );
  }
}

Country.propTypes = {
  dailyStats: PropTypes.array.isRequired,
  weekStats: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { dailyStats, weekStats, isFetching } = state.stats;
  return {
    dailyStats,
    weekStats,
    isFetching,
  }
}

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Country)));
