// Importing the express module
const express = require("express");

// Importing cart controller
const cartController = require("../controllers/cart.js");

// Importing express router
const router = express.Router();

// All routes
router.post('/cart', cartController.addProductToCart);
router.get('/cart', cartController.getAllCartItems);
router.post('/remove-from-cart', cartController.removeProduct);
router.get('/check-in-cart/:id', cartController.checkBookInCart);

// exporting the routes
module.exports = router;