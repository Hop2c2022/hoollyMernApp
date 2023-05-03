const mongoose = require("mongoose");

const CheckoutSchema = new mongoose.Schema(
  {
    foodId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    title: {
      type: String,
    },
    image: {
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
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;
