const express = require("express");
const router = new express.Router();
const Category = require("../models/categoryModel")
const auth = require("../auth/auth");


router.post("/category/insert",auth.verifyAdmin, async(req,res)=>{
    // if(req.file === undefined){
    //     return res.json({msg: "Invalid file type"})
    // }
    const categoryName = req.body.categoryName;

    const data = new Category({
        categoryName : categoryName
    })

    data.save()
    return res.json({success: true, message:"Category Inserted Successfully"});
})

router.get('/category/single', auth.verifyAdmin, async(req,res)=>{

    const CategoryData = await Category.find()
    res.json({sucess: true, message: "Category Data", data:CategoryData});
  
})

router.delete('/category/delete/:cid', auth.verifyAdmin, function(req,res){
    const cid = req.params.cid;
    Category.deleteOne({_id : cid})
    .then(function(){
        res.json({success: true, message: "Category deleted"})
    })
    .catch(function(){
        res.json({success: false, message: "Something went wrong"})
    })
})



module.exports = router;