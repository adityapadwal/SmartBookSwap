// importing the books model
const SellBook = require('../models/SellBook.js');

// All controllers
exports.getAllBooks = async(req, res) => {
    const allBooks = await SellBook.find();
    res.json(allBooks);
};