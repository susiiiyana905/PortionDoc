const mongoose = require('mongoose');

const RecipeIngredientsSchema = new mongoose.Schema({
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
    recipe_id : {
        type : mongoose.Types.ObjectId, ref : "Recipe"
    }
},
{
    timestamps: true
});

const RecipeIngredients = mongoose.model("RecipeIngredients", RecipeIngredientsSchema);

module.exports = RecipeIngredients;