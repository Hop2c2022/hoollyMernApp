const express = require("express");
const {
  postRestaurant,
  getRestaurant,
} = require("../controllers/createRestaurant");

const router = express.Router();

router.post("/restaurant", postRestaurant);
router.get("/restaurant", getRestaurant);

module.exports = router;
