const mongoose = require("mongoose")

const PreferenceCategorySchema = new mongoose.Schema({
    dietCategoryName:{
        type: String,
        unique :  true,
        required: true
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

const PreferenceCategory = mongoose.model("PreferenceCategory", PreferenceCategorySchema);
module.exports =PreferenceCategory;