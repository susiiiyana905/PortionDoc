const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const Ingredients = require("../models/ingredientsModel");

router.post("/add/ingredients", auth.verifyAdmin, async(req,res)=>{
    const ingredientsName = req.body.ingredientsName;
    const quantity = req.body.quantity;
    // const ingredientsImage = req.
    const meals_id = req.body.meals_id;

    const ingredientsData = new Ingredients({
        ingredientsName: ingredientsName,
        quantity: quantity,
        meals_id: meals_id
    })
    ingredientsData.save()
    .then(function(){
        res.status(200).send({success: true, message: "Ingredients added successfully!"});
    }).catch(function(e){
        res.status(400).send({message: e});
    })
})

module.exports = router;