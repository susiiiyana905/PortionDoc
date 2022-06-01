const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Review = require("../models/reviewModel");

router.post("/add/review", auth.verifyUser, async(req,res)=>{
    const subject = req.body.subject;
    const message = req.body.message;

    const reviewData = new Review({
        subject: subject,
        message: message,
        user_id: req.userInfo._id
    })
    reviewData.save()
    res.json({ success: true, message: "Review send successfully" });
    // .then(function(){
       
    //     res.status(200).send({ success: true, message:"Review send Successfully"})
    // }).catch(function(e){
    //     res.status(400).send({message: e})
    
    // })
})

router.get("/get/reviews", auth.verifyUser, function(req, res){
    const user_id = req.userInfo._id;
    Review.find({user_id: user_id})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Review details"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

module.exports = router