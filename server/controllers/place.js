const Place = require("../models/place.js");

exports.postPlace = async (req, res) => {
  try {
    const { userId, fullInformation, phoneNumber, district, street } = req.body;
    const newPlace = await new Place({
      userId,
      fullInformation,
      district,
      street,
      phoneNumber,
    }).save();
    res.status(201).json(newPlace);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getPlace = async (req, res) => {
  try {
    const { userId } = req.params;
    const get = await Place.find();
    let heh = [];
    get.map((el) => {
      if (el.userId == userId) {
        heh.push(el);
      }
    });
    let finish = heh.reverse();

    res.json(finish);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.selectPlace = async (req, res) => {
  try {
    const { Id } = req.params;
    const result = await Place.findById({ _id: Id });
    res.status(200).json({ result });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
