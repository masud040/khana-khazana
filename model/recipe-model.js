const { Schema, mongo, default: mongoose } = require("mongoose");

const recipeSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  author: {
    type: String,
    required: true,
  },
  activeTime: String,
  totalTime: String,
  thumbnail: {
    required: true,
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  serves: {
    type: Number,
  },
  rating: {
    type: Number,
    required: true,
  },
  steps: {
    type: Array,
  },
});

const RecipesModel =
  mongoose?.models.recipes ?? mongoose?.model("recipes", recipeSchema);

export default RecipesModel;
