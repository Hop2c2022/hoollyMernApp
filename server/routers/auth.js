const express = require("express");
const {
  login,
  register,
  getUser,
  restaurantCheck,
} = require("../controllers/auth.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/:id", getUser);
router.patch("/restaurant/:id", restaurantCheck);

module.exports = router;
