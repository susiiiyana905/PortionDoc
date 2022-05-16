const express = require("express");
const router = new express.Router();
const Category = require("../models/categoryModel");
const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
// const upload = require("../uploads/file");
const res = require("express/lib/response");
const { response } = require("express");

router.post("/category/insert",auth.verifyAdmin, function(req,res){
    if(req.file === undefined){
        return res.json({msg: "Invalid file type"})
    }
    const categoryName = req.body.categoryName;

    const data = new Category({
        categoryName : categoryName
    })

    data.save()
    res.json({success: true, message:"Category Inserted Successfully"});
})

module.exports = router;