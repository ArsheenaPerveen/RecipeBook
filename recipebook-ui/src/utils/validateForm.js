export default function validateForm(values) {
  const errors = {};
  const {
    title,
    recipeType,
    userName,
    cookingTime,
    preparationTime,
    servings,
    difficultyLevel,
    image,
  } = values;
  if (!/^[a-zA-Z\s]*$/.test(title)) {
    errors.title = 'Only letters and spaces can be included';
  }
  if (!recipeType) {
    errors.recipeType = 'Field is required';
  }
  if (cookingTime < 1) {
    errors.cookingTime = 'Add appropraite value';
  }
  if (preparationTime < 1) {
    errors.preparationTime = 'Add appropraite value';
  }
  if (servings < 1) {
    errors.servings = 'Add appropraite value';
  }
  if (!/^[a-zA-Z\s]*$/.test(userName)) {
    errors.userName = 'Only letters and spaces can be included';
  }
  if (!difficultyLevel) {
    errors.difficultyLevel = 'Select atleast one';
  }
  if (!!image.match(/\/(gif|jpeg|png|jpg)$/)) {
    errors.image = 'Add image URL only';
  }
  return errors;
}
