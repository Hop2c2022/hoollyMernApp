const mongoose = require("mongoose");

const CreateOrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      minlength: 1,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      minlength: 1,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CreateOrder = mongoose.model("CreateOrder", CreateOrderSchema);
module.exports = CreateOrder;
