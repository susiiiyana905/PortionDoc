const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const SendDiet = require("../models/sendDietModel")

router.post("/send/diet/", auth.verifyAdmin, async(req, res)=>{
    const dietMeal_id = req.body.dietMeal_id;
    const user_id = req.userInfo._id;
    const sendDietData = new SendDiet({
        dietMeal_id,
         user_id,
       
    });
    sendDietData.save()
    .then(function () {
        res
          .status(200)
          .send({ success: true, message: "diet send successfully!" });
      })
      .catch(function (e) {
        res.status(400).send({ message: e });
      });

})

 module.exports = SendDiet;