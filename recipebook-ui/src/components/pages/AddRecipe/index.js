import React from 'react';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles/useStyles';
import useFormValidation from './useFormValidation';
import validateForm from '../../../utils/validateForm';
import RecipeForm from '../../molecules/RecipeForm';
import Navbar from '../../organisms/Navbar';

const AddRecipe = ({ handleData }) => {
  const classes = useStyles();
  const initialState = {
    title: '',
    userName: '',
    recipeType: '',
    cookingTime: '',
    preparationTime: '',
    servings: 0,
    difficultyLevel: '',
    description: '',
    ingredients: '',
    steps: '',
    image: '',
  };
  const values = useFormValidation(initialState, validateForm, handleData);

  return (
    <>
      <Navbar />
      <div>
        {values.redirect ? <Redirect to="/" /> : ''}
        <Typography variant="h4" align="center" className={classes.formHeader}>
          Add Your Recipe
        </Typography>
        <RecipeForm data={values} />
      </div>
    </>
  );
};

export default AddRecipe;
