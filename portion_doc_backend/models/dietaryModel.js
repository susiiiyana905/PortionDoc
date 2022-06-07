const mongoose = require("mongoose");
const dietarySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    gender: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: true
    },
    height: {
      type: String,
      required: true
    },
    preference: {
      type: String,
      required: true
    },
    foodAllergies: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Dietary = mongoose.model("Dietary", dietarySchema);
module.exports = Dietary;
