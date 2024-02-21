// Importing the express module
const express = require("express");

// Importing book controller
const bookController = require("../controllers/book.js");

// Importing express router
const router = express.Router();

// All routes
router.get('/books', bookController.getAllBooks);
router.get('/books/:id', bookController.getBookById);

// exporting the routes
module.exports = router;