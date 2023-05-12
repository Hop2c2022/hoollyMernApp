const adminOrders = require("../models/adminOrders");
const CheckoutSchema = require("../models/checkout");

exports.postAdminOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await adminOrders.create({ data, userId: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getAdminOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const get = await CheckoutSchema.find({ userId: id });
    res.json(get);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAdminOrders = async (req, res) => {
  try {
    const { id } = req.params;
    const get = await adminOrders.find({ userId: id });

    res.json(get);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
