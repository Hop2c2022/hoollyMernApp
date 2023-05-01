const express = require("express");
const {
  createOrder,
  getBreakfast,
  getDinner,
  getLunch,
  getOrderByIdFood,
  getRestraurants,
} = require("../controllers/createOrder");

const router = express.Router();

router.post("/auth/createOrder", createOrder);
router.get("/orders/dinner", getDinner);
router.get("/orders/breakfast", getBreakfast);
router.get("/orders/lunch", getLunch);
router.get("/orders/:id", getOrderByIdFood);
router.get("/restaurant/:myfunc", getRestraurants);

module.exports = router;
