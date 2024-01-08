// Importing the express module
const express = require("express");

// Importing auth controller
const authController = require("../controllers/auth.js");

// Importing express router
const router = express.Router();

// All routes 
router.post("/register", authController.postRegister);
router.post("/login", authController.postLogin);

// exporting the routes
module.exports = router;