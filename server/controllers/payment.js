// Importing dotenv for the API Keys
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Importing the jwt package
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

exports.postCreatePayment = async (req, res) => {
    // getting the final billing products from the client
    const {finalProductList} = req.body;

    console.log("Final Product List => ", finalProductList); // debugging...

    const lineItems = finalProductList.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.productName,
                images:[product.productImage]
            },
            unit_amount:product.productPrice * 100,
        },
        quantity:product.productQuantity
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:5173/success",
        cancel_url:"http://localhost:5173/cart",
    });

    res.json({id:session.id});
};