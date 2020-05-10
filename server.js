const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const Recipes = require("./model/Recipes");

const app = express();

connectDB();

app.use(express.json({ extended: true }));

app.use(cors());

app.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find({}).populate("recipes");
    res.json({ recipes });
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

app.post("/addRecipe", async (req, res) => {
  const {
    userName,
    title,
    ingredients,
    steps,
    cookingTime,
    description,
    imageURL,
    recipeType,
    preparationTime,
    servings,
    difficultyLevel,
  } = req.body;
  try {
    const newRecipe = new Recipes({
      userName,
      recipeType,
      title,
      description,
      imageURL,
      steps,
      ingredients,
      cookingTime,
      preparationTime,
      servings,
      difficultyLevel,
    });
    await newRecipe.save();
    res.send("Recipe added");
  } catch (err) {
    console.error(err);
    res.status(500).send("server error");
  }
});

app.listen(4000, () => console.log("Server running on 4000"));
