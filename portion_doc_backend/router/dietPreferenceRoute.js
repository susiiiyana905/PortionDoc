const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth");
const upload = require("../uploads/dietPreferenceFile");
const { fstat } = require("fs");
const dietPreference = require("../models/dietPreferenceModels");


router.post("/add/dietPreference", auth.verifyAdmin,upload.single('dietImage'), async(req,res)=>{
    if(req.file===undefined){
        return res.status(400).json({msg: "Invalid!!"})
    }
    const dietImage = req.file.filename;
    const dietName = req.body.dietName;
    const dietPrice = req.body.dietPrice;
    const dietDescription = req.body.dietDescription;
    const steps = req.body.steps;
    const time = req.body.time;
    const calory = req.body.calory;
    const preference= req.body.preference;
    const difficulty = req.body.difficulty;

    const dietData = new dietPreference({
        dietImage: dietImage,
        dietName: dietName,
        dietPrice: dietPrice,
        dietDescription: dietDescription,
        steps:steps,
        time: time,
        calory:calory,  
        preference:preference,
        difficulty: difficulty
    })
    dietData.save()
    .then(function(){
        res.status(200).send({success: true, data:dietData, message: "Preference added successfully!"});
    }).catch(function(e){
        res.status(400).send({message: e});
    })

})

router.put("/update/preference/image/:did", auth.verifyAdmin, upload.single("dietImage"), async(req,res)=>{
    const did = req.params.did;

    if(req.file === undefined){
        return res.json({message: " Invalid"})
    }

    const dietImage = req.file.filename;

    dietPreference.findOne({_id: did})
    .then((dietData)=>{
        if(!dietData.dietImage){
            const diet_image_path = `./uploads/diet/${dietData.dietImage}`;
            fstat.unlinkSync(meal_image_path);
        }
         dietPreference.updateOne({_id: did},{
             dietImage: dietImage
         })
         .then(function(){
             res.status(200).send({success: true, message:"Image Updated!!"});   
         })
         .catch(function(){
            res.status(400).send({message: e});
        });
    })
    .catch((e)=>{
        res.status(400).send({message: e});
    })
    })

    router.get('/diet/all', auth.verifyAdmin, async(req,res)=>{
        const DietData = await dietPreference.find()
        res.json({success: true, message:"Diet Data", data:DietData});
    })
    router.get("/diet/single/:did", auth.verifyAdmin, function(req,res){
        const did = req.params.did;
        dietPreference.findOne({_id : did})
        .then(function(result){
            res.status(200).send({success:true, data:result, message: "diet details by Id"})
        })
        .catch(function(){
            res.status(400).send({message: "Something went wrong!"})
        })
    })
    router.delete("/diet/delete/:did", auth.verifyAdmin, function(req,res){
        const did = req.params.did;
        dietPreference.deleteOne({_id : did})
        .then(function(){
            res.status(200).send({success:true, message: "Diet Preference has been deleted!"})
        })
        .catch(function(){
            res.status(400).send({message: "Something went wrong!"})
        })
    
    })
    router.get("/preference/:preference", auth.verifyUser, function(req, res){
        const preference=req.params.preference;
        dietPreference.find({preference:preference})
        .then(function(result){
            res.status(200).send({success:true, data:result, message: "User Preference"})
        })
        .catch(function(){
            res.status(400).send({message: "Something went wrong!"})
        })
    })
    
    module.exports = router;

 
