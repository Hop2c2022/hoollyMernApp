const mongoose = require("mongoose");

const OrderInfoSchema = new mongoose.Schema(
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

const OrderInfo = mongoose.model("OrderInfo", OrderInfoSchema);
module.exports = OrderInfo;
