const express = require("express");
const router = new express.Router();

const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
const res = require("express/lib/response");
const Order = require("../models/orderModels");




router.post("/order/insert", auth.verifyUser, async function (req, res) {
    const delivery = req.body.delivery;
    const total = req.body.total;
    const addToCart = req.body.addToCart

    const data = new Order({
        delivery: delivery,
        total: total,
        addToCart: addToCart,
        user_id: req.userInfo._id,

    })

    data.save()
    .then(function(){
        res.status(200).send({ success: true, message:"Order Placed Successfully"})
    }).catch(function(e){
        res.status(400).send({message: e})
    
    })

})

//for admin
router.get("/order/get", auth.verifyAdmin, async function (req, res) {
    const data = await Order.find()
    .populate("user_id","firstName lastName phone_no address")
    .sort({createdAt:-1});
    res.json({success: true, message:"Order Data", data:data});
})

// router.get("/orders/get", auth.verifyAdmin, async function (req, res){
//     try{
//         const getOrders = await Order.find({}).populate(["user_id", {path : 'addToCart', populate : {
//             path: "meals_id" }}]).exec()
//             res.json({message:"Orders", data:getOrders});
//     }
//     catch(e){
//         console.log(e)
//         res.join({message:"Failed to retrieve order"});
//     }
// })


router.get("/orders/get", auth.verifyAdmin.apply, async function (req, res){
    try{
        const getOrders = await Order.find({}).populate(["user_id", {path : 'addToCart', populate : {
            path: "meals_id" }}]).exec()
            res.json({message:"Orders", data:getOrders});
    }
    catch(e){
        console.log(e)
        res.join({message:"Failed to retrieve order"});
    }
})
//for user
router.get("/order/user/get", auth.verifyUser, async function (req, res) {
    const data = await Order.find() 
    res.json({success: true, message:"Order Data", data:data});

  
})

module.exports = router