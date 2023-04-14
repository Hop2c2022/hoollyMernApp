const Order = require("../models/order");

exports.postOrder = async (req, res) => {
  try {
    const { fullInformation, phoneNumber, district } = req.body;
    const newOrder = await new Order({
      fullInformation,
      district,
      phoneNumber,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
