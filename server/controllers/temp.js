// *** THIS IS A TEMPORARY CONTROLLER 

// importing the Temp model
const Temp = require('../models/TempModel.js');

// all controllers
exports.postMessage = async (req, res) => {
    const {name, message} = req.body;
    console.log("Client sent the following => ", name, message);

    // Storing data in the database
    try {
        const tempDoc = await Temp.create({
            name, 
            message,
        });
        // Sending response back to the client
        res.json(tempDoc);
        console.log("Client message stored in the database");
    }
    catch (event) {
        res.status(422).json(event);
        console.log("Client message not stored in the database");
    }
};