const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Meals = require("../models/mealsModel");
const Cart = require("../models/cartModel");


router.post("/cart/insert",auth.verifyUser, async function(req,res){
    try{
        const user_id = req.userInfo._id;
        const meals_id = req.body.meals_id;
        const _meals = await Meals.findOne({_id : meals_id}).exec()
        const _cart = await Cart.findOne({user_id : user_id, meals_id: meals_id}).exec()
        if(_cart){
            
            _cart.serving = _cart.serving+2;
            _cart.total = parseInt(_meals.mealPrice.split('Rs. ')[0])*_cart.serving;
            
            _cart.save()
        }else{
            const serving = 2;
            const total = _meals.mealPrice;
            console.log(_meals)
            console.log(total.split('Rs. '))
            const data = new Cart({
                user_id,
                meals_id,
                serving,
                total: parseInt(total.split('Rs. ')[0])
            })
            // // console.log
            data.save()
        }
        res.json({success: true, message: "Cart inserted succesfully"});
    }catch(e){
        console.log(e)
        res.json({success: false, message: "Cart Error"});
    }
})
router.get("/cart",auth.verifyUser, async function(req,res){
<<<<<<< Updated upstream
    var cart = await Cart.find({user_id : req.userInfo._id}).populate("meals_id").exec()
    res.json({message: "Cart", data: cart});
=======

    var cart = await Cart.find({userId : req.userInfo._id}).populate("meals_id", "id mealName mealPrice").exec()
    res.status(200).json({message: "Cart", data: cart});
>>>>>>> Stashed changes
})
router.put("/cart/update/:id", auth.verifyUser, async function(req,res){
    const cartId = req.params.id;
    const serving = req.body.serving;
    console.log(cartId, serving);
    Cart.findByIdAndUpdate({_id: cartId},{
        serving: serving,
    },{new:true})
    .then(function(data){
        Meals.findById(data.meals_id).then(k=>{
            data.total = parseInt(k.mealsPrice.split('Rs. ')[1])  * serving
            data.save() 
        })
        res.json({success: true, message:"Cart Updated"})
    })
    .catch(function(){
        res.json({success: false, message: "Something went wrong"})
    })  
})
<<<<<<< Updated upstream
=======
router.delete('/cart/delete/:id',auth.verifyUser, function(req,res){
    const id = req.params.id;
    Cart.deleteOne({_id : id})
    .then(function(){
        res.json({message: "Cart deleted"})
    })
    .catch(function(){
        res.json({message: "Something went wrong"})
    })
})

// router.put("/cartplus/update/:id", auth.verifyUser, async function(req,res){
//     const cartId = req.body.cardId;
//     const serving = req.body.serving;
//     console.log(cartId, serving);
//     Cart.findByIdAndUpdate({_id: cartId},{
//         serving:4,
//     },{new:true})
//     .then(function(data){
//         Meals.findById(data.meals_id).then(k=>{
//             data.total = parseInt(k.mealsPrice.split('Rs. ')[1])  * 4
//             data.save() 
//         })
//         res.json({success: true, message:"Cart Updated"})
//     })
//     .catch(function(){
//         res.json({success: false, message: "Something went wrong"})
//     })  
// })
// router.delete('/cart/delete/:id',auth.verifyUser, function(req,res){
//     const id = req.params.id;
//     Cart.deleteOne({_id : id})
//     .then(function(){
//         res.json({message: "Cart deleted"})
//     })
//     .catch(function(){
//         res.json({message: "Something went wrong"})
//     })
// })
>>>>>>> Stashed changes

router.delete('/cart/delete/:id',auth.verifyUser, function(req,res){
    const id = req.params.id;
    Cart.deleteOne({_id : id})
    .then(function(){
        res.json({message: "Cart deleted"})
    })
    .catch(function(){
        res.json({message: "Something went wrong"})
    })
})
module.exports = router;