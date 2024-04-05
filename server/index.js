// Importing dotenv for the API Keys
require("dotenv").config();

// Importing all the modules
const express = require("express"); // express framework
const cors = require("cors"); // enabling CORS
const cookieParser = require("cookie-parser"); // parsing cookies
const mongoose = require("mongoose"); // ODM
const ws = require("ws"); // Importing 'ws' module for WebSocket
const jwt = require("jsonwebtoken"); // Import the 'jsonwebtoken' module

// Importing the jwt secret token
const jwtSecret = process.env.JWT_SECRET;

// Importing models
const Message = require("./models/Message");

// Importing routes
const tempRoutes = require("./routes/temp.js");
const authRoutes = require("./routes/auth.js");
const profileRoutes = require("./routes/profile.js");
const bookRoutes = require("./routes/book.js");
const sellBookRoutes = require("./routes/sellBook.js");
const uploadRoutes = require("./routes/upload.js");
const cartRoutes = require("./routes/cart.js");
const paymentRoutes = require("./routes/payment.js");
const messageRoutes = require("./routes/message.js");

// Creating an instance of the express application
const app = express();

// Middlewares
app.use(express.json()); // parsing incoming json data from requests
app.use(cookieParser()); // parsing cookies

// Implementing cors
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// Implementing the above imported routes
app.use(tempRoutes);
app.use(authRoutes);
app.use(profileRoutes);
app.use(bookRoutes);
app.use(sellBookRoutes);
app.use(uploadRoutes);
app.use(cartRoutes);
app.use(paymentRoutes);
app.use(messageRoutes);

// Running the express application
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Server running on port 8000");
  })
  .catch((err) => {
    console.log(err);
  });

// Start the Express server and listen on port 8000
const server = app.listen(8000);

// Create a WebSocket server wss using library 'ws'
const wss = new ws.WebSocketServer({ server });

wss.on("connection", (connection, req) => {
  // console.log(req.headers);    //...contains token

  // console.log("WebSocket connection established!");

  function notifyAboutOnlinePeople() {
    [...wss.clients].forEach((client) => {
      client.send(
        JSON.stringify({
          // 'online' property contains array of objects representing online users. Each object includes 'userId' and 'username' properties.
          online: [...wss.clients].map((c) => ({
            userId: c.userId,
            username: c.username,
          })),
        })
      );
    });
  }

  connection.isAlive = true;

  // Set up a timer that sends a ping to the client every 3 sec
  connection.timer = setInterval(() => {
    connection.ping();

    // Set up a death timer to terminate the connection if no pong is received within 1 second
    connection.deathTimer = setTimeout(() => {
      connection.isAlive = false;
      clearInterval(connection.timer);
      connection.terminate();
      notifyAboutOnlinePeople();
      // console.log('Dead!');
    }, 1000);
  }, 3000);

  // Event handler for receiving pong from the client
  connection.on("pong", () => {
    // Clear the death timer since pong is received indicating the connection is alive
    // console.log('pong');
    clearTimeout(connection.deathTimer);
  });

  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookieString = cookies
      .split(";")
      .find((str) => str.trim().startsWith("token="));
    // console.log(tokenCookieString);

    if (tokenCookieString) {
      const tokenValue = tokenCookieString.split("=")[1];
      // console.log("Token:", tokenValue);

      if (tokenValue) {
        // console.log(token);
        jwt.verify(tokenValue, jwtSecret, {}, (err, userData) => {
          if (err) throw err;
          console.log(userData); // { email: 'ankitaghadge03@gmail.com', id: '65bcd1cdfa0632bb2d002654', name: 'Ankita', iat: 1710041643 }

          // Extract id & name from the decoded JWT
          const { id, name } = userData;

          // Save userId and username to the connection object
          connection.userId = id;
          connection.username = name;
          // console.log(connection);  //...{userId: '65bcd1cdfa0632bb2d002654', username: 'Ankita'}
        });
      }
    }
  }

  connection.on("message", async (message) => {
    // console.log(typeof message);   //...Object
    // console.log(message.toString());   //...sent msg

    const messageData = JSON.parse(message.toString());
    // console.log(messageData);
    const { recipient, text } = messageData;
    if (recipient && text) {
      const messageDoc = await Message.create({
        sender: connection.userId,
        recipient,
        text,
      });
      // console.log("Created message!");

      [...wss.clients]
        .filter((c) => c.userId === recipient)
        .forEach((c) =>
          c.send(
            JSON.stringify({
              text,
              sender: connection.userId,
              recipient,
              _id: messageDoc._id,
            })
          )
        );
    }
  });

  // number of all connected WebSocket clients
  // console.log([...wss.clients].length);

  // extracting the username from each WebSocket client in the array.
  // console.log([...wss.clients].map((c) => c.username));

  notifyAboutOnlinePeople();
});

// wss.on("close", (data) => {
//   console.log("Disconnected!", data);
// });
