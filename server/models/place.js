const mongoose = require("mongoose");

const Placemodel = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      minlength: 7,
    },
    district: {
      type: String,
    },
    street: {
      type: String,
    },
    fullInformation: {
      type: String,
    },
  },
  { timestamps: true }
);

const Place = mongoose.model("Place", Placemodel);
module.exports = Place;
