const Checkout = require("../models/checkout");

exports.postCheckout = async (req, res) => {
  try {
    const { foodId } = req.params;
    const { userId, price, image, title } = req.body;
    const newCheckout = await new Checkout({
      userId,
      foodId,
      price,
      image,
      title,
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

exports.userDelete = async (req) => {
  const { userId } = req.params;
  const _id = new mongoose.Types.ObjectId(userId);
  return await User.findByIdAndDelete({ _id }, { new: true });
};

exports.userDeleteController = async (req, res) => {
  try {
    const { userId } = req.params;
    const _id = new mongoose.Types.ObjectId(userId);
    return await User.findByIdAndDelete({ _id }, { new: true });
    res.status(201).send("Successfully deleted user!");
  } catch (error) {
    return res.status(400).send("Cannot delete user!");
  }
};
