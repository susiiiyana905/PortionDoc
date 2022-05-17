const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth.js");
const upload = require("../uploads/mealFile.js");
const Meals = require("../models/mealsModel.js");
const User = require("../models/userModel");

router.post("/add/meals", auth.verifyAdmin, upload.single('mealImage'), async(req,res)=>{
    if(req.file==undefined){
        return res.json({msg : "Invalid!!"})
    }
    const mealImage = req.file.filename;
    const mealName = req.body.mealName;
    const mealPrice = req.body.mealPrice;
    const mealDescription = req.body.mealDescription;
    const time = req.body.time;
    const mealCategory = req.body.mealCategory;
    const mealData = new Meals({
        mealImage: mealImage,
        mealName: mealName,
        mealPrice: mealPrice,
        mealDescription: mealDescription,
        time: time,
        mealCategory: mealCategory
    })
    mealData.save()
    .then(function(){
        res.status(200).send({success: true, message: "New meal added successfully!"});
    }).catch(function(e){
        res.status(400).send({message: "Something went wrong!"});
    })
})

router.put("/update/meals/:mid", auth.verifyAdmin, upload.single("mealImage"), async(req,res)=>{
    const mid = req.params.mid;
    
    if(req.file === undefined){
        return res.json({message: "Invalid!!"})
    }

    const mealName = req.body.mealName;
    const mealPrice = req.body.mealPrice;
    const mealDescription = req.body.mealDescription;
    const time = req.body.time;
    const mealCategory = req.body.mealCategory;

    Meals.updateOne({_id:mid}, {
        mealName: mealName,
        mealPrice: mealPrice,
        mealDescription: mealDescription,
        time: time,
        mealCategory: mealCategory,
        mealImage: req.file.filename,
    })
    .then(function(){
        res.status(200).send({success:true, message: "Meal details has been updated!"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

module.exports = router;