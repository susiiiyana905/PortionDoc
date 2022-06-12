const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const Ingredients = require("../models/ingredientsModel");
const upload = require("../uploads/ingredientsFile");

router.post(
  "/add/ingredients",
  auth.verifyAdmin,
  upload.single("image"),
  async (req, res) => {
    if (req.file === undefined) {
      return res.status(400).json({ message: "Invalid!!" });
    }

    const name = req.body.name;
    const quantity = req.body.quantity;
    const image = req.file.filename;
    const meals_id = req.body.meals_id;


    const ingredientsData = new Ingredients({
      name: name,
      quantity: quantity,
      image: image,
      meals_id: meals_id,
    });
    ingredientsData
      .save()
      .then(function () {
        res
          .status(200)
          .send({ success: true, message: "Ingredients added successfully!" });
      })
      .catch(function (e) {
        res.status(400).send({ message: "Empty field found. Fill up the form completely!!" });
      });
  }
);

router.delete("/delete/ingredient/:iid", auth.verifyAdmin, function (req, res) {
  const iid = req.params.iid;
  Ingredients.deleteOne({ _id: iid })
    .then(function () {
      res.status(200).send({ success: true, message: "Ingredient deleted!" });
    })
    .catch(function (e) {
      res.status(400).send({ message: e });
    });
});

router.get("/get/all/ingredients/:mid", auth.verifyAdmin, function (req, res) {
  const meals_id = req.params.mid;
  Ingredients.find({ meals_id: meals_id })
    .then(function (result) {
      res.status(200).send({
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
  "/get/all/ingredients/users/:mid",
  auth.verifyUser,
  function (req, res) {
    const meals_id = req.params.mid;
    Ingredients.find({ meals_id: meals_id })
      .then(function (result) {
        res.status(200).send({
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
