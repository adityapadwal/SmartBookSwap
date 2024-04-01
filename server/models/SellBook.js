const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SellBookSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  title: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: String,
  publicationOrAuthor: { type: String, required: true },
  editionYear: { type: Number, default: 0 },
  typeOfBook: { type: String, required: true },
  transactionType: { type: String, required: true },
  condition: { type: String, required: true },
  photos: [String],
  priceType: String,
  mrp: { type: Number, default: 0 },
  description: String,
  // addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // buyer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const SellBookModel = mongoose.model("SellBook", SellBookSchema);

module.exports = SellBookModel;
