// importing the models
const Order = require('../models/Order');
const SoldBook = require('../models/SoldBook');
const User = require('../models/User');

// importing the mongoose model
const mongoose = require("mongoose");

// importing the jwt package
const jwt = require("jsonwebtoken");

// importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// fetches userId from cookies
function getUserId(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) {
                reject(err);
            } else {
                const userId = userData.id; 
                resolve(userId);
            }
        });
    })
}

function getDetails1(purchasedProductDetails) {
    const necessaryDeatils = {
        productTitle: purchasedProductDetails.title,
        productPublicationOrAuthor: purchasedProductDetails.publicationOrAuthor,
        productPhoto: purchasedProductDetails.photos[0],
        productMrp: purchasedProductDetails.mrp
    }
    return necessaryDeatils;
}

function getDetails2(sellerDetails) {
    const necessaryDeatils = {
        sellerName: sellerDetails.name,
        sellerAddress: sellerDetails.address
    }
    return necessaryDeatils;
}

// all controllers
exports.getPurchaseHistory = async(req, res) => {
    try {
        const { token } = req.cookies;
        if(token) {
            // fetching userId from the cookies
            const userId = await getUserId(token);
            if(userId) {
                // fetching all past orders of the user
                const userOrders = await Order.find({buyer: userId});

                const allOrders = [];
                await Promise.all(userOrders.map(async(order) => {
                    await Promise.all(order.products.map(async(product) => {
                        const purchasedProductDetails = await SoldBook.findById({_id: product.productId});
                        const minimalPurchasedProductDetails = getDetails1(purchasedProductDetails);
                        const sellerDetails = await User.findById({_id: product.seller});
                        const minimalSellerDetails = getDetails2(sellerDetails);
                        const purchasedProductQuantity = product.quantity;
                        allOrders.push({...minimalPurchasedProductDetails, productQuantity:purchasedProductQuantity, ...minimalSellerDetails, productPurchaseDate: order.purchaseDate});
                    }));
                }));

                // sending all order details back to the client
                res.json({success: true, allOrders: allOrders});
                
            } else {
                throw "UserId not present...";
            }
        } else {
            throw "Unable to fetch cookies...";
        }

    } catch(error) {
        console.log("Error while fetching purchase history, ", error);
        res.json({success: false});
    }
};