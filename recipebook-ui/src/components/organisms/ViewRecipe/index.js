import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import List from '../../atoms/List';

const ViewRecipe = ({ recipe }) => {
  const {
    title,
    userName,
    imageURL,
    cookingTime,
    preparationTime,
    ingredients,
    steps,
    servings,
    recipeType,
    difficultyLevel,
  } = recipe;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button size="small" color="primary" onClick={handleClick}>
        View Recipe
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="body" maxWidth="md" fullWidth>
        <DialogTitle>
          <Box>
            <Typography variant="h4">{title}</Typography>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardMedia style={{ height: 0, paddingTop: '56.25%' }} image={imageURL} title={title} />
            <CardContent>
              <Typography variant="subtitle1" color="textPrimary">
                Published By: {userName}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Type: {recipeType}
              </Typography>
              <Typography variant="caption" color="textPrimary" display="block">
                Cooking Time: {cookingTime}
              </Typography>
              <Typography variant="caption" color="textPrimary" display="block">
                Preparation Time: {preparationTime}
              </Typography>
              <Typography variant="overline" color="textSecondary" display="block">
                Servers: {servings} persons
              </Typography>
              <Typography variant="overline" color="textSecondary" display="block">
                Level: {difficultyLevel}
              </Typography>
              <Typography variant="button" color="textPrimary">
                Ingredients:
              </Typography>
              <List data={ingredients} />
              <Typography variant="button" color="textPrimary">
                Cooking Instruction:
              </Typography>
              <List data={steps} />
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

ViewRecipe.defaultProps = {
  recipe: {
    title: '',
    userName: '',
    imageURL: '',
    cookingTime: '',
    ingredients: [],
    steps: [],
  },
};

ViewRecipe.propTypes = {
  recipe: PropTypes.shape({
    title: PropTypes.string,
    userName: PropTypes.string,
    imageURL: PropTypes.string,
    cookingTime: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    steps: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default ViewRecipe;
