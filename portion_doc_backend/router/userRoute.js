const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const _ = require("lodash");
const axios = require("axios");
const validator = require("validator");
const otpGenerator = require("otp-generator");
const express = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const Otp = require('../models/otpModel');
const sendEmail = require('../utils/sendEmail');
const { sortedUniq } = require("lodash");
const { generate } = require("otp-generator");

const router = new express.Router();

router.post('/signup', async(req,res)=>{
    const email = req.body.email;
    if(!validator.isEmail(email)) {
        return res.json({message: "Provide a valid email address."});
    }
    const user = await User.findOne({
        email: email
    })
    if(user) return res.status(400).send({message: 'User already registered with given email.'})
    const password = req.body.password;
    bcryptjs.hash(password, 10, async(e, hashed_value)=>{
    const newUser = new User({
        email: email,
        password: hashed_value,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone
    })

    newUser.save();
    const OTP = otpGenerator.generate(6, {
        digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars:false
    });
    console.log(OTP);
    
    const otp = new Otp({email: email, otp: OTP});
    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    sendEmail(email, "User Verification OTP Token", OTP);
    return res.status(200).send({success:true, message:"Otp send successfully!"});
        
    }
    )
});


router.post('/user/verify', async(req,res)=>{
    const email = req.body.email;
    const otpHolder = await Otp.find({
        email: req.body.email
    });
   
    if (otpHolder.length === 0) return res.status(400).send("You used an Expired OTP!!");
    const rightOtpFind = otpHolder[otpHolder.length-1];
    const validUser = await bcrypt.compare(req.body.otp, rightOtpFind.otp);

    if(rightOtpFind.email === req.body.email && validUser) {
        const user = await User.updateOne({email: req.body.email},{verified: true});
        const token =generateJWT(user._id,user.email);
        const OTPDelete = await Otp.deleteMany({
            email: rightOtpFind.email
        });

        return res.status(200).send({
            message: "User Registration Successful!!",
            token: token,
            data: user,
        });
    }
    else{
        return res.status(400).send("Your OTP was wrong!")
    }
})


router.post("/user/login", function(req,res){
    const email = req.body.email;
    User.findOne({email: email})
    .then(function(userData){
        // console.log(userData);
        if(userData === null){
            return res.status(400).send({message: "Invalid email!"});
        }
        else if(userData.verified===false){
            return res.status(400).send({message:"Verification required first."})
        }
        //now its time for comparing password between the password
    //provided by user and password stored in db
    const password = req.body.password;
    bcryptjs.compare(password,userData.password,function(e, result){
        // console.log(result);
        if(result === false){
            return res.status(400).send({message: "Invalid login credentials!"})
        }
        //now lets generate token
        //jsonwebtoken
        const token = jwt.sign({userID: userData._id}, "anysecretkey");
        res.json({token: token, message: "success"});
    })
    })
})


// router.post('/login', async (req, res) => {
//     // try{
//         const foundUser = await User.find({email: req.body.email})
//         console.log(req.body)
//         if (foundUser) {

//             let submittedPass = req.body.password; 
//             let storedPass = foundUser.password; 
    
//             const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
//             if (passwordMatch) {
//                 let usrname = foundUser.username;
//                 res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
//             } else {
//                 res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
//             }
//         }
//         else {
    
//             let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
//             await bcrypt.compare(req.body.password, fakePass);
    
//             res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
//         }
//     // } catch(err){
//     //   res.send(err)
//     // }
// });

const generateJWT = (id,email) => {
    return jwt.sign({
        _id: this._id,
        email: this.email,
    }, "RegisterUserKey", { expiresIn: "5m" });
}

module.exports = router;