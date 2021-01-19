const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  cookingTime: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  recipeType: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  preparationTime: {
    type: String,
    required: true,
  },
  difficultyLevel: {
    type: String,
    required: true,
  },
});

module.exports = Recipes = mongoose.model("recipes", RecipeSchema);
