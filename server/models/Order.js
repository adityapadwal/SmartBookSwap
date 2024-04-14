const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
  seller: {type: mongoose.Schema.Types.ObjectId, ref:'users'},
  products: [
    {
        productId: {
          type: mongoose.Schema.Types.ObjectId, 
          ref:'soldbooks',
          required: true,
        },
        quantity: {
          type: Number, 
          required: true,
        },
    }
  ]
});

const OrderModel = mongoose.model("orders", OrderSchema);

module.exports = OrderModel;