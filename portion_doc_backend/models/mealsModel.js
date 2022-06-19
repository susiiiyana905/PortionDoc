const mongoose = require('mongoose');

const mealsSchema = new mongoose.Schema({
    mealImage: {
        type: String,
        default: "",
        required: true
    },
    mealName: {
        type: String,
        required: true
    },
    mealPrice: {
        type: String,
        required: true
       
    },
    mealDescription: {
        type: String,
        required: true
    },
    steps: [
        {
            type: String,
            default: ''
        }
    ],
    time: {
        type: String,
        required: true
    },
    mealCategory: {
        type: String,
        required: true
    },
    category_id : {
        type : mongoose.Types.ObjectId, ref : "Category"
    },
    calory : {
        type: String,
        required: true
    },
    difficulty : {
        type: String,
        required: true
    }
},
{
    timestamps: true,
});

const Meals = mongoose.model("Meals", mealsSchema);

module.exports = Meals;

