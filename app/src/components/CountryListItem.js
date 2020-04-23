import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CountryListItem(props) {

  const { country } = props;
  const linkTo = `/country/${country.Slug}`;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={linkTo}>
        <CardMedia
          className={classes.media}
          image={`/flags/${country.ISO2}.svg`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom>
            {country.Country}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="small" color="primary" component={Link} to={linkTo}>
          Daily static
        </Button>
      </CardActions>
    </Card>
  );
}

export default CountryListItem;
