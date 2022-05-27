const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    ingredientsName: {
        type: String,
        default: ''
    },
    quantity: {
        type: String,
        default: ''
    },
    ingredientsImage: {
        type: String,
        default: ''
    },
    meals_id : {
        type : mongoose.Types.ObjectId, ref : "Meals"
    }
},
{
    timestamps: true
});

const Ingredients = mongoose.model("Ingredients", ingredientsSchema);

module.exports = Ingredients;