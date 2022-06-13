const mongoose = require('mongoose');

const dietPreferenceMealSchema = new mongoose.Schema({
    dietImage:{
        type: String,
        default:"",
        required: true
    },
    dietName:{
        type: String,
        required: true
    },
    dietPrice:{
        type: String,
        required: true
    },
    dietDescription:{
        type: String,
        required: true
    },
    steps:[
        {
            type: String,
            default:''
        }
    ],
    time: {
        type: String,
        required: true
    },
    calory: {
        type: String,
        required: true
    },
    preference:{
        type : String,
        required: true
    },
    difficulty : {
        type: String,
        required: true
    }

});
const dietPreferenceMeal = mongoose.model("dietPreferenceMeal",dietPreferenceMealSchema);
module.exports = dietPreferenceMeal;