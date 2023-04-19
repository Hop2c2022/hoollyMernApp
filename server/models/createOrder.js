const mongoose = require("mongoose");

const CreateOrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 1,
    },
    description: {
      type: String,
      minlength: 1,
    },
    price: {
      type: String,
    },
    image: {
      type: String,
    },
    type: {
      type: String,
    },
  },
  { timestamps: true }
);

const CreateOrder = mongoose.model("CreateOrder", CreateOrderSchema);
module.exports = CreateOrder;
