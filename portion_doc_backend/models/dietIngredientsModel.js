const mongoose = require('mongoose');

const dietIngredientsSchema = new mongoose.Schema({
    name: {
        type: String,
        default: ''
    },
    quantity: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    dietMeals_id : {
        type : mongoose.Types.ObjectId, ref : "dietPreferenceMeal"
    }
},
{
    timestamps: true
});

const DietIngredients = mongoose.model("dietIngredients", dietIngredientsSchema);

module.exports = DietIngredients;