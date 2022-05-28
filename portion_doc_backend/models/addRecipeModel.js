const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    
  },
  title: {
    type: String,
    
  },
  description:{
    type:String,
  },

  steps:[ {
    type: String,
    
  },],
  
  recipePic: {
   type:String,
  }
});

module.exports = User = mongoose.model('recipes', RecipeSchema);