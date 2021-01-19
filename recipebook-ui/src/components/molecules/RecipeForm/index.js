import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RenderList from '../../atoms/List';
import useStyles from '../../styles/useStyles';
import PropTypes from 'prop-types';

const RecipeForm = ({ data }) => {
    const classes = useStyles();
    const {
        handleSubmit,
        handleChange,
        handleFieldClick,
        values,
        items,
        instructions,
        errors,
        isSubmitting
    } = data;
    return (
        <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={8}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="title"
                        label="Recipe Name"
                        value={values.title}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.title}
                        helperText={errors.title}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="userName"
                        label="Published By"
                        value={values.userName}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.userName}
                        helperText={errors.userName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="cookingTime"
                        label="Cook Time"
                        type="number"
                        placeholder="EX: 40mins"
                        value={values.cookingTime}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.cookingTime}
                        helperText={errors.cookingTime}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="preparationTime"
                        label="Preparation Time"
                        type="number"
                        placeholder="EX: 20mins"
                        value={values.preparationTime}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.preparationTime}
                        helperText={errors.preparationTime}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        name="servings"
                        label="Number of Servings"
                        type="number"
                        placeholder="Ex: 4"
                        value={values.servings}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.servings}
                        helperText={errors.servings}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl className={classes.formControl} error={!!errors.recipeType}>
                        <InputLabel id="type-label">Recipe Type</InputLabel>
                        <Select
                            labelId="type-label"
                            name="recipeType"
                            value={values.recipeType}
                            onChange={handleChange}
                        >
                            <MenuItem value="Dessert">Dessert</MenuItem>
                            <MenuItem value="Snacks">Snacks</MenuItem>
                            <MenuItem value="Appetiser">Appetiser</MenuItem>
                            <MenuItem value="Salad">Salad</MenuItem>
                            <MenuItem value="Main Course">Main Course</MenuItem>
                            <MenuItem value="Beverages">Beverages</MenuItem>
                            <MenuItem value="Oher">Other</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{errors.recipeType}</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        component="fieldset"
                        className={classes.formControl}
                        error={!!errors.difficultyLevel}
                    >
                        <FormLabel component="legend">Select Difficulty level :</FormLabel>
                        <RadioGroup
                            row
                            aria-label="difficulty level"
                            name="difficultyLevel"
                            value={values.difficultyLevel}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="easy" control={<Radio color="primary" />} label="Easy" />
                            <FormControlLabel
                                value="moderate"
                                control={<Radio color="primary" />}
                                label="Moderate"
                            />
                            <FormControlLabel value="hard" control={<Radio color="primary" />} label="Hard" />
                        </RadioGroup>
                        <FormHelperText className={classes.helperText}>
                            {errors.difficultyLevel}
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="description"
                        label="Brief Recipe Description"
                        value={values.description}
                        fullWidth
                        required
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="ingredients"
                        label="Add ingredients"
                        fullWidth
                        onChange={handleChange}
                        value={values.ingredients}
                        className={classes.formField}
                    />
                    <Button
                        onClick={handleFieldClick}
                        color="primary"
                        variant="outlined"
                        size="small"
                        className={classes.filedBtn}
                    >
                        Add ingredients
            </Button>
                    {items && <RenderList data={items} />}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        aria-label="steps textarea"
                        label="Cooking Instruction"
                        name="steps"
                        fullWidth
                        className={classes.formField}
                        value={values.steps}
                        onChange={handleChange}
                    />
                    <Button
                        onClick={handleFieldClick}
                        color="primary"
                        variant="outlined"
                        size="small"
                        className={classes.filedBtn}
                    >
                        Add Steps
            </Button>
                    {instructions && <RenderList data={instructions} />}
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        name="image"
                        label="Add Image URL"
                        type="text"
                        value={values.image}
                        fullWidth
                        required
                        onChange={handleChange}
                        error={!!errors.image}
                        helperText={errors.image}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" type="submit" color="primary" disabled={isSubmitting}>
                        SUBMIT
            </Button>
                </Grid>
            </Grid>
        </form>
    )
}

RecipeForm.propTypes = {
    data: PropTypes.shape({
        values: PropTypes.shape({}),
        items: PropTypes.arrayOf(PropTypes.string),
        instructions: PropTypes.arrayOf(PropTypes.string),
        errors: PropTypes.shape({}),
        isSubmitting: PropTypes.bool
    }),
};

export default RecipeForm;