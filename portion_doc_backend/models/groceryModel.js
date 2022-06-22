const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema({
    groceryImage:{
        type: String,
        default:"",
        required: true
    },
    groceryName: {
        type: String,
        required: true
    },
    groceryPrice: {
        type: String,
        required: true
       
    },
    groceryDescription: {
        type: String,
       
    },
});
const Grocery = mongoose.model("Grocery", grocerySchema);
module.exports = Grocery;
