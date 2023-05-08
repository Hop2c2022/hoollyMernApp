const express = require("express");
const {
  postCheckout,
  checkoutGetController,
  checkoutDeleteController,
  selfDestructController,
} = require("../controllers/postCheckout.js");

const router = express.Router();

router.post("/auth/postCheck/:foodId", postCheckout);
router.get("/users/:userId", checkoutGetController);
router.delete("/checkdel/:Id", checkoutDeleteController);
router.delete("/allcheck/:id", selfDestructController);

module.exports = router;
