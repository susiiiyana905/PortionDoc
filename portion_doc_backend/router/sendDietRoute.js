const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const SendDiet = require("../models/sendDietModel");

router.post("/send/dietMeal", auth.verifyAdmin, async (req, res) => {
  const dietMeal_id = req.body.dietMeal_id;
  const user_id = req.body.user_id;
  const sendDietData = new SendDiet({
    dietMeal_id: dietMeal_id,
    user_id: user_id,
  });

  sendDietData
    .save()
    .then(function () {
      res.json({ success: true, message: "diet send successfully!" });
    })
    .catch(function (e) {
      res.json({ message: "something went wrong" });
    });
});

router.get("/get/all/sendDiet", auth.verifyUser, async (req, res) => {
  const sendDietData = await SendDiet.find({
    user_id: req.userInfo._id,
  }).populate("dietMeal_id", "dietImage dietName dietPrice time");
  console.log(sendDietData);
  res.json({ success: true, message: "get all details", data: sendDietData });
});

router.get("/diet/single/view/:did", auth.verifyUser, async (req, res) => {
  const did = req.params.did;
  SendDiet.findOne({ _id: did })
    .then(function (result) {
      res
        .status(200)
        .send({ success: true, data: result, message: "Meal details by Id" });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});

module.exports = router;
