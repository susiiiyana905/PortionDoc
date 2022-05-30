const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    subject:{
        type: String
    },

    message:{
        type: String
    }


})

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;