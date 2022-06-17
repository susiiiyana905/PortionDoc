const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Dietary = require("../models/dietaryModel");
const { fstat } = require("fs");

router.post("/request/diet", auth.verifyUser, async (req, res) => {
  const gender = req.body.gender;
  const weight = req.body.weight;
  const height = req.body.height;
  const preference = req.body.preference;
  const foodAllergies = req.body.foodAllergies;

  const DietaryData = new Dietary({
    gender: gender,
    weight: weight,
    height: height,
    preference: preference,
    foodAllergies: foodAllergies,
    user_id: req.userInfo._id,
  });
  DietaryData.save()
    .then(function () {
      res.status(200).send({ success: true, message: "Dietary Requested!!" });
    })
    .catch(function (e) {
      res
        .status(400)
        .send({ message: "Empty field found!! Fill up the form completely." });
    });
});

router.get("/get/all/diet", auth.verifyUser, function (req, res) {
  const user_id = req.userInfo._id;
  Dietary.find({ user_id: user_id })
    .then(function (result) {
      res
        .status(200)
        .send({ success: true, data: result, message: "dietary details" });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});

router.get("/get/all/user/diet", auth.verifyAdmin, async (req, res) => {
  const DietaryData = await Dietary.find()
    .populate("user_id", "firstName lastName profile_pic")
    .sort({ createdAt: -1 });
  res.json({ success: true, message: "Diet Request", data: DietaryData });
});

router.put("/accepted", auth.verifyAdmin, async (req, res) => {
  const mid = req.body.mid;
  Dietary.findOneAndUpdate({ _id: mid }, { accepted: true })
    .then(function () {
      res.status(200).send({ success: true, message: "Accepted!!" });
    })
    .catch(function () {
      res.status(400).send({ message: e });
    });
});

module.exports = router;
