const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  user_id : {
    type : mongoose.Types.ObjectId, ref : "User"
  },
  title: {
    type: String,
    required: true
    
  },  
  description:{
    type:String,
    required: true
  },
  steps: [
    {
        type: String,
        required: true
    }
  ],
  recipePic: {
   type:String,
   required: true
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;