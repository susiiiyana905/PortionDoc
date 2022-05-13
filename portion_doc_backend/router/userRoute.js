const bcrypt = require("bcrypt");
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

router.post('/login', async (req, res) => {
    try{
        const foundUser = await User.findOne({email: req.body.email})
        console.log(req.body)
        if (foundUser) {

            let submittedPass = req.body.password; 
            let storedPass = foundUser.password; 
    
            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
            if (passwordMatch) {
                let usrname = foundUser.username;
                res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
            } else {
                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
            }
        }
        else {
    
            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
            await bcrypt.compare(req.body.password, fakePass);
    
            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
        }
    } catch(err){
      res.sendStatus(500).json({error: err})
    }
});

router.post('/signup', async(req,res)=>{
    try {
        const email = req.body.email;
        if(!email) {
            return res.status(400).send({message: 'Invalid Email'});
        }
        const user = await User.findOne({
            email: email
        })
        if(user) return res.status(400).send({message: 'User already registered with given email.'})

        const newUser = new User({
            email: email,
            password: req.body.password,
            username: req.body.username,
            address: req.body.address,
            phone: req.body.phone
        })

        await newUser.save();
        const OTP = otpGenerator.generate(6, {
            digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars:false
        });
        console.log(OTP);
    
        const otp = new Otp({email: email, otp: OTP});
        const salt = await bcrypt.genSalt(10)
        otp.otp = await bcrypt.hash(otp.otp, salt);
        const result = await otp.save();
        sendEmail(email, "User Verification OTP Token", OTP);
        return res.status(200).send("Otp send successfully!");
        
    }
    catch(err) {
     console.log(err)
    }
});


router.post('/user/verify', async(req,res)=>{
    const email = req.body.email;
    const otpHolder = await Otp.find({
        email: req.body.email
    });
    if(!validator.isEmail(email)) {
        return res.json({message: "Provide a valid email address."});
    }
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

const generateJWT = (id,email) => {
    return jwt.sign({
        _id: this._id,
        email: this.email,
    }, "RegisterUserKey", { expiresIn: "5m" });
}

module.exports = router;