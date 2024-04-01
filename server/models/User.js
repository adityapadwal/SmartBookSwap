const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, unique: true},
  email: { type: String, unique: true },
  phone: String,
  address: String,
  password: String,
  resetToken: String
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;