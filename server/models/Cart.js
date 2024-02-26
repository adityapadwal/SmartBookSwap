const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
  items: [
    {
        productId: {
          type: mongoose.Schema.Types.ObjectId, 
          ref:'sellbooks',
          required: true,
        },
        quantity: {
          type: Number, 
          required: true,
        },
    }
  ]
});

const CartModel = mongoose.model("carts", CartSchema);

module.exports = CartModel;