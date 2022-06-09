const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth.js");
const upload = require("../uploads/mealFile.js");
const Meals = require("../models/mealsModel.js");
const { fstat } = require("fs");

router.post("/add/meals", auth.verifyAdmin, upload.single('mealImage'), async(req,res)=>{
    if(req.file===undefined){
        return res.status(400).json({msg : "Invalid!!"})
    }
    const mealImage = req.file.filename;
    const mealName = req.body.mealName;
    const mealPrice = req.body.mealPrice;
    const mealDescription = req.body.mealDescription;
    const steps = req.body.steps
    const time = req.body.time;
    const mealCategory = req.body.mealCategory;
    const calory = req.body.calory;
    const difficulty = req.body.difficulty;
    
    const mealData = new Meals({
        mealImage: mealImage,
        mealName: mealName,
        mealPrice: mealPrice,
        mealDescription: mealDescription,
        time: time,
        steps: steps,
        mealCategory: mealCategory,
        calory: calory,
        difficulty: difficulty
    })
    mealData.save()
    .then(function(){
        res.status(200).send({success: true,data:mealData, message: "New meal added successfully!"});
    }).catch(function(e){
        res.status(400).send({message: e});
    })
})

router.put("/update/meals/:mid", auth.verifyAdmin, upload.single("mealImage"), async(req,res)=>{
    const mid = req.params.mid;

    const mealName = req.body.mealName;
    const mealPrice = req.body.mealPrice;
    const mealDescription = req.body.mealDescription;
    const time = req.body.time;
    const steps = req.body.steps;
    const mealCategory = req.body.mealCategory;
    const calory = req.body.calory;
    const difficulty = req.body.difficulty;

    Meals.findOne({_id: mid})
    .then((mealData)=>{

        Meals.updateOne({_id:mid}, {
            mealName: mealName,
            mealPrice: mealPrice,
            mealDescription: mealDescription,
            time: time,
            steps: steps,
            mealCategory: mealCategory,
            calory: calory,
            difficulty: difficulty,
        })
        .then(function(){
            res.status(200).send({success:true, message: "Meal details has been updated!"})
        })
        .catch(function(){
            res.status(400).send({message: e})
        });
    })
    .catch((e)=>{
        res.status(400).send({message:e });
    })
})

router.put("/update/meal/image/:mid", auth.verifyAdmin, upload.single("mealImage"), async(req,res)=>{
    const mid = req.params.mid;

    if(req.file === undefined){
        return res.json({message: "Invalid!!"})
    }

    const mealImage = req.file.filename;

    Meals.findOne({_id: mid})
    .then((mealData)=>{
        if(!mealData.mealImage){
            const meal_image_path = `./uploads/meal/${mealData.mealImage}`;
            fs.unlinkSync(meal_image_path);
        }

        Meals.updateOne({_id: mid}, {
            mealImage: mealImage
        })
        .then(function(){
            res.status(200).send({success: true, message: "Meal Image Updated!"});
        })
        .catch(function(){
            res.status(400).send({message: e});
        });
    })
    .catch((e)=>{
        res.status(400).send({message: e});
    })
})


router.get('/meals/all', auth.verifyAdmin, async(req,res)=>{
    const MealData = await Meals.find()
    res.json({success: true, message:"Meals Data", data:MealData});
})

router.get("/meals/single/:mid", auth.verifyAdmin, function(req,res){
    const mid = req.params.mid;
    Meals.findOne({_id : mid})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Meal details by Id"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

router.get("/meals/category/:category", auth.verifyUser, function(req,res){
    const Category = req.params.category;
    Meals.find({mealCategory : Category})
    .then(function(){
        res.status(200).send({success:true, message: "Meals by category", data:Category})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

router.get('/meal/all', auth.verifyUser, async(req,res)=>{
    const MealData = await Meals.find()
    res.json({success: true, message:"Meals Data", data:MealData});
})

router.get("/meals/single/view/:mid", auth.verifyUser, async(req,res)=>{
    const mid = req.params.mid;
    Meals.findOne({_id : mid})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Meal details by Id"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

router.get("/meals/:category", auth.verifyAdmin, function(req,res){
    const _category = req.params.category;
    Meals.find({mealCategory : _category})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Meals by category"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})

router.delete("/meals/delete/:mid", auth.verifyAdmin, function(req,res){
    const mid = req.params.mid;
    Meals.deleteOne({_id : mid})
    .then(function(){
        res.status(200).send({success:true, message: "Meal has been deleted!"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })

})

module.exports = router;