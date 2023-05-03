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
