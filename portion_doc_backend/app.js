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

app.listen(4001);
module.exports = app;