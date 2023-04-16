const Orders = require("../models/orders");

exports.postOrder = async (req, res) => {
  try {
    const { foodName, price } = req.body;
    const newOrder = await new Orders({
      foodName,
      price,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
