const CreateOrder = require("../models/createOrder");
exports.createOrder = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image,
      type,
      brand,
      amount,
      restaurantId,
    } = req.body;
    const newOrder = await new CreateOrder({
      title,
      description,
      price,
      image,
      type,
      brand,
      amount,
      restaurantId,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    let myfunc = { type: "dinner" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrder2 = async (req, res) => {
  try {
    let myfunc = { type: "breakfast" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrder3 = async (req, res) => {
  try {
    let myfunc = { type: "lunch" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CreateOrder.find({ restaurantId: id });
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
