const mongoose = require("mongoose");

const AdminOrderSchema = new mongoose.Schema(
  {
    data: {
      type: Array,
      required: true,
    },
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

const AdminOrder = mongoose.model("AdminOrder", AdminOrderSchema);
module.exports = AdminOrder;
