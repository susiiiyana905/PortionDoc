const mongoose = require("mongoose");

const Category = new mongoose.Schema({
    categoryName:{
        type: String,
    },
    // categoryImage:{
    //     type: String,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

module.exports = mongoose.model('Category', Category);
