// Importing the express module
const express = require("express");

// Importing profile controller
const profileController = require("../controllers/profile.js");

// Importing express router
const router = express.Router();

// All routes
router.get("/profile", profileController.getProfile);
router.put("/update-profile", profileController.putUpdateProfile);

router.get("/profile/:id", profileController.getSellerLocation);
router.get("/getAllListedBooks", profileController.getAllListedBooks);
router.get("/getAllProfiles", profileController.getAllProfiles);

// exporting the routes
module.exports = router;
