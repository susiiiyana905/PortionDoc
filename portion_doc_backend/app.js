const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./database/database");

const UserRoute = require("./router/userRoute");
const adminRoute = require("./router/adminroute");

app.use(UserRoute);
app.use(adminRoute);

app.listen(4001);

module.exports = app;