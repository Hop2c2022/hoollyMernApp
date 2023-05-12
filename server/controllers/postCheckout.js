const Checkout = require("../models/checkout");
const mongoose = require("mongoose");

exports.postCheckout = async (req, res) => {
  try {
    const { foodId } = req.params;
    const { userId, price, image, title, currentprice, pieces, company } =
      req.body;
    const newCheckout = await new Checkout({
      userId,
      foodId,
      price,
      image,
      title,
      currentprice,
      pieces,
      company,
    }).save();
    res.status(201).send("Successfully added food!");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.checkoutGetController = async (req, res) => {
  try {
    const { userId } = req.params;
    const get = await Checkout.find();
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

// exports.userDelete = async (req) => {
//   const { Id } = req.params;
//   const _id = new mongoose.Types.ObjectId(userId);
//   return await User.findByIdAndDelete({ _id }, { new: true });
// };

exports.checkoutDeleteController = async (req, res) => {
  try {
    const { Id } = req.params;
    const _id = new mongoose.Types.ObjectId(Id);
    await Checkout.findByIdAndDelete({ _id }, { new: true });
    res.status(201).send("Successfully deleted user!");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

exports.buyOrderController = async (req, res) => {
  try {
    const {} = req.body;
    const buyOrder = await new CreateOrder({
      fullInformation,
      district,
      street,
      phoneNumber,
      orderTotal,
    }).save();
    res.status(201).json(buyOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.selfDestructController = async (req, res) => {
  try {
    const { id } = req.params;
    await Checkout.deleteMany({ userId: id });
    res.status(201).send("Success");
  } catch (error) {
    return res.status(400).json(error.message);
  }
};
