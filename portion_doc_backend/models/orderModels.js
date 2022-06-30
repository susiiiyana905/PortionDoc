// const mongoose = require("mongoose");

// const OrderSchema = new mongoose.Schema({
//   delivery: {
//     type: String,
//     // required: true,
//     enum: ["Inside RingRoad", "Outside RingRoad"],
//   },
//   user_id : {
//     type : mongoose.Types.ObjectId, 
//     ref : "User"
//   },
//   addToCart: 
//     {
//       type: mongoose.Types.ObjectId,
//       ref: "Cart",
//     },

//   status: {
//     type: String,
//     enum:["Delivered", "On-progress", "Pending"],
//     default: "Pending"
//   },
//   total: {
//     type: Number
//   },

// })

// const Order = mongoose.model("Order", OrderSchema);
// module.exports = Order;