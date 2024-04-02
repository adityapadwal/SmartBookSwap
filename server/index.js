// Importing dotenv for the API Keys
require("dotenv").config();

// Importing all the modules
const express = require("express"); // express framework
const cors = require("cors"); // enabling CORS
const cookieParser = require("cookie-parser"); // parsing cookies
const mongoose = require("mongoose"); // ODM
const ws = require("ws");
const jwt = require("jsonwebtoken");
const fs = require("fs");

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
const messageRoutes = require("./routes/message.js");
const cartRoutes = require("./routes/cart.js");
const paymentRoutes = require("./routes/payment.js");

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
app.use(messageRoutes);
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(cartRoutes);
app.use(paymentRoutes);

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

// Create a WebSocket server using the HTTP server created by Express
const wss = new ws.WebSocketServer({ server });

// Event handler for WebSocket connections
wss.on("connection", (connection, req) => {
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
    clearTimeout(connection.deathTimer);
  });

  const cookies = req.headers.cookie;
  if (cookies) {
    const tokenCookieString = cookies
      .split(";")
      .find((str) => str.startsWith("token="));
    // console.log(tokenCookieString);

    if (tokenCookieString) {
      const token = tokenCookieString.split("=")[1];
      if (token) {
        // console.log(token);
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
          if (err) throw err;
          // console.log(userData);  // { email: 'ankitaghadge03@gmail.com', id: '65bcd1cdfa0632bb2d002654', name: 'Ankita', iat: 1710041643 }

          // Extract id and name from the decoded JWT
          const { id, name } = userData;

          // Save userId and username to the connection object
          connection.userId = id;
          connection.username = name;
          // console.log(connection);
        });
      }
    }
  }

  connection.on("message", async (message) => {
    // console.log(typeof message);
    // console.log(message.toString());

    const messageData = JSON.parse(message.toString());
    // console.log(messageData);
    const { recipient, text, file } = messageData;
    let filename = null;
    if (file) {
      // Split the file name into an array of parts using '.' as the separator
      const parts = file.name.split(".");

      // Extract the file extension by accessing the last element of the parts array
      const ext = parts[parts.length - 1];
      filename = Date.now() + "." + ext;
      // console.log(filename);
      const path = __dirname + "/uploads/" + filename;
      const bufferData = new Buffer(file.data.split(",")[1], "base64");
      fs.writeFile(path, bufferData, () => {
        // console.log("File saved: " + path);
      });
    }
    if (recipient && (text || file)) {
      const messageDoc = await Message.create({
        sender: connection.userId,
        recipient,
        text,
        file: file ? filename : null,
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
              file: file ? filename : null,
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
