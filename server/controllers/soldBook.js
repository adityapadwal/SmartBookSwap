// importing models
const Order = require('../models/Order.js');
const SoldBook = require('../models/SoldBook.js');
const User = require('../models/User.js');

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

// getting product buyer details
async function getMinimalProductDetails(productId) {
    const productDetails = await SoldBook.findOne({_id: productId});
    const minimalProductDetails = {
        title: productDetails.title,
        publicationOrAuthor: productDetails.publicationOrAuthor,
        image: productDetails.photos[0],
        mrp: productDetails.mrp
    }
    return minimalProductDetails;
}

// getting buyer details
async function getMinimalBuyerDetails(userId) {
    const userDetails = await User.findOne({_id: userId});
    const minimalBuyerDetails = {
        buyerName: userDetails.name,
        buyerAddress: userDetails.address
    }
    return minimalBuyerDetails;
}

// all controllers
exports.getSoldBooks = async(req, res) => {
    try {
        const { token } = req.cookies;
        if(token) {
            // user details from the cookies
            const userId = await getUserId(token);
            if(userId) {
                // fetching all past orders where the user is the seller
                const userOrders = await Order.find({"products.seller": userId});
                if(userOrders) {
                    const soldProducts = [];
                    userOrders.forEach((order) => {
                        const buyer = order.buyer;
                        order.products.forEach((product) => {
                            const sellerId = product.seller.toString();
                            if(sellerId === userId) {
                                const soldProduct = {
                                    productId: product.productId,
                                    buyerId: buyer,
                                    quantity: product.quantity,
                                    purchaseDate: order.purchaseDate,
                                }
                                soldProducts.push(soldProduct);
                            }
                        });
                    });
                    
                    // final array of sold product details
                    const soldProductsDetails = [];
                    await Promise.all(soldProducts.map(async(product) => {
                        const productDetails = await getMinimalProductDetails(product.productId);
                        const buyerDetails = await getMinimalBuyerDetails(product.buyerId);
                        const quantity = product.quantity;
                        const purchaseDate = product.purchaseDate;

                        soldProductsDetails.push({...productDetails, ...buyerDetails, quantity, purchaseDate});
                    }));


                    res.json({success: true, data: soldProductsDetails});
                } else {
                    res.json({success: false, data: []});
                }
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