const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  address: String,
  password: String,
  resetToken: String
});

const UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;