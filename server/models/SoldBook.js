const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SoldBookSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
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
});

const SoldBookModel = mongoose.model("SoldBook", SoldBookSchema);

module.exports = SoldBookModel;