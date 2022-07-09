const express = require("express");
const router = new express.Router();

const jwt = require("jsonwebtoken");
const auth = require("../auth/auth");
const res = require("express/lib/response");
const Order = require("../models/orderModels");

router.post("/order/insert", auth.verifyUser, async function (req, res) {
  console.log("hello")
  console.log(req.body.addToCart)
  const delivery = req.body.delivery;
  const total = req.body.total;
  const addToCart = req.body.addToCart;
  // console.log(req.body);
  const data = new Order({
    delivery: delivery,
    total: total,
    addToCart: addToCart,
    user_id: req.userInfo._id,
  });

  // console.log(data);

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

// for admin
router.get("/order/get", auth.verifyAdmin, async function (req, res) {
  const data = await Order.find()
    .populate("user_id", "firstName lastName phone_no address")
    .populate("addToCart")
    .sort({ createdAt: -1 });
    console.log(data)
  res.json({ success: true, message: "Order Data", data: data });
});



//for user
router.get("/order/user/get", auth.verifyUser, async function (req, res) {
 console.log(req.userInfo._id)
  const data = await Order.find({
    user_id:  req.userInfo._id
  });
  res.json({ success: true, message: "Order Data", data: data });
});

//for user


// router.post("/order/cancel/:id", auth.verifyUser, async function (req, res) {
//   try {
//     const data = await Order.findOne({ _id: req.params.id })
//   data.status='Cancel';
//   await data.save()
//   console.log(data);
//   res.json({ success: true, message: "Order Data", data: data });
//   } catch (error) {
//     console.log(error);
//     res.json(error)
//   }


// router.post("/order/cancel/:id", auth.verifyUser, async function (req, res) {
//   const data = await Order.findById(req.params.id)
//   data.status='Cancel';
//   await data.save()
//   res.json({ success: true, message: "Order Data", data: data });
// });

router.post("/order/cancel", auth.verifyUser, async function (req, res) {
  Order.findByIdAndUpdate(req.body.id,{status:'Cancel'})
  .then(()=>{
    res.json({ success: true, message: "Order Data"});
  })
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

