// const express = require("express");
// const router = new express.Router();

// const auth = require("../auth/auth");
// const Recipe = require("../models/recipeModel");

// router.post("/add/recipe", auth.verifyAdmin, async(req,res)=>{
//     const recipeTitle = req.body.recipeTitle;
//     const recipeDescription = req.body.recipeDescription;
//     const ingredients = req.body.ingredients;
//     const steps = req.body.steps;

//     const recipeData = new Recipe({
//         recipeTitle: recipeTitle,
//         recipeDescription: recipeDescription,
//         ingredients: ingredients,
//         steps: steps,
//         meals_id: req.body.meals_id
//     })
//     recipeData.save()
//     .then(function(){
//         res.status(200).send({success: true, message: "Recipe added successfully"})
//     }).catch(function(e){
//         res.status(400).send({message: e});
//     })
// })

// router.put("/update/recipe/:rid", auth.verifyAdmin, async(req,res)=>{
//     const rid = req.params.rid;

//     const recipeTitle = req.body.recipeTitle;
//     const recipeDescription = req.body.recipeDescription;
//     const ingredients = req.body.ingredients;
//     const steps = req.body.ingredients
    
//     Recipe.findOne({_id: rid})
//     .then((recipeData)=>{
//         Recipe.updateOne({_id: rid}, {
//             recipeTitle: recipeTitle,
//             recipeDescription: recipeDescription,
//             ingredients: ingredients,
//             steps: steps
//         })
//         .then(function(){
//             res.status(200).send({success: true, message: "Recipe Updated Successfully!"});
//         }).catch(function(e){
//             res.status(400).send({message: e});
//         });
//     })
//     .catch((e)=>{
//         res.status(400).send({message: e});
//     })
// })

// router.delete("/delete/recipe/:rid", auth.verifyAdmin, async(req,res)=>{
//     const rid = req.params.rid;
//     Recipe.deleteOne({_id: rid})
//     .then(function(){
//         res.status(200).send({success: true, message: "Recipe Deleted Successfully!"});
//     }).catch(function(e){
//         res.status(400).send({message: e});
//     })
// })

// module.exports = router;