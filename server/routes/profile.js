// Importing the express module
const express = require("express");

// Importing profile controller
const profileController = require("../controllers/profile.js");

// Importing express router
const router = express.Router();

// All routes
router.get("/profile", profileController.getProfile);
router.get("/profile/:id", profileController.getProfileById);
router.put("/update-profile", profileController.putUpdateProfile);

// exporting the routes
module.exports = router;