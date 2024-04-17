// importing the express module
const express = require("express");

// importing purchaseHistory controller
const purchaseHistoryController = require("../controllers/purchaseHistory");

// importing express router
const router = express.Router();

// all routes
router.get('/history', purchaseHistoryController.getPurchaseHistory);

// exporting the routes
module.exports = router;