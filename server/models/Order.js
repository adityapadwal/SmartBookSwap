const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'soldbooks',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
      }
    }
  ],
  purchaseDate: { type: String, required: true }
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;