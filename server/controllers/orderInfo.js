const OrderInfo = require("../models/orderInfo");

exports.postInfoOrder = async (req, res) => {
  try {
    const { fullInformation, phoneNumber, district } = req.body;
    const newOrder = await new OrderInfo({
      fullInformation,
      district,
      phoneNumber,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};