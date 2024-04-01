// importing the models
const SellBook = require('../models/SellBook.js');
const User = require('../models/User.js');

// All controllers
exports.getAllBooks = async(req, res) => {
    const allBooks = await SellBook.find();
    res.json(allBooks);
};

exports.getBookById = async(req, res) => {
    const {id} = req.params;
    
    const bookInfo = await SellBook.findById(id); // fetching book from db
    const ownerId = bookInfo.owner; 
    const bookOwner = await User.findById(ownerId); // fetching owner (seller) of book

    res.json({bookInfo, bookOwner});
};