// Importing the user model
const User = require('../models/User.js');

// Importing the jwt package
const jwt = require('jsonwebtoken');

// Importing the jwt secret token 
const jwtSecret = process.env.JWT_SECRET;

// All controllers
exports.getProfile = (req, res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if(err) {
                // throw err;
                console.error('JWT verification failed:', err);
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                const {name, email, _id} = await User.findById(userData.id);
                res.json({name, email, _id});
            }
        });
    } else {
        res.json(null);
    }
};

// Alternative code
// const { promisify } = require('util');
// const jwtVerify = promisify(jwt.verify);

// exports.getProfile = async (req, res) => {
//     const { token } = req.cookies;
//     if (token) {
//         try {
//             const userData = await jwtVerify(token, jwtSecret);
//             const { name, email, _id } = await User.findById(userData.id);
//             res.json({ name, email, _id });
//         } catch (err) {
//             console.error('JWT verification failed:', err);
//             res.status(401).json({ error: 'Unauthorized' });
//         }
//     } else {
//         res.json(null);
//     }
// };