const bcrypt = require("bcrypt");
const _ = require("lodash");
const axios = require("axios");
const otpGenerator = require("otp-generator");
const express = require('express');

const User = require('../models/userModel');
const Otp = require('../models/otpModel');

const router = new express.Router();

router.post('/signup', async(req,res)=>{
    const user = await User.findOne({
        email: req.body.email
    });
    if(user) return res.status(400).send("User already registered!");
    const OTP = otpGenerator.generate(6, {
        digits: true, alphabet: false, upperCase: false, specialChars:false
    });
    const email = req.body.email;
    console.log(OTP);

    const otp = new Otp({email: email, otp: OTP});
    const salt = await bcrypt.genSalt(10)
    otp.otp = await bcrypt.hash(otp.otp, salt);
    const result = await otp.save();
    return res.status(200).send("Otp send successfully!");
})

router.post('/user/verify', async(req,res)=>{

})

module.exports = router;