const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./database/database");

const UserRoute = require("./router/userRoute");
app.use(UserRoute);

const CategoryRoute = require("./router/categoryRoute");
app.use(CategoryRoute);

const MealRoute = require("./router/mealsRoute");
app.use(MealRoute);

const IngredientsRoute = require("./router/ingredientsRoute");
app.use(IngredientsRoute);


const RecipeRoute = require("./router/recipeRoute");
app.use(RecipeRoute);


const DietaryRoute = require("./router/dietaryRoute");
app.use(DietaryRoute);


const DietPreferenceRoute = require("./router/dietPreferenceRoute");
app.use(DietPreferenceRoute);


const ReviewRoute = require("./router/reviewRoute");
app.use(ReviewRoute);

const OrderRoute = require("./router/orderRoute");
app.use(OrderRoute);



app.use(express.static(__dirname+'/images/'));

app.listen(4001);
module.exports = app;