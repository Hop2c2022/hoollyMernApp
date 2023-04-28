const express = require("express");
const {
  createOrder,
  getOrder,
  getOrder3,
  getOrder2,
  getOrderByIdRest,
  getOrderByIdFood,
} = require("../controllers/createOrder");

const router = express.Router();

router.post("/auth/createOrder", createOrder);
router.get("/orders/dinner", getOrder);
router.get("/orders/breakfast", getOrder2);
router.get("/orders/lunch", getOrder3);
router.get("/restaurants/:id", getOrderByIdRest);
router.get("/orders/:id", getOrderByIdFood);

module.exports = router;
