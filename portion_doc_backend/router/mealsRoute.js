const express = require("express");
const router = new express.Router();
const bcryptjs = require("bcryptjs");

// Importing self made js files....
const user = require("../models/userModel.js");
const auth = require("../auth/auth.js");
const { Router } = require("express");
const upload = require("../uploads/mealFile.js");
const Meals = require("../models/mealsModel.js");

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

module.exports = router;