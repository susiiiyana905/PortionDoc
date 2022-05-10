const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    }
},
{
    timestamps: true,
});

userSchema.methods.generateJWT = function() {
    const registerToken = jwt.sign({
        _id: this._id,
        email: this.email,
    }, "RegisterUserKey", {expiresIn: "5m"})
}

const User = mongoose.model("User", userSchema);

module.exports = User;