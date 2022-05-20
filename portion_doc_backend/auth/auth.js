const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//guard for user
module.exports.verifyUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);
        const uData = jwt.verify(token, "loginKey");
        // console.log("try");
        User.findOne({ _id: uData.userId })
        .then(function (userData) {
            if (userData.admin == false) {
                req.userInfo = userData;
                next();
            } else {
                res.json({ message: "Users not allow" });
            }
        })
            .catch(function (e) {
                res.json({ error: e })
            })
    }
    catch (e) {
        console.log("catch");
        res.json({ error: e })
    }
}



// guard for admin
module.exports.verifyAdmin = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);
        const aData = jwt.verify(token, "loginKey");
        // console.log("try");
        User.findOne({ _id: aData.userId })
        .then(function (userData) {
            if (userData.admin) {
                req.userInfo = userData;
                next();
            } else {
                res.json({ message: "Users not allow" });
            }
        })
            .catch(function (e) {
                res.json({ error: e })
            })
    }
    catch (e) {
        console.log("catch");
        res.json({ error: e })
    }
}
