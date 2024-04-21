// importing the database models
const SellBook = require('../models/SellBook.js');
const SoldBook = require('../models/SoldBook.js');
const Cart = require("../models/Cart.js");
const Order = require("../models/Order.js");

// Importing dotenv for the API Keys
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Importing the jwt package
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// function to get formatted date
function getDate() {
    // Get current date
    const currentDate = new Date();

    // Get day, month, and year components
    const day = String(currentDate.getDate()).padStart(2, '0'); // Ensure two digits for day
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based, so add 1
    const year = currentDate.getFullYear();

    // Format date as ddmmyyyy
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
};

// Handle order creation and product migration after successful payment
const handleSuccessfulPayment = async (req, res) => {
    try {
        // 1. getting user id from cookies
        let user = null;
        const { token } = req.cookies;
        if (token) {
            jwt.verify(token, jwtSecret, {}, (err, userData) => {
                if (err) {
                    throw (err);
                } else {
                    user = userData; 
                }
            });
        } else {
            throw "Token not found in cookies";
        }
        const userId = user.id;

        // 2. get the product ids of cart items
        let cartProductIds = [];
        const userCart = await Cart.findOne({ owner: userId });
        userCart.items.forEach((item) => {
            cartProductIds.push(item.productId);
        });

        // 3. creating the order in the order db
        try {
            // array to hold products for the order
            const orderProducts = [];
            for (const item of userCart.items) {
                // process for getting the seller of the product
                const productId = item.productId;
                const productDetails = await SellBook.findOne({_id: productId});
                const sellerId = productDetails.owner;
                // Add the product ID and quantity to the orderProducts array
                orderProducts.push({
                    productId: item.productId,
                    quantity: item.quantity,
                    seller: sellerId
                });
            }

            // function call to get date
            const date = getDate();
            
            // creating a new order
            const order = new Order ({
                buyer: userId,
                products: orderProducts,
                purchaseDate: date
            });
            //saving the order
            await order.save();

        } catch(error) {
            console.error("Error creating order:", error);
            throw error;
        }

        // 4. Migrating products
        try {
            // Iterate through each product ID in cartProductIds
            for (const productId of cartProductIds) {
                // Find the corresponding product in the SellBook collection
                const product = await SellBook.findById(productId);
                // Create a new document in the SoldBook collection with the same data
                const soldProduct = new SoldBook({
                    _id: productId,
                    owner: product.owner,
                    title: product.title,
                    category: product.category,
                    subcategory: product.subcategory,
                    publicationOrAuthor: product.publicationOrAuthor,
                    editionYear: product.editionYear,
                    typeOfBook: product.typeOfBook,
                    transactionType: product.transactionType,
                    condition: product.condition,
                    photos: product.photos,
                    priceType: product.priceType,
                    mrp: product.mrp,
                    description: product.description
                });
                // Save the sold product to the SoldBook collection
                await soldProduct.save();
                // Remove the product from the SellBook collection
                await SellBook.deleteOne({ _id: productId })
            }

        } catch (error) {
            console.error("Error moving products to SoldBook:", error);
            throw error;
        }

        // 5. deleting the user cart items
        try {
            // find the cart for the specified user
            const userCart = await Cart.findOne({ owner: userId });

            // remove all items from the cart
            userCart.items = [];

            // save the updated cart
            await userCart.save();

        } catch (error) {
            console.error("Error deleting user cart items:", error);
            throw error;
        }

        // Send response to client indicating successful payment and order creation
        // res.json({ success: true });
    } catch (error) {
        console.error("Error processing successful payment:", error);
        res.status(500).json({ error: "Error processing successful payment" });
    }
}

exports.postCreatePayment = async (req, res) => {
    // getting the final billing products from the client
    const { finalProductList } = req.body;

    // creating line items for stripe checkout
    const lineItems = finalProductList.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.productName,
                images: [product.productImage]
            },
            unit_amount: product.productPrice * 100,
        },
        quantity: product.productQuantity
    }));

    try {
        // create a stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: "http://localhost:5173/history",
            cancel_url: "http://localhost:5173/cart",
        });

        // Redirecting to the checkout page using Stripe API
        res.json({ id: session.id });

        // handle order creation and product migration
        handleSuccessfulPayment(req, res);
    } catch (error) {
        console.error("Error occurred while processing payment:", error);
        res.status(500).json({ error: "Payment processing failed" });
    }
};