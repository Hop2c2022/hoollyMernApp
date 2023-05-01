const express = require("express");
const {
  postCheckout,
  checkoutGetController,
} = require("../controllers/postCheckout.js");

const router = express.Router();

router.post("/auth/postCheck/:foodId", postCheckout);
router.get("/users/:userId", checkoutGetController);

module.exports = router;
