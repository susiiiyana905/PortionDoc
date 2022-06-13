const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    user_id: {
        type : mongoose.Types.ObjectId, ref : "User"
    },

    subject:{
        type: String,
        required: true
    },

    reviewMessage:{
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },


})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;