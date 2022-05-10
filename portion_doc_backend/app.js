const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./database/database");

const UserRoute = require("./router/userRoute");
app.use(UserRoute);

app.listen(4001);