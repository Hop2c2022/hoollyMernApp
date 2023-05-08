const express = require("express");
const {
  postAdminOrder,
  getAdminOrder,
} = require("../controllers/adminOrder.js");

const router = express.Router();

router.post("/postadminOrder/:id", postAdminOrder);
router.get("/getadminOrder/:id", getAdminOrder);

module.exports = router;
