const express = require("express");
const { postPlace, getPlace, selectPlace } = require("../controllers/place.js");

const router = express.Router();

router.post("/place", postPlace);
router.get("/placeget/:userId", getPlace);
router.get("/selectplace/:Id", selectPlace);

module.exports = router;
