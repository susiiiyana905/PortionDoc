const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Cart = require("../models/cartModel");
const Meals = require("../models/mealsModel");

router.post("/cart/insert",auth.verifyUser, async function(req,res){
    try{
        const user_id = req.userInfo._id;
        const meals_id = req.body.productId;
        _meals = await Meals.findOne({_id : meals_id}).exec()
        _cart = await Cart.findOne({user_id : user_id, meals_id: meals_id}).exec()
        if(_cart){
            _cart.quantity = _cart.quantity+1;
            _cart.total = parseInt(_meals.mealsPrice.split('Rs. ')[1])*_cart.quantity;
            _cart.save()
        }else{
            const quantity = 1;
            const total = _meals.mealsPrice;
            console.log(_meals)
            console.log(total.split('Rs. '))
            const data = new Cart({
                user_id,
                meals_id,
                quantity,
                total: parseInt(total.split('Rs. ')[1])
            })
            // console.log
            data.save()
        }
        res.json({success: true, message: "Cart inserted succesfully"});
    }catch(e){
        console.log(e)
        res.json({success: false, message: "Cart Error"});
    }
})
router.get("/cart",auth.verifyUser, async function(req,res){
    var cart = await Cart.find({userId : req.userInfo._id}).populate("meals_id", "id mealName").exec()
    res.json({message: "Cart", data: cart});
})
router.put("/cart/update/:id", auth.verifyUser, async function(req,res){
    const cartId = req.params.id;
    const quantity = req.body.quantity;
    console.log(cartId, quantity);
    Cart.findByIdAndUpdate({_id: cartId},{
        quantity: quantity,
    },{new:true})
    .then(function(data){
        Product.findById(data.productId).then(k=>{
            data.total = parseInt(k.productPrice.split('Rs. ')[1])  * quantity
            data.save() 
        })
        res.json({success: true, message:"Cart Updated"})
    })
    .catch(function(){
        res.json({success: false, message: "Something went wrong"})
    })  
})
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
module.exports = router;