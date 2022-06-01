const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Dietary = require("../models/dietryModel");
const { fstat } = require("fs");

router.post("/request/diet", auth.verifyUser,async(req,res)=>{
    const gender = req.body.gender;
    const weight = req.body.weight;
    const height = req.body.height;
    const preference = req.body.preference;

    const DietaryData = new Dietary({
        gender:gender,
        weight: weight,
        height: height,
        preference: preference,
        user_id: req.userInfo._id,
    })
    DietaryData.save()
    .then(function(){
        res.status(200).send({success: true, message: "Dietary Approved"})
    }).catch(function(e){
        res.status(400).send({message: e});
    })
})

router.get("/get/all/diet", auth.verifyUser,function(req,res){
    const user_id = req.userInfo._id;
    Dietary.find({user_id: user_id})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "dietary details"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})


module.exports = router;

