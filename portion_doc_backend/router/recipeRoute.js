const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const Recipe = require("../models/addRecipeModel");
const upload = require("../uploads/recipeFile");


router.post("/add/recipe", auth.verifyUser,upload.single('recipePic'), async(req,res)=>{
    if(req.file===undefined){
        return res.status(400).json({msg : "Invalid!!"})
    }
    
    const title = req.body.title;
    const description = req.body.description;
    const steps = req.body.steps;
    const recipePic = req.file.filename;

    const recipeData = new Recipe({
        title: title,
        description: description,
        steps: steps,
        recipePic: recipePic,
        user_id: req.userInfo._id,
    })
    recipeData.save()
    .then(function(){
        res.status(200).send({success: true, message: "Recipe added successfully"})
    }).catch(function(e){
        res.status(400).send({message: e});
    })
})

router.delete("/delete/recipe/:rid", auth.verifyUser, async(req,res)=>{
    const rid = req.params.rid;
    Recipe.deleteOne({_id: rid})
    .then(function(){
        res.status(200).send({success: true, message: "Recipe Deleted Successfully!"});
    }).catch(function(e){
        res.status(400).send({message: e});
    })
})

router.get("/get/all/recipes", auth.verifyUser, function(req, res){
    const user_id = req.userInfo._id;
    Recipe.find({user_id: user_id})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Recipe details"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

router.get("/get/all/user/recipe", auth.verifyAdmin, async(req,res)=>{
    const recipes = await Recipe.find({})
    .sort({createdAt: -1});

    res.send(recipes);
})

router.get("/get/single/recipe/:rid", auth.verifyAdmin, async(req,res)=>{
    const rid = req.params.rid;
    Recipe.find({_id: rid})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Single Recipe details"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

module.exports = router;