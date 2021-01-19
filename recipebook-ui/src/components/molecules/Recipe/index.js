import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ViewRecipe from '../../organisms/ViewRecipe';
import useStyles from '../../styles/useStyles';

const Recipe = ({ data }) => {
  const classes = useStyles();
  const { imageURL, title, userName, difficultyLevel, description, cookingTime } = data;
  return (
    <div>
      {data ? (
        <Card>
          <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={imageURL} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="overline" color="inherit">
              Recipe by: {userName}
            </Typography>
            <Typography variant="body1" color="initial" className={classes.otherDetails}>
              Cooking Time: {cookingTime}
            </Typography>
            <Typography variant="body1" color="initial" className={classes.otherDetails}>
              Difficulty Level: {difficultyLevel}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <ViewRecipe recipe={data} />
          </CardActions>
        </Card>
      ) : null}
    </div>
  );
};

Recipe.defaultProps = {
  data: {
    title: '',
    userName: '',
    imageURL: '',
    description: '',
    difficultyLevel: '',
  },
};

Recipe.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    userName: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
    difficultyLevel: PropTypes.string,
  }),
};

export default Recipe;
