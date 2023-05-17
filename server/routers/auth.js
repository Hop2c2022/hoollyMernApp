const express = require("express");
const {
  login,
  register,
  getUser,
  restaurantCheck,
  editName,
  userUpdate,
  getUsers,
} = require("../controllers/auth.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/:id", getUser);
router.get("/auth", getUsers);
router.patch("/restaurant/:id", restaurantCheck);
router.patch("/auth/:id", editName);
router.put("/user/:userId", userUpdate);

module.exports = router;
