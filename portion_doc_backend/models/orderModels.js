const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  delivery: {
    type: String,
    // required: true,
    enum: ["Inside RingRoad", "Outside RingRoad"],
    default: "Inside RingRoad"
  },
  user_id : {
    type : mongoose.Types.ObjectId, 
    ref : "User"
  },
//   addToCart: 
//     {
//       type: mongoose.Types.ObjectId,
//       ref: "Cart",
//     },
    addToCart: 
    [{
        itemid: {
            type : mongoose.Types.ObjectId, 
            ref : "Meals"

        }
        ,
        image: {
            type: String,
            default: "",

        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
           
        },
        qty: {type : Number, required: true},

    }],

  status: {
    type: String,
    enum:["Delivered", "On-progress", "Pending","Cancel"],
    default: "Pending"
  },
  total: {
    type: Number
  },

})

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;