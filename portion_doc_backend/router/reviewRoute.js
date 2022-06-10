const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Category = require("../models/categoryModel");
const Review = require("../models/reviewModel");

router.post("/add/review", auth.verifyUser, async(req,res)=>{
    const subject = req.body.subject;
    const reviewMessage = req.body.reviewMessage;

    const reviewData = new Review({
        subject: subject,
        reviewMessage: reviewMessage,
        user_id: req.userInfo._id,
    })
    reviewData.save()
 
    .then(function(){
        res.status(200).send({ success: true, message:"Review send Successfully"})
    }).catch(function(e){
        res.status(400).send({message: "Empty Field Found! Fill up the form completely."})
    
    })
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

router.get("/get/all/reviews",auth.verifyAdmin, async(req,res)=>{
    const reviewData = await Review.find()
    .populate("user_id","firstName lastName profile_pic")
    .sort({createdAt:-1});
    res.json({success: true, message:"Review Data", data:reviewData});

})
module.exports = router