import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Loader from './Loader';
import Recipe from './Recipe';

const RecipeList = (props) => {
  const { recipeList, loadData } = props;
  return (
    <div>
      {loadData ? (
        <Loader open />
      ) : (
        <Grid container spacing={3} style={{ padding: 24 }}>
          {recipeList.map((recipe) => (
            <Grid item xs={12} sm={6} lg={4} xl={3} key={recipe._id}>
              <Recipe data={recipe} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

RecipeList.propTypes = {
  loadData: PropTypes.bool,
  recipeList: PropTypes.arrayOf(PropTypes.object),
};

export default RecipeList;
