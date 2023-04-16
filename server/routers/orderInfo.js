const express = require("express");
const { postInfoOrder } = require("../controllers/orderInfo.js");

const router = express.Router();

router.post("/auth/orderInfo", postInfoOrder);

module.exports = router;
