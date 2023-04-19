const express = require("express");
const {
  createOrder,
  getOrder,
  getOrderById,
} = require("../controllers/createOrder");

const router = express.Router();

router.post("/auth/createOrder", createOrder);
router.get("/orders", getOrder);
router.get("/orders/:id", getOrderById);

module.exports = router;
