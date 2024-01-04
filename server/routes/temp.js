// *** THIS IS A TEMPORARY ROUTE ***

// Importing the express module
const express = require("express");

// Importing the temp Controller 
const tempController = require("../controllers/temp");

// Importing express router
const router = express.Router();

// All routes
router.post('/temp', tempController.postMessage);

// exporting the routes
module.exports = router;
