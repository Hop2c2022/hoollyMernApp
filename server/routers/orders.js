const express = require("express");
const { postCheckout } = require("../controllers/postCheckout.js");

const router = express.Router();

router.post("/auth/postCheck/:foodId", postCheckout);

module.exports = router;
