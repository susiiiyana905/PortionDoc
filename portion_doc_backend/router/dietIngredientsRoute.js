const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const  DietIngredients = require("../models/dietIngredientsModel");
const upload = require("../uploads/dietIngredient");

router.post(
  "/add/diet/ingredients",
  auth.verifyAdmin,
  upload.single("image"),
  async (req, res) => {
    if (req.file === undefined) {
      return res.status(400).json({ msg: "Invalid!!" });
    }

    const name = req.body.name;
    const quantity = req.body.quantity;
    const image = req.file.filename;
    const dietMeals_id = req.body.dietMeals_id;                             

    const ingredientsData = new DietIngredients({
      name: name,
      quantity: quantity,
      image: image,
      dietMeals_id: dietMeals_id,
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

router.delete("/delete/dietingredient/:diid", auth.verifyAdmin, function (req, res) {
  const diid = req.params.diid;
  DietIngredients.deleteOne({ _id: diid })
    .then(function () {
      res.status(200).send({ success: true, message: "Ingredient deleted!" });
    })
    .catch(function (e) {
      res.status(400).send({ message: e });
    });
});

router.get("/get/all/dietingredients/:did", auth.verifyAdmin, function (req, res) {
  const dietMeals_id = req.params.did;
    DietIngredients.find({ dietMeals_id: dietMeals_id })
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
  "/get/diet/ingredients/users/:did",
  auth.verifyUser,
  function (req, res) {
    const dietMeals_id = req.params.did;
    DietIngredients.find({ dietMeals_id: dietMeals_id })
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
