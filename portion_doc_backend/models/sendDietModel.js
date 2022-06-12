const mongoose = require('mongoose');

const preferenceSendSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
  
    dietMeal_id : {
        type : mongoose.Types.ObjectId, ref : "dietPreference"
    },
},

{
    timestamps: true
});

const preferenceSend = mongoose.model("preferenceSend", preferenceSendSchema);

module.exports = preferenceSend;