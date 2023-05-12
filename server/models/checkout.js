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
    currentprice: {
      type: Number,
    },
    pieces: {
      type: Number,
    },
    company: {
      type: String,
    },
  },
  { timestamps: true }
);

const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;
