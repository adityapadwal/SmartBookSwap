// *** THIS IS A TEMPORARY MODEL

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TempSchema = new Schema({
  name: String,
  message: String,
});

const TempModel = mongoose.model('Temp', TempSchema);

module.exports = TempModel;

