// importing the books model
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

exports.getFeaturedBooks = async(req, res) => {
    const allBooks = await SellBook.find().limit(8);
    if(allBooks) {
        res.json({success: true, featuredBooks: allBooks});
    } else {
        res.json({success: false, featuredBooks: []});
    }
};