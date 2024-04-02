// Importing the express module
const express = require("express");

// Importing book controller
const messageController = require("../controllers/message.js");

// Importing express router
const router = express.Router();

// All routes
router.get("/messages/:id", messageController.getAllMessages);

// exporting the routes
module.exports = router;
