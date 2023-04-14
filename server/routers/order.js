const express = require("express");
const { postOrder } = require("../controllers/order.js");

const router = express.Router();

router.post("/auth/order", postOrder);

module.exports = router;
