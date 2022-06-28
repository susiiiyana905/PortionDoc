const express = require("express");
const router = new express.Router();

const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
const res = require("express/lib/response");
const Order = require("../models/orderModels");

router.post("/order/insert", auth.verifyUser, async function (req, res) {
  const delivery = req.body.delivery;
  const total = req.body.total;
  const addToCart = req.body.addToCart;

  const data = new Order({
    delivery: delivery,
    total: total,
    addToCart: addToCart,
    user_id: req.userInfo._id,
  });

  data
    .save()
    .then(function () {
      res
        .status(200)
        .send({ success: true, message: "Order Placed Successfully" });
    })
    .catch(function (e) {
      res.status(400).send({ message: e });
    });
});

//for admin
router.get("/order/get", auth.verifyAdmin, async function (req, res) {
  const data = await Order.find()
    // .populate("user_id", "firstName lastName phone_no address")
    .populate("addToCart", "serving")
    .sort({ createdAt: -1 });
  res.json({ success: true, message: "Order Data", data: data });
});

// router.get("/orders/get", auth.verifyAdmin, async function (req, res) {

//     try {
//         const getOrders = await Order.find({}).populate(["user_id", {path : 'addToCart',populate : {
//           path:"meals_id"}}]).exec()
//         res.json({ message: "Orders", data: getOrders });
//     }
//     catch(e){
//         console.log(e)
//         res.json({ message: "Failed to retrieve order" });
//     }
// })

//for user
router.get("/order/user/get", auth.verifyUser, async function (req, res) {
  const data = await Order.find();
  res.json({ success: true, message: "Order Data", data: data });
});



router.get("/order/single/:oid", auth.verifyAdmin, function(req,res){
    const oid = req.params.oid;
    Order.findOne({_id : oid})
    .then(function(result){
        res.status(200).send({success:true, data:result, message: "Order details by Id"})
    })
    .catch(function(){
        res.status(400).send({message: "Something went wrong!"})
    })
})


router.delete('/order/cancel/:oid', auth.verifyUser,function(req,res){
    const oid = req.params.id;
    Order.deleteOne({_id : oid})
    .then(function(){
        res.json({message: "Order deleted"})
    })
    .catch(function(){
        res.json({message: "Something went wrong"})

    })
    .catch(function () {
      res.json({ message: "Something went wrong" });
    });
});

router.put("/order/update", auth.verifyAdmin, async function (req, res) {

    const oid = req.body.oid;
    const status = req.body.status;

    console.log(oid, status)

    Order.findOne({_id: oid})
    .then((data)=>{
        Order.updateOne({_id:oid},{
            status:status
        })

        .then(function(){
            res.status(200).send({success:true, message: "Status details has been updated!"})
        })
        .catch(function(){
            res.status(400).send({message: e})
        });
    })

})


module.exports = router

