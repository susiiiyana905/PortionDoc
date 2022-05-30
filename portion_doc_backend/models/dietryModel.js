const mongoose = require('mongoose');
const dietarySchema = new mongoose.Schema({
   userId:{
       type: mongoose.Schema.Types.ObjectId,
       ref:"User",
   },
   gender:{
       type: String,
      
   },
   weight:{
    type: String,
   
   },
   height:{
    type: String,
    
   },
   preference:{
       type: String,
    
   },
      
});

const Dietary = mongoose.model("Dietary", dietarySchema);
module.exports = Dietary;
