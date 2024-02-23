// Importing the express module
const express = require("express");

// Importing profile controller
const sellBookController = require("../controllers/sellBook.js");

// Importing express router
const router = express.Router();

// All routes
router.post("/addBook", sellBookController.addBook);
// router.get("/getAllBooks", sellBookController.getAllBooks);
// router.get("/getBookById/:id", sellBookController.getBookById);
// router.put("/editBook/:id", sellBookController.editBook);
// router.delete("/deleteBook/:id", sellBookController.deleteBook);

// exporting the routes
module.exports = router;
