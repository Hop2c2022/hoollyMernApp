const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
    },
    price: {
      type: String,
    },
  },
  { timestamps: true }
);

const Orders = mongoose.model("Orders", OrderSchema);
module.exports = Orders;
