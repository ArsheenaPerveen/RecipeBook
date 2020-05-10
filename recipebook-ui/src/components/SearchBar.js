import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import useStyles from '../useStyles';

const SearchBar = ({ onSearch }) => {
  const classes = useStyles();
  const handleOnChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search Recipe…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchBar;
