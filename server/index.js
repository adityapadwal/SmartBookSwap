// Importing dotenv for the API Keys
require("dotenv").config(); 

// Importing all the modules
const express = require('express'); // express framework
const cors = require('cors'); // enabling CORS
const cookieParser = require('cookie-parser'); // parsing cookies
const mongoose = require("mongoose"); // ODM

// Importing routes
const tempRoutes = require('./routes/temp');
const authRoutes = require("./routes/auth.js");
const profileRoutes = require("./routes/profile.js");

// Creating an instance of the express application
const app = express();

// Middlewares
app.use(express.json()); // parsing incoming json data from requests 
app.use(cookieParser()); // parsing cookies

// Implementing cors
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

// Implementing the above imported routes
app.use(tempRoutes);
app.use(authRoutes);
app.use(profileRoutes);

// Running the express application
mongoose
    .connect(process.env.MONGO_URL)
    .then((result) => {
        app.listen(8000);
    })
    .then(() => {
        console.log("Server running on port 8000");
    })
    .catch((err) => {
        console.log(err);
    });