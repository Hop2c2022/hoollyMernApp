const express = require("express");
const {
  createOrder,
  getOrder,
  getOrder3,
  getOrder2,
  getOrderById,
} = require("../controllers/createOrder");

const router = express.Router();

router.post("/auth/createOrder", createOrder);
router.get("/orders/dinner", getOrder);
router.get("/orders/breakfast", getOrder2);
router.get("/orders/lunch", getOrder3);
router.get("/orders/:id", getOrderById);

module.exports = router;
