const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      minlength: 7,
    },
    district: {
      type: String,
    },
    fullInformation: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
