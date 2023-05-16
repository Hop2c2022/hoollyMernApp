const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

/* REGISTER USER */
exports.register = async (req, res) => {
  try {
    const { name, email, password, profileImg } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    const user = await User.findOne({ email: email });
    if (user) return res.status(400).json({ msg: "User is already exist!" });
    const newUser = await new User({
      name,
      email,
      password: passwordHash,
      profileImg,
    }).save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/* LOG IN */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    delete user.password;
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById({ _id: id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.restaurantCheck = async (req, res) => {
  try {
    const { id } = req.params;
    const { restaurantCreated, company } = req.body;
    const data = await User.findByIdAndUpdate(id, {
      restaurantCreated: restaurantCreated,
      company: company,
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editName = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const data = await User.findByIdAndUpdate(id, {
      name: name,
    });
    res.status(200).json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.forgotPassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  const data = await User.findByIdAndUpdate(id, {
    password: password,
  });
};
