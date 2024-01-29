// Importing the user model
const User = require('../models/User.js');

// Importing the jwt package
const jwt = require('jsonwebtoken');

// Importing the jwt secret token 
const jwtSecret = process.env.JWT_SECRET;

// All controllers
exports.getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if (err) {
                console.error('JWT verification failed:', err);
                res.status(401).json({ error: 'Unauthorized' });
            } else {
                try {
                    const user = await User.findById(userData.id);
                    if (user) {
                        const { _id, name, email, phone, address } = user;
                        res.json({ _id, name, email, phone, address });
                    } else {
                        res.status(404).json({ error: 'User not found' });
                    }
                } catch (error) {
                    console.error('Error fetching user:', error);
                    res.status(500).json({ error: 'Internal Server Error' });
                }
            }
        });
    } else {
        res.json(null);
    }
};

exports.putUpdateProfile = async (req, res) => {
    try {
      const { token } = req.cookies;
  
      if (token) {
        // Verify the JWT token
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
          if (err) {
            console.error('JWT verification failed:', err);
            return res.status(401).json({ error: 'Unauthorized' });
          }
  
          try {
            // Find the user by ID
            const user = await User.findById(userData.id);
  
            if (user) {
              // Update user profile fields
              user.name = req.body.name;
              user.phone = req.body.phone;
              user.address = req.body.address;
  
              // Save the updated user
              const updatedUser = await user.save();
  
              // Respond with the updated user data
              const { name, email, _id } = updatedUser;
              return res.json({ name, email, _id });
            } else {
              return res.status(404).json({ error: 'User not found' });
            }
          } catch (error) {
            console.error('Error updating user profile:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
        });
      } else {
        return res.status(401).json({ error: 'Unauthorized' });
      }
    } catch (error) {
      console.error('Error updating user profile:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };