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
    required: true,
    type: String,
  },
  activeTime: {
    required: true,
    type: String,
  },
  totalTime: {
    required: true,
    type: String,
  },
  thumbnail: {
    required: true,
    type: String,
  },
  image: {
    required: true,
    type: String,
  },
  category: {
    required: true,
    type: String,
  },
  serves: {
    type: String,
  },
  rating: {
    required: true,
    type: String,
  },
  steps: {
    type: Array,
  },
});

const recipesModel =
  mongoose.models?.recipe ?? mongoose.model("recipes", recipeSchema);

export { recipesModel };
