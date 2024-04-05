// importing the models
const Message = require("../models/Message.js");

// Importing the jwt package
const jwt = require("jsonwebtoken");

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// All controllers
exports.getAllMessages = async (req, res) => {
  // res.json(req.params);    //...{ id: 'id_value' }
  const userId = req.params.id;
  const { token } = req.cookies;

  // console.log(userId, token);

  if (token) {
    jwt.verify(token, jwtSecret, {}, (err, userData) => {
      if (err) throw err;
      // console.log(userDetails);   ...{ email: 'ankitaghadge03@gmail.com', id: '65bcd1cdfa0632bb2d002654', name: 'Ankita', iat: 1711722079 }
      const ourUserId = userData.id;

      // console.log(userId, ourUserId);
      Message.find({
        // find messages where either the sender or the recipient matches either userId (extracted request parameters) or ourUserId (extracted from the token)
        sender: { $in: [userId, ourUserId] },
        recipient: { $in: [userId, ourUserId] },
      })
        .sort({ createdAt: 1 }) // Sorting the messages by their creation date in ascending order ensures that the most recent messages appear last in the result set
        .then((messages) => {
          res.json(messages);
        })
        .catch((error) => {
          res.status(500).json({ error: "Internal server error" });
        });
    });
  } else {
    res.status(401).json("No token!");
  }
};
