const SellBook = require('../models/SellBook.js');
const Cart = require("../models/Cart.js");
const User = require('../models/User.js');

// Importing the jwt package
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

exports.addProductToCart = async (req, res) => {
  const { productId } = req.body; // finding owner of the cart using cookie
  const { token } = req.cookies; // id of the owner of the cart

  try {
      const userData = jwt.verify(token, jwtSecret);
      const userId = userData.id;

      let cart = await Cart.findOne({ owner: userId });

      if (cart) {
          // If cart exists, update it
          cart.items.push({ productId, quantity: 1 }); 
          await cart.save();
          res.json({ success: true, cart });
      } else {
          // If cart doesn't exist, create a new one
          cart = await Cart.create({
              owner: userId,
              items: [{ productId, quantity: 1 }] 
          });
          res.json({ success: true, cart });
      }
  } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ success: false, error: "Unable to add product to cart" });
  }
};

exports.getAllCartItems = async(req, res) => {
    const { token } = req.cookies;
    try {
        const userData = jwt.verify(token, jwtSecret); // finding owner of the cart using cookie
        const userId = userData.id; // id of the owner of the cart
        
        const userCart = await Cart.findOne({ owner: userId }); // getting entire cart
        if (userCart) {
            // console.log("Displaying Entire User Cart:"); // debugging...
            // console.log(userCart); // debugging...

            let cartProductIds = []; // array of cart product IDs
            userCart.items.map((productId) => {
                cartProductIds.push(productId);
            })
            // console.log("Displaying User Cart Product Ids:"); // debugging...
            // console.log(cartProductIds); // debugging...

            let cartProducts = await Promise.all(cartProductIds.map(async (product) => {
                const bookDetails = await SellBook.findById(product.productId);
                const bookSeller = await User.findById(bookDetails.owner); 
                const bookSellerName = bookSeller.name;
                const displayBookDetails = {
                    id: bookDetails._id,
                    title: bookDetails.title,
                    mrp: bookDetails.mrp,
                    bookImage: bookDetails.photos[0],
                    quantity: product.quantity,
                    sellerName: bookSellerName
                }
                return displayBookDetails;
            }));
            
            // console.log("Displaying all the User Cart Books"); // debugging...
            // console.log(cartProducts); // debugging...

            res.json({ success: true, cart: cartProducts });
        } else {
            res.json({ success: false, cart: [] }); // Send an empty array if cart is not found
        }
    } catch (error) {
        console.error("Error in finding cart items:", error);
        res.status(500).json({ success: false, error: "Unable to fetch cart products" });
    }
}

exports.removeProduct = async(req, res) => {
    const { productId } = req.body; // product ID to be deleted from cart
    const { token } = req.cookies; // user cookie

    try {
        const userData = jwt.verify(token, jwtSecret); // finding owner of the cart using cookie
        const userId = userData.id; // id of the owner of the cart

        const cart = await Cart.findOne({owner: userId}); // Finding the cart of the owner

        if(!cart) {
            return res.status(404).json({success: false, error: "Cart not Found"});
        } else {
            // Filter out the item with the provided productId from the cart's items array
            cart.items = cart.items.filter((item) => item.productId.toString() !== productId);
            
            // Save the updated cart
            await cart.save();
            
            res.json({ success: true, message: "Product removed from cart successfully" });
        }
    } catch (error) {
        console.error("Error in removing products from cart:", error);
        res.status(500).json({ success: false, error: "Unable to removing products from cart" });
    }
}

exports.checkBookInCart = async(req, res) => {
    const {id} = req.params;
    const { token } = req.cookies; // id of the owner of the cart

    // first check if the user-cart is present
  try {
      const userData = jwt.verify(token, jwtSecret);
      const userId = userData.id;

      let cart = await Cart.findOne({ owner: userId });
      if (cart) {
        // If user-cart exists, check for product in Cart
        let isBookInCart = false;
        for (const item of cart.items) {
            if (item.productId.toString() === id) {
                isBookInCart = true;
                break;
            }
        }
        res.json({ success: true, isBookInCart: isBookInCart });
    } else {
          // If cart doesn't exist, product not present in cart
          res.json({ success: true, isBookInCart: false});
      }
  } catch (error) {
      console.error("Error adding product to cart:", error);
      res.status(500).json({ success: false, error: "Unable to add product to cart" });
  }
}