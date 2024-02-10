// controllers/sellBook.js
const SellBook = require("../models/SellBook.js");

// Importing the jwt model
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

exports.addBook = async (req, res) => {
  const { token } = req.cookies;
  const {
    title,
    category,
    subcategory,
    publicationOrAuthor,
    editionYear,
    typeOfBook,
    transactionType,
    condition,
    addedPhotos,
    priceType,
    mrp,
    description,
  } = req.body;

  try {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        throw err;
      } else {
        const newBook = await SellBook.create({
          owner: userData.id,
          title: title,
          category: category,
          subcategory: subcategory,
          publicationOrAuthor: publicationOrAuthor,
          editionYear: editionYear,
          typeOfBook: typeOfBook,
          transactionType: transactionType,
          condition: condition,
          photos: addedPhotos,
          priceType: priceType,
          mrp: mrp,
          description: description,
        });
        res.json(newBook);
        console.log("Book added in database!");
      }
    });
  } catch(error) {
    res.status(422).json(error);
    console.log("Book not added in database!");
  }
};

exports.getAllBooks = async (req, res) => {
  let books;
  try {
    books = await SellBook.find();
  } catch (err) {
    return console.log(err);
  }

  if (!books) {
    return res.status(500).json({ message: "Request Failed!" });
  }
  return res.status(200).json({ books });
};

exports.getBookById = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await SellBook.findById(id);
  } catch (err) {
    return console.log(err);
  }

  if (!book) {
    return res.status(404).json({ message: "Invalid Book Id!" });
  }
  return res.status(200).json({ book });
};

exports.editBook = async (req, res) => {
  const id = req.params.id;
  let book = await SellBook.findById(id);
  if (!book) {
    console.log("Book not found!", 404);
  }
  try {
    updatedbook = await SellBook.findByIdAndUpdate(id, req.body);
  } catch (err) {
    return console.log(err);
  }
  if (!updatedbook) {
    return res.status(500).json({ message: "Book is not updated!" });
  }
  res.status(200).json({ message: "Book Updated Successfully!" });
};

exports.deleteBook = async (req, res) => {
  const id = req.params.id;
  let book;
  try {
    book = await SellBook.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
  res.status(200).json({ message: "Book deleted successfully!" });
};
