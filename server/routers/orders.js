const express = require("express");
const { postOrder } = require("../controllers/orders.js");

const router = express.Router();

router.post("/auth/orders", postOrder);

module.exports = router;
