import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../styles/useStyles';
import SearchBar from '../../molecules/SearchBar';

const Navbar = ({ location, searchRecipes }) => {
  const classes = useStyles();
  const { pathname } = location;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="subtitle1" color="inherit" className={classes.title}>
          <Link to="/" className={classes.link}>
            RECIPE BOOK
          </Link>
        </Typography>
        {pathname !== '/addRecipe' && <SearchBar onSearch={searchRecipes} />}
        {pathname !== '/addRecipe' && (
          <Typography variant="subtitle2" color="inherit">
            <Link to="/addRecipe" className={classes.link}>
              ADD RECIPE
            </Link>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  pathname: PropTypes.string,
};

export default withRouter(Navbar);
