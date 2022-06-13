const express = require("express");
const router = new express.Router();
const PreferenceCategory = require("../models/dietCatagoryModel")
const auth = require("../auth/auth");

router.post("/preferenceCategory/insert",auth.verifyAdmin, async(req,res)=>{
    const  dietCategoryName = req.body.dietCategoryName;
    const dietCategory = await PreferenceCategory.findOne({
        dietCategoryName: dietCategoryName
    })
    if(dietCategory) return res.status(400).send({message:'Category already registered with given name'})
    const data = new PreferenceCategory({
        dietCategoryName : dietCategoryName,
        
    })
    data.save()
    .then(function(){
        res.status(200).send({success: true, message: "New Category added successfully!"});
    }).catch(function(e){
        res.status(400).send({message:  "Empty Field Found!! Fill the form completely"});
    })
    // return res.json({success: true, message:"Category Inserted Successfully"});
})
router.get('/preference/category/single', auth.verifyAdmin, async(req,res)=>{

    const preferenceData = await PreferenceCategory.find()
    res.json({success: true, message: "Preference Data", data:preferenceData});
  
})

router.get('/preference/category/all', auth.verifyUser, async(req,res)=>{

    const PreferenceData = await PreferenceCategory.find()
    res.json({success: true, message: "Preference Data", data:PreferenceData});
  
})

router.delete('/preference/category/delete/:pid', auth.verifyAdmin, function(req,res){
    const pid = req.params.pid;
    console.log(pid)
    PreferenceCategory.deleteOne({_id : pid})
    .then(function(){
        res.json({success: true, message: "Category deleted"})
    })
    .catch(function(){
        res.json({success: false, message: "Something went wrong"})
    })
})
module.exports = router;