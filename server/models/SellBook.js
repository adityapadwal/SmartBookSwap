const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellBookSchema = new Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: String,
  publicationOrAuthor: { type: String, required: true },
  editionYear: { type: Number, default: 0 },
  typeOfBook: { type: String, required: true },
  transactionType: { type: String, required: true },
  condition: { type: String, required: true },
  coverImage: String,
  priceType: String,
  mrp: { type: Number, default: 0 },
  description: String,
  userName: { type: String, required: true },
  mobileNo: { type: Number, required: true },
  city: { type: String, required: true },
  // seller_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const SellBookModel = mongoose.model("SellBook", SellBookSchema);

module.exports = SellBookModel;
