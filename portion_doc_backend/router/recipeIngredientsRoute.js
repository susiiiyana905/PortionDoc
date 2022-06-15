const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const  RecipeIngredients = require("../models/recipeIngredientModel");
const upload = require("../uploads/recipeIngredients");

router.post(
  "/add/recipe/ingredients",
  auth.verifyAdmin,
  upload.single("image"),
  async (req, res) => {
    if (req.file === undefined) {
      return res.status(400).json({ msg: "Invalid!!" });
    }

    const name = req.body.name;
    const quantity = req.body.quantity;
    const image = req.file.filename;
    const recipe_id = req.body.recipe_id;                             

    const ingredientsData = new RecipeIngredients({
      name: name,
      quantity: quantity,
      image: image,
      recipe_id: recipe_id,
    });
    ingredientsData
      .save()
      .then(function () {
        res
          .status(200)
          .send({ success: true, message: "Ingredients added successfully!" });
      })
      .catch(function (e) {
        res.status(400).send({ message: e });
      });
  }
);

router.delete("/delete/recipe/ingredient/:riid", auth.verifyAdmin, function (req, res) {
  const riid = req.params.riid;
  RecipeIngredients.deleteOne({ _id: riid })
    .then(function () {
      res.status(200).send({ success: true, message: "Ingredient deleted!" });
    })
    .catch(function (e) {
      res.status(400).send({ message: e });
    });
});

router.get("/get/all/recipe/ingredients/:rid", auth.verifyAdmin, function (req, res) {
  const recipe_id = req.params.rid;
    RecipeIngredients.find({ recipe_id: recipe_id })
    .then(function (result) {
      res
        .status(200)
        .send({
          success: true,
          data: result,
          message: "Ingredients details by Id",
        });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});

router.get(
  "/get/recipe/ingredients/users/:rid",
  auth.verifyUser,
  function (req, res) {
    const recipe_id = req.params.rid;
    RecipeIngredients.find({recipe_id: recipe_id })
      .then(function (result) {
        res
          .status(200)
          .send({
            success: true,
            data: result,
            message: "Ingredients details by Id",
          });
      })
      .catch(function () {
        res.status(400).send({ message: "Something went wrong!" });
      });
  }
);

module.exports = router;
