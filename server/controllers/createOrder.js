const CreateOrder = require("../models/createOrder");

exports.createOrder = async (req, res) => {
  try {
    const { title, description, price, image, type } = req.body;
    const newOrder = await new CreateOrder({
      title,
      description,
      price,
      image,
      type,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const result = await CreateOrder.find();
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CreateOrder.findById({ _id: id });
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
