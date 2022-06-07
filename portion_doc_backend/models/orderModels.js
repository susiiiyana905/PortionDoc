const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  delivery: {
    type: String,
    // required: true,
    enum: ["Inside RingRoad", "Outside RingRoad"],
  },
  user_id : {
    type : mongoose.Types.ObjectId, 
    ref : "User"
  },
 
  addToCart: [
    {
      type: mongoose.Types.ObjectId,
      ref: "addtocart",
    },
  ],
  status: {
    type: String,
    enum:["Delivered", "On-progess"],
    default: "On-progess"
  },
  total: {
    type: Number
  }

})

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;