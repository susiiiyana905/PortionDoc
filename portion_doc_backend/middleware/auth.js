const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Admin = require("../models/adminmodels");
//guard for user
module.exports.verifyUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);
        const adata = jwt.verify(token, "anysecretkey");
        //select * from customers where _id = cdata.custID
        User.findOne({ _id: adata.userId }).then(function (userData) {
            // console.log(userData)
            // if (userData.Admin){
            //     res.json({message: "Admins not allow"});
            // } else{
            req.userInfo = userData;
            next();
            // }
        })
            .catch(function (e) {
                res.json({ error: e })
            })
    }
    catch (e) {
        res.json({ error: e })
    }
}
//guard for admin
module.exports.verifyAdmin = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        //console.log(token);
        const adata = jwt.verify(token, "anysecretkey");
        console.log("try");
        Admin.findOne({ _id: adata.userId }).then(function (userData) {
            if (userData.Admin) {
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