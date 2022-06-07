const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Types.ObjectId, ref : "User"
      },
  
      meals_id : {
        type : mongoose.Types.ObjectId, ref : "Meals"
    },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  total: {
    type: Number,
  },
});
const Cart = mongoose.model("addtocart", cartSchema);
module.exports = Cart;