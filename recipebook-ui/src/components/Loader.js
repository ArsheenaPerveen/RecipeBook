import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from '../useStyles';

const Loader = (props) => {
  const classes = useStyles();
  const { open } = props;
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

Loader.defaultProps = {
  open: false,
};

Loader.propTypes = {
  open: PropTypes.bool,
};

export default Loader;
