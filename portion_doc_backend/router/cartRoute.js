const express = require("express");
const router = new express.Router();
const auth = require("../auth/auth");
const Meals = require("../models/mealsModel");
const Cart = require("../models/cartModel");
const Grocery = require("../models/groceryModel");
router.post("/cart/insert",auth.verifyUser, async function(req,res){
    try{
        const user_id = req.userInfo._id;
        const meals_id = req.body.meals_id;


        _meals = await Meals.findOne({_id : meals_id}).exec()
        _cart = await Cart.findOne({user_id : user_id, meals_id: meals_id}).exec()


        if(_cart){
            _cart.serving = _cart.serving+2;
            _cart.total = parseInt(_meals.mealPrice.split('Rs. ')[0])*_cart.serving;
            _cart.save()
        }else{
            const serving = 2;
            const total = _meals.mealPrice;
            console.log(_meals)
            console.log(total.split('Rs.')[0])
            const data = new Cart({
                user_id,
                meals_id,
                serving,
                total: parseInt(total.split('Rs.')[0])
            })
            data.save()
        }
        res.json({success: true, message: "Cart inserted successfully"});
    }catch(e){
        console.log(e)
        res.json({success: false, message: "Cart Error"});
    }
})
router.get("/cart",auth.verifyUser, async function(req,res){
    var cart = await Cart.find({user_id : req.userInfo._id}).populate("meals_id").exec()
    res.json({message: "Cart", data: cart});
})
router.put("/cart/update/:id", auth.verifyUser, async function(req,res){
    const cartId = req.body.cartId;
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

// -----------------------------Grocery Backend--------------------------------------
router.post("/grocery/insert",auth.verifyUser, async function(req,res){
    try{
        const user_id = req.userInfo._id;
        const grocery_id = req.body.grocery_id;
        _grocery = await Grocery.findOne({_id : grocery_id});
        _cart = await Cart.findOne({user_id : user_id,  grocery_id: grocery_id});
        if(_cart){
            _cart.quantity = _cart.quantity+1;
            _cart.total = parseInt(_grocery.groceryPrice.split('Rs. ')[0])*_cart.quantity;
            _cart.save()
        }else{
            const quantity = 1;
            const total = _grocery.groceryPrice;
            console.log(_grocery)
            console.log(total.split('Rs.')[0])
            const data = new Cart({
                user_id,
                grocery_id,
                quantity,
                total: parseInt(total.split('Rs.')[0])
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

module.exports = router;