const CreateOrder = require("../models/createOrder");
exports.createOrder = async (req, res) => {
  try {
    const { title, description, price, image, type, brand, restaurantId } =
      req.body;
    const newOrder = await new CreateOrder({
      title,
      description,
      price,
      image,
      type,
      brand,
      restaurantId,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDinner = async (req, res) => {
  try {
    let myfunc = { type: "dinner" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBreakfast = async (req, res) => {
  try {
    let myfunc = { type: "breakfast" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getLunch = async (req, res) => {
  try {
    let myfunc = { type: "lunch" };
    const result = await CreateOrder.find(myfunc);
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrderByIdFood = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CreateOrder.findById({ _id: id });
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getRestraurants = async (req, res) => {
  try {
    let { myfunc } = req.params;
    const result = await CreateOrder.find({ brand: myfunc });
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
