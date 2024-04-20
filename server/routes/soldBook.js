// importing the express module
const express = require("express");

// importing soldBook controller
const soldBookController = require("../controllers/soldBook");

// importing express router
const router = express.Router();

// all routes
router.get('/soldbooks', soldBookController.getSoldBooks);

// exporting the routes
module.exports = router;