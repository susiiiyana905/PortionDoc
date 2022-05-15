const express = require("express");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = new express.Router();
const Admin = require("../models/adminmodels");
const { route } = require("express/lib/application");
const { append, json } = require("express/lib/response");

// const router = new express.Router();
// const User = require("../models/userModel");

const auth = require("../middleware/auth");
// const upload = require("../uploads/file");

router.post("/user/register",  function(req, res){
    // if(req.file == undefined){
    //     return res.json({msg:"invalid!!"})
    // }
    const Username = req.body.Username;
    Admin.findOne({Username: Username})
    .then(function(userData){
        if(userData != null){
            res.json({success: false, message : "User Already Exists"});
            return;
        }
        // now this place is for the user which is not available in db 

        const Password = req.body.Password;
        const Email = req.body.Email;
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        // const Admin = req.body.Admin;

        bcryptjs.hash(Password, 10, function(e, hashed_value){
            const data = new User({
                FirstName: FirstName,
                LastName: LastName,
                Username: Username,
                Email: Email,
                Password: hashed_value,
                // Admin : Admin,
                       
            })

            data.save()
            .then(function(){
                res.json({success: true, message: "Registered Success"});
            })
            .catch(function(e){
                res.json({success: false, message: e})
            })
        })

    })
  

})

//login route for user 
router.post("/user/login",function(req,res){
    const Username = req.body.Username; //Sadixya
    Admin.findOne({Username : Username})
    .then(function(userData){
        //console.log(userData);
        if(userData===null){
             return  res.status(404).json({success: false, message:"Invalid Login Credentials"})
        }
        //here the code goes for comparing
        const Password = req.body.Password;
        console.log(Password)
        bcryptjs.compare(Password, userData.Password, function(e, result){
           // console.log(result);
        if(result===false){
           return res.json({success: false, message: "Invalid Password"})
        }

        //now lets generate token
        //jsonwebtoken

        //jwt. sign helps to create token

        const token = jwt.sign({userId: userData._id},"anysecretkey");
        res.json({success: true, token : token, message : "Success!!!!!!", admin: userData.Admin})
})


    })
})

router.delete("/test", auth.verifyUser,function(req,res){
    res.json({msg : req.userInfo.Name});
})

router.get("/profile", auth.verifyUser,async(req,res)=>{
    //res.json({msg: "my profile"});
    const user = await Admin.findOne({_id : req.userInfo._id});
    res.json(user);
})

//profile update of the customer
router.put("/user/update", auth.verifyUser, function(req, res){
    // console.log(req.userInfo._id);
    // console.log(req.userInfo.Name);
    // console.log(req.userInfo.Username);
    // console.log(req.userInfo.Email);
    // res.json(req.userInfo);
    const uid = req.userInfo._id;
    const {
        FirstName,
        LastName,
        Username,
        Email
    } = req.body

    const updateProfile = {
        FirstName,
        LastName,
        Username,
        Email
    }
    
    // User.updateOne({_id : uid},{Name : Name},{Username: Username},{Email : Email})
    Admin.updateOne({_id : uid}, updateProfile)
    .then(function(){
        res.json({success:true, msg: "Profile updated!!"})
    })
    .catch(function(e){
        res,json({msg : e})
    });
})

router.delete("/user/delete", auth.verifyUser,function(req, res){
    const uid = req.userInfo._id;
    Admin.findByIdAndDelete(uid)
    .then(function(){
        res.json({success:true, msg:"User Deleted"})
    })

    .catch(function(){
        res.json({msg:"Something went wrong !!!"})
    })


})

router.delete("admin/user/delete", auth.verifyAdmin,function(req, res){
    const uid = req.userInfo._id;
    Admin.findByIdAndDelete(uid)
    .then(function(){
        res.json({msg:"User Deleted"})
    })

    .catch(function(){
        res.json({msg:"Something went wrong !!!"})
    })


})

router.get("/user/view", auth.verifyAdmin, async(req,res)=>{
    // const pid = req.body.pid;
    const UserData = await Admin.find()
    res.json(UserData);
})

router.post("/admin/register", function(req, res){
   
    const Username = req.body.username;
    Admin.findOne({Username: Username})
    .then(function(userData){
        if(userData != null){
            res.json({success: false, message : "Admin Already Exists"});
            return;
        }
        // now this place is for the user which is not available in db 

        const Password = req.body.password;
        const Email = req.body.email;
        const FirstName = req.body.firstName;
        const LastName= req.body.lastName;
        //const Admin = req.body.Admin;

        bcryptjs.hash(Password, 10, function(e, hashed_value){
            const data = new Admin({
                FirstName: FirstName,
                LastName: LastName,
                Username: Username,
                Email: Email,
                Password: hashed_value,
                Admin : true,
                       
            })

            data.save()
            .then(function(){
                res.json({success: true, message: "Registered Success"});
            })
            .catch(function(e){
                res.json({success: false, message: e})
            })
        })

    })
  

})

// //to delete customer by admin
// router.delete("/user/profile/delete", auth.verifyAdmin,function(req,res){
//     const _id = req.body._id;
//     User.deleteOne({_id: _id})
//     .then()
//     .catch()
// })

router.post("/user/login",function(req,res){
    const Username = req.body.username; //Sadixya
    Admin.findOne({Username : Username})
    .then(function(userData){
        //console.log(userData);
        if(userData===null){
             return  res.status(404).json({message:"Invalid Login Credentials"})
        }
        //here the code goes for comparing
        const Password = req.body.password;
        bcryptjs.compare(Password, userData.password, function(e, result){
           // console.log(result);
        if(result===false){
           return res.json({message: "Invalid Password"})
        }

        //now lets generate token
        //jsonwebtoken

        //jwt. sign helps to create token

        const token = jwt.sign({userId: userData._id},"anysecretkey");
        res.json({token : token, message : "Success!!!!!!", admin: userData.Admin})
})
    })
})



module.exports = router;