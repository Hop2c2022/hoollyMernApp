const Checkout = require("../models/checkout");

exports.postCheckout = async (req, res) => {
  try {
    const { foodId } = req.params;
    const { userId, price } = req.body;
    const newCheckout = await new Checkout({
      userId,
      foodId,
      price,
    }).save();
    res.status(201).send("Successfully added food!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
