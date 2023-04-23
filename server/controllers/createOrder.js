const CreateOrder = require("../models/createOrder");
exports.createOrder = async (req, res) => {
  try {
    const { title, description, price, image, type, brand, amount } = req.body;
    const newOrder = await new CreateOrder({
      title,
      description,
      price,
      image,
      type,
      brand,
      amount,
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

exports.getOrder4 = async (req, res) => {
  try {
    let myfunc = { brand: "KFC" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrder5 = async (req, res) => {
  try {
    let myfunc = { brand: "Pizza hut" };
    const result = await CreateOrder.find(myfunc);
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
