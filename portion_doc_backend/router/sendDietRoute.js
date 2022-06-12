const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const SendDiet = require("../models/sendDietModel");

router.post("/send/dietMeal", auth.verifyAdmin, async(req, res)=>{
    const dietMeal_id = req.params.dietMeal_id;
   console.log("a")
  
    const sendDietData = new SendDiet({
        dietMeal_id: dietMeal_id,
       user_id : req.userInfo._id,
     
    })
    console.log("b")

    sendDietData.save()
    .then(function () {
        res.json({ success: true, message: "diet send successfully!" });
      })
      .catch(function(e) {
        res.json({message:"something went wrong"});
      })
})


module.exports = router;
