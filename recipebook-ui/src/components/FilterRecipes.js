import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import useStyles from '../useStyles';

const FilterRecipes = ({ list, filterData }) => {
  const classes = useStyles();
  const initialTypeState = {
    dessert: false,
    snacks: false,
    maincourse: false,
    beverages: false,
    appetiser: false,
    salad: false,
    others: false,
  };
  const [types, setTypes] = useState(initialTypeState);
  const [level, setLevel] = useState('');
  const [servings, setServings] = useState('');
  const { dessert, snacks, maincourse, beverages, appetiser, salad, others } = types;
  const handleRecipeType = (event) => {
    setTypes({ ...types, [event.target.name]: event.target.checked });
  };
  const handleDifficultyLevel = (event) => {
    setLevel(event.target.value);
  };
  const handleServings = (event) => {
    setServings(event.target.value);
  };
  function filterServing() {
    return list.filter((item) => {
      if (servings === 'From 2 to 4') return item.servings >= 2 && item.servings <= 4;
      else if (servings === 'From 5 to 8') return item.servings >= 5 && item.servings <= 8;
      else return item.servings > 8;
    });
  }
  const filteredRecipes = () => {
    let selectedServing = filterServing();
    let selectedTypes = Object.keys(types).filter((key) => types[key] === true);
    let filteredRecipeArray = list.filter((item) => {
      return (
        selectedTypes.includes(item.recipeType.toLowerCase().split(' ').join('')) &&
        item.difficultyLevel.toLowerCase() === level &&
        selectedServing
      );
    });
    filterData(filteredRecipeArray);
  };
  const resetFilter = () => {
    setLevel('');
    setServings('');
    setTypes(initialTypeState);
    filterData();
  };
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <Typography variant="subtitle1">Filter Recipes</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expandPanel}>
          <FormControl component="fieldset" className={classes.filterForm}>
            <FormLabel component="legend">Type of Recipes</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox checked={dessert} onChange={handleRecipeType} name="dessert" />}
                label="Dessert"
              />
              <FormControlLabel
                control={<Checkbox checked={snacks} onChange={handleRecipeType} name="snacks" />}
                label="Snacks"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={appetiser} onChange={handleRecipeType} name="appetiser" />
                }
                label="Appetiser"
              />
              <FormControlLabel
                control={<Checkbox checked={salad} onChange={handleRecipeType} name="salad" />}
                label="Salad"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={maincourse} onChange={handleRecipeType} name="maincourse" />
                }
                label="Main Course"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={beverages} onChange={handleRecipeType} name="beverages" />
                }
                label="Beverages"
              />
              <FormControlLabel
                control={<Checkbox checked={others} onChange={handleRecipeType} name="others" />}
                label="Others"
              />
            </FormGroup>
          </FormControl>
          <Divider />
          <FormControl component="fieldset" className={classes.filterForm}>
            <FormLabel component="legend">Difficulty level</FormLabel>
            <RadioGroup
              row
              aria-label="difficulty level"
              name="difficultyLevel"
              value={level}
              onChange={handleDifficultyLevel}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel value="moderate" control={<Radio />} label="Moderate" />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControl component="fieldset" className={classes.filterForm}>
            <FormLabel component="legend">Servings</FormLabel>
            <RadioGroup
              row
              aria-label="Servings"
              name="servings"
              value={servings}
              onChange={handleServings}
            >
              <FormControlLabel value="From 2 to 4" control={<Radio />} label="From 2 to 4" />
              <FormControlLabel value="From 5 to 8" control={<Radio />} label="From 5 to 8" />
              <FormControlLabel value="more than 8" control={<Radio />} label="More than 8" />
            </RadioGroup>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={filteredRecipes}
            className={classes.applyFilterBtn}
          >
            Apply
          </Button>
          <Button variant="contained" onClick={resetFilter} className={classes.applyFilterBtn}>
            Reset
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

FilterRecipes.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilterRecipes;
