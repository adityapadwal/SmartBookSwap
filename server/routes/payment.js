// importing the express module
const express = require("express");

// importing cart controller
const paymentController = require("../controllers/payment.js");

// importing express router
const router = express.Router();

// all routes
router.post('/create-checkout-session', paymentController.postCreatePayment);

// exporting the routes
module.exports = router;