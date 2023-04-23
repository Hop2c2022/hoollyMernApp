const CreateRestaurantSchema = require("../models/createRestaurant");

exports.postRestaurant = async (req, res) => {
  try {
    const { restDay, description, closeTime, openTime, brandImg, brandName } =
      req.body;
    const newOrder = await new CreateRestaurantSchema({
      restDay,
      description,
      closeTime,
      openTime,
      brandImg,
      brandName,
    }).save();
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRestaurant = async (req, res) => {
  try {
    const result = await CreateRestaurantSchema.find();
    res.status(200).send({ result });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
