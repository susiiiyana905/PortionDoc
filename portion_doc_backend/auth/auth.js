const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


//guard for user
module.exports.verifyUser = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1];
<<<<<<< Updated upstream
        const udata = jwt.verify(token, "loginKey");
=======
        const uData = jwt.verify(token, "loginKey");
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        const adata = jwt.verify(token, "loginKey");
        console.log("try");
        User.findOne({ _id: adata.userId }).then(function (userData) {
=======
        const aData = jwt.verify(token, "loginKey");
        // console.log("try");
        User.findOne({ _id: aData.userId })
        .then(function (userData) {
>>>>>>> Stashed changes
            if (userData.admin) {
                req.userInfo = userData;
                next();
            } else {
<<<<<<< Updated upstream

                res.json({ message: "Users not allow" });
            }

        })

=======
                res.json({ message: "Users not allow" });
            }
        })
>>>>>>> Stashed changes
            .catch(function (e) {
                res.json({ error: e })
            })
    }
    catch (e) {
        console.log("catch");
<<<<<<< Updated upstream

        res.json({ error: e })
    }



}
=======
        res.json({ error: e })
    }
}
>>>>>>> Stashed changes
