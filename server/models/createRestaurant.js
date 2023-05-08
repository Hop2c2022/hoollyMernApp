const mongoose = require("mongoose");

const CreateRestaurantSchema = new mongoose.Schema(
  {
    brandName: {
      type: String,
      minlength: 1,
      required: true,
    },
    brandImg: {
      type: String,
      required: true,
    },
    openTime: {
      type: String,
      minlength: 1,
      required: true,
    },
    closeTime: {
      type: String,
      required: true,
    },
    restDay: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  { timestamps: true }
);

const CreateRestaurant = mongoose.model(
  "CreateRestaurant",
  CreateRestaurantSchema
);
module.exports = CreateRestaurant;
