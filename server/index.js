// Importing all the modules
const express = require('express'); // express framework
const cors = require('cors'); // enabling CORS
const cookieParser = require('cookie-parser'); // parsing cookies
const mongoose = require("mongoose"); // ODM

// Importing routes
const tempRoutes = require('./routes/temp');

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

// Testing request
// app.get('/test', (req, res) => {
//     res.json('Test ok!');
// });

// Implementing the above imported routes
app.use(tempRoutes);

// Running the express application
mongoose
    .connect('mongodb+srv://aditya:FaN34I0sUEp6Wtl9@cluster0.ksz4zpz.mongodb.net/?retryWrites=true&w=majority')
    .then((result) => {
        app.listen(8000);
    })
    .then(() => {
        console.log("Server running on port 8000");
    })
    .catch((err) => {
        console.log(err);
    });