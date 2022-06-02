const mongoose = require('mongoose');
const dietarySchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Types.ObjectId, ref : "User"
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
   foodAllergies:{
       type: String,
   },
      
});

const Dietary = mongoose.model("Dietary", dietarySchema);
module.exports = Dietary;
