const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false,
        required : true
    }

},
    {
        timestamps: true,
    });

userSchema.methods.generateJWT = function () {
    return jwt.sign({
        _id: this._id,
        email: this.email,
    }, "RegisterUserKey", { expiresIn: "5m" })
}

const User = mongoose.model("User", userSchema);

module.exports = User;