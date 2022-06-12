const mongoose = require('mongoose');

const ingredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
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