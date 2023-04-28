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
  },
  { timestamps: true }
);

const Checkout = mongoose.model("Checkout", CheckoutSchema);
module.exports = Checkout;
