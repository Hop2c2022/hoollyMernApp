const express = require("express");
const {
  postAdminOrder,
  getAdminOrder,
  getAdminOrders,
} = require("../controllers/adminOrder.js");

const router = express.Router();

router.post("/postadminOrder/:id", postAdminOrder);
router.get("/getadminOrder/:id", getAdminOrder);
router.get("/getadminOrders", getAdminOrders);

module.exports = router;
