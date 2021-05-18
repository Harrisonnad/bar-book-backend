const router = require("express").Router();
let Recipe = require("../models/recipe.model");

router.route("/").get((req, res) => {
  Recipe.find()
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const drinkname = req.body.drinkname;
  const ingredients = req.body.ingredients;
  const glass = req.body.glass;
  const garnish = req.body.garnish;
  const technique = req.body.technique;
  const description = req.body.description;

  const newRecipe = new Recipe({
    username,
    drinkname,
    ingredients,
    glass,
    garnish,
    technique,
    description,
  });

  newRecipe
    .save()
    .then(() => res.json("Recipe added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => res.json(recipe))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(() => res.json("Recipe Deleted."))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Recipe.findById(req.params.id)
    .then((recipe) => {
      recipe.username = req.body.username;
      recipe.drinkname = req.body.drinkname;
      recipe.ingredients = req.body.ingredients;
      recipe.glass = req.body.glass;
      recipe.garnish = req.body.garnish;
      recipe.technique = req.body.technique;
      recipe.description = req.body.description;

      recipe
        .save()
        .then(() => res.json("Recipe updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
