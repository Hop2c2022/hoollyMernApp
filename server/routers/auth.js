const express = require("express");
const {
  login,
  register,
  getUser,
  loginCompany,
} = require("../controllers/auth.js");

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.post("/auth/logincompany", loginCompany);
router.get("/auth/:id", getUser);

module.exports = router;
