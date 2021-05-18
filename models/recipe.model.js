const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    username: { type: String, required: true },
    drinkname: { type: String, required: true },
    ingredients: { type: String, required: true },
    glass: { type: String, required: true },
    garnish: { type: String, required: true },
    technique: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
