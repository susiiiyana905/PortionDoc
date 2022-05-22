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
    time: {
        type: String,
        required: true
    },
    mealCategory: {
        type: String,
        required: true
    },
    calory : {
        type: String,
        required: true
    },
    difficulty : {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
},
{
    timestamps: true,
});

const Meals = mongoose.model("Meals", mealsSchema);

module.exports = Meals;

