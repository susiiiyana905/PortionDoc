const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//guard for user
module.exports.verifyUser = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const uData = jwt.verify(token, "loginKey");
        //select * from users where _id = udata.userID
        User.findOne({_id: uData.userID})
        .then(function(userData){
            // console.log(userData)
            req.userInfo = userData;
            next();
        })
        .catch(function(e){
            res.json({error : e.message})
        })
    }
    catch(e){
        res.json({error : e.message})
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
