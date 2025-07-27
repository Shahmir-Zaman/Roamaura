const express = require("express");
const router = express.Router();
const landingController = require("../controllers/landing.js");

// Home route
router.get("/", landingController.renderHome);

module.exports = router;